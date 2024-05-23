Sure! I'll walk you through the process of installing [[Hashicorp Vault About|HashiCorp Vault]] on a K3s cluster. Here's a step-by-step guide:

### Prerequisites
1. **K3s installed and running** on your Proxmox Debian VM.
2. **kubectl** configured to interact with your K3s cluster.
3. **Helm** installed on your machine (for managing Kubernetes applications).

### Step 1: Add the [[K3S Helm|Helm]] Repository
First, you need to add the official HashiCorp Helm repository to your Helm configuration.

```sh
helm repo add hashicorp https://helm.releases.hashicorp.com
helm repo update
```

### Step 2: Create a [[K3S Namespaces|Namespaces]] for [[Hashicorp Vault About|Vault]]
Create a namespace for Vault in your Kubernetes cluster.

```sh
kubectl create namespace vault
```

### Step 3: Install [[Hashicorp Vault About|Vault]] using [[K3S Helm|Helm]]
Use Helm to install [[Hashicorp Vault About|Vault]] in the `vault` namespace. For a basic installation, you can use the default values provided by the Helm chart.

```sh
helm install vault hashicorp/vault --namespace vault
```

This command will deploy [[Hashicorp Vault About|Vault]] with the default configuration. You can customize the deployment by creating a `values.yaml` file with your desired configuration and passing it to the Helm install command:

```sh
helm install vault hashicorp/vault --namespace vault -f values.yaml
```

### Step 4: Initialize and [[Hashicorp Vault Unsealing Vault|Unseal]] [[Hashicorp Vault About|Vault]]
After the Vault pods are up and running, you need to initialize and unseal Vault.

1. **Get the Vault pod name**:

    ```sh
    kubectl get pods --namespace vault
    ```

    Find the name of the Vault pod, it should be something like `vault-0`.

2. **Initialize Vault**:

    ```sh
    kubectl exec -it vault-0 --namespace vault -- vault operator init
    ```

    This command will output the unseal keys and the root token. **Save these securely**, as they are required to unseal Vault and to authenticate as the root user.

3. **[[Hashicorp Vault Unsealing Vault|Unsealing Vault]]**:

    You need to unseal Vault using the unseal keys. Repeat the following command three times with different unseal keys:

    ```sh
    kubectl exec -it vault-0 --namespace vault -- vault operator unseal <Unseal_Key>
    ```

### Step 5: Configure Vault
1. **Authenticate with the root token**:

    ```sh
    kubectl exec -it vault-0 --namespace vault -- vault login <Root_Token>
    ```

2. **Enable Kubernetes Authentication** (Optional but recommended for Kubernetes integration):

    ```sh
    kubectl exec -it vault-0 --namespace vault -- vault auth enable kubernetes
    ```

3. **Configure the Kubernetes authentication method**:

    ```sh
    VAULT_SA_NAME=$(kubectl get sa vault -o jsonpath="{.secrets[*]['name']}" --namespace vault)
    SA_JWT_TOKEN=$(kubectl get secret $VAULT_SA_NAME -o jsonpath="{.data.token}" --namespace vault | base64 --decode)
    SA_CA_CRT=$(kubectl get secret $VAULT_SA_NAME -o jsonpath="{.data['ca\.crt']}" --namespace vault | base64 --decode)
    K8S_HOST=$(kubectl config view --raw --minify --flatten -o jsonpath="{.clusters[].cluster.server}")

    kubectl exec -it vault-0 --namespace vault -- vault write auth/kubernetes/config \
      token_reviewer_jwt="$SA_JWT_TOKEN" \
      kubernetes_host="$K8S_HOST" \
      kubernetes_ca_cert="$SA_CA_CRT"
    ```

### Step 6: Verify the Installation
1. **Check the status of Vault**:

    ```sh
    kubectl exec -it vault-0 --namespace vault -- vault status
    ```

    This should show that Vault is initialized and unsealed.

### Step 7: Access Vault UI (Optional)
To access the Vault UI, you can port-forward the Vault service to your local machine:

```sh
kubectl port-forward svc/vault-ui 8200:8200 --namespace vault
```

Now you can access the Vault UI at `http://localhost:8200`.

### Conclusion
You have now installed and configured [[Hashicorp Vault About|HashiCorp Vault]] on your K3s cluster. This setup provides a secure way to manage secrets in your Kubernetes environment. Make sure to securely store your unseal keys and root token, as they are critical for maintaining access to your Vault instance.