1. Kubernetes Connection Refused Fix

- When running into this error:
```sh
p-k3s-master# helm install my-nginx-ingress ingress-nginx/ingress-nginx \

--namespace ingress-nginx --create-namespace
  
Error: INSTALLATION FAILED: Kubernetes cluster unreachable: Get "http://localhost:8080/version": dial tcp [::1]:8080: connect: connection refused
```

- run:
```sh
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
```

---

2. Alpine VSCode Fix
   
- Install the following
```sh
apk update

apk add gcompat libstdc++ curl bash git zsh grep curl wget jq util-linux-misc procps
```

- Modify `/etc/ssh/sshd-config`
```sh
AllowTcpForwarding yes
PermitTunnel       yes
# OR
# GatewayPorts yes
```

- Run
```sh
rc-service sshd restart
```

---

3. Alpine Terminal Beautify
   
- Modify terminal to use ohmyzsh
```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
- Modify terminal to use p10k (Make sure to use monospace font) 
```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k                                                                    
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```

- Restart the terminal

---

4. Install K3s and Helm
	- K3s:
		- `curl -sfL https://get.k3s.io | sh - `
		- Without Traefik
			- `curl -sfL https://get.k3s.io | sh -s - --disable traefik`
	- Helm:
		- `curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash `
	- Agent:
		- `curl -sfL https://get.k3s.io | K3S_URL=https://192.168.1.214:6443 K3S_TOKEN=TOKEN sh -s - agent`
----

5. Install Nginx, Prometheus, and Grafana 

- Install ingress-nginx
```sh
helm install master-ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx \
  --set controller.metrics.enabled=true \
  --set-string controller.podAnnotations."prometheus\.io/scrape"="true" \
  --set-string controller.podAnnotations."prometheus\.io/port"="10254"
```

- Install Prometheus 
	- `kubectl apply --kustomize github.com/kubernetes/ingress-nginx/deploy/prometheus/`

-  Install Grafana
	- `kubectl apply --kustomize github.com/kubernetes/ingress-nginx/deploy/grafana/`

---

6. Time Fix with chronyd

If getting an error like this on the prometheus webui:

	Warning! Detected 33.52 seconds time difference between your browser and the server. Prometheus relies on accurate time and time drift might cause unexpected query results.

- Install chrony
```sh
apk update
apk add chrony
```

- Configure chrony `vi /etc/chrony/chrony.conf`
```sh
# Make sure this uri exists
server pool.ntp.org iburst
```

- Start and Enable chrony
```sh
rc-service chronyd start
rc-update add chronyd
```

- Force Synchronize Current Time
```sh
chronyc makestep
```

- Verify time is right
```sh
date
chronyc tracking
```

---

7. Install K9s

- Find the K9s Binary for your system
```sh
curl -s https://api.github.com/repos/derailed/k9s/releases/latest | grep browser_download_url
```
	
-  Download the K9s Binary
```sh
wget https://github.com/derailed/k9s/releases/download/v0.24.10/<DOWNLOAD_TYPE>.tar.gz
```

- Extract the k9s Binary:
```sh
tar -xvf <DOWNLOAD_TYPE>.tar.gz
```

-  Move K9s Binary to a directory in your path:
```sh
mv k9s /usr/local/bin/
```

- Check the K9s Version
```sh
k9s version
```

----
8. Yaml error decoding from json: illegal base64 data at input byte

-  The issue here is the data in the yaml must be base64.
	- EX Incorrect:
	  ```yaml
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
    name: example-csr
spec:
    request: $(cat /path/to/name.crt) # OR KEY
    signerName: kubernetes.io/kube-apiserver-client
    usages:
    - digital signature
    - key encipherment
    - client auth
```

	- EX Correct:
```yaml
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
    name: example-csr
spec:
    request: LS0tLS1CRUdJTUMxM2IzSnJaWEl3Z2dFaU1BMEdDU3FHU0liMwpEUUVCQVFVQUE0SUJEd0F3Z2dFS0FvSUJBUURhYllONFJhajVV==
    signerName: kubernetes.io/kube-apiserver-client
    usages:
    - digital signature
    - key encipherment
    - client auth	  
```

---
9. Deployment Operation Cannot Be Fulfilled
- If you run into an error that looks like this:
```
to:
Resource: "apps/v1, Resource=deployments", GroupVersionKind: "apps/v1, Kind=Deployment"
Name: "grafana", Namespace: "ingress-nginx"
for: "./grafana/grafana-deployment.yaml": error when patching "./grafana/grafana-deployment.yaml": Operation cannot be fulfilled on deployments.apps "grafana": the object has been modified; please apply your changes to the latest version and try again
```

- You must retrieve the target deployment 
	- Ex Grafana:
```sh
kubectl get deployment grafana -n ingress-nginx -o yaml > ./grafana/current-grafana-deployment.yaml       
```

- Then only change out the business logic, leave the meta logic such as :
```yaml
# !!!!! LEAVE THIS ALONE !!!!!
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "11"
  creationTimestamp: "2024-05-26T05:02:29Z"
  generation: 11
  labels:
    app.kubernetes.io/name: grafana
    app.kubernetes.io/part-of: ingress-nginx
  name: grafana
  namespace: ingress-nginx
  resourceVersion: "241696"
  uid: fddf3917-8143-4c92-9e97-04373340d84f

#  ---> CHANGE THIS SECTION <---
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app.kubernetes.io/name: grafana
      app.kubernetes.io/part-of: ingress-nginx
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
    type: RollingUpdate


# !!!!! LEAVE THIS ALONE !!!!!
status:
  availableReplicas: 1
  conditions:
  - lastTransitionTime: "2024-05-26T05:02:29Z"
    lastUpdateTime: "2024-05-26T05:02:29Z"
    message: Deployment has minimum availability.
    reason: MinimumReplicasAvailable
    status: "True"
    type: Available
  - lastTransitionTime: "2024-05-26T05:02:29Z"
    lastUpdateTime: "2024-05-28T13:41:49Z"
    message: ReplicaSet "grafana-6945c5989" has successfully progressed.
    reason: NewReplicaSetAvailable
    status: "True"
    type: Progressing
  observedGeneration: 11
  readyReplicas: 1
  replicas: 1
  updatedReplicas: 1

```

---
10. ISCSI Logout
- Logging out is annoying on debian:
```sh
iscsiadm -m session --logout
iscsiadm -m node --logoutall=all
iscsiadm -m node --op delete --targetname iqn.2024-06.local.p-san:storage.target1
```

----
11. Attach new vm as worker node

```sh
curl -sfL https://get.k3s.io | K3S_URL=https://<k3s-master-ip>:6443 K3S_TOKEN=<your-token> sh -

```

----
12. Phrontistery coder iSCSI drive doesnt mount on boot/restart
- run this
```sh
tgtadm --lld iscsi --mode logicalunit --op new --tid 1 --lun 1 --backing-store /dev/sdb1
```

----
13. Configure iSCSI username/password 
```sh
iscsiadm -m node -T iqn.2024-06.local.p-san:storage.target1 -p 192.168.1.176 -o update -n node.session.auth.authmethod -v CHAP
iscsiadm -m node -T iqn.2024-06.local.p-san:storage.target1 -p 192.168.1.176 -o update -n node.session.auth.username -v phrontistery_user
iscsiadm -m node -T iqn.2024-06.local.p-san:storage.target1 -p 192.168.1.176 -o update -n node.session.auth.password -v hjgkhkhhj
```
- login with
```sh
iscsiadm -m node -T iqn.2024-06.local.p-san:storage.target2 -p 192.168.1.176 -l
```

---
14.
- df
