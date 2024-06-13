### Generate New Certificate Signing Request and Sign It

1. Generate a new private key:
```sh
openssl genrsa -out auth-worker.key 2048
```

2. Create a new certificate signing request (CSR):
```sh
openssl req -new -key auth-worker.key -out auth-worker.csr -subj "/CN=auth-worker"
```

3. Sign the CSR with the correct CA certificate:    
```sh
openssl x509 -req -in auth-worker.csr -CA /var/lib/rancher/k3s/server/tls/server-ca.crt -CAkey /var/lib/rancher/k3s/server/tls/server-ca.key -CAcreateserial -out auth-worker.crt -days 365
```

4. Verify the signed certificate:
```sh
openssl verify -CAfile /var/lib/rancher/k3s/server/tls/server-ca.crt auth-worker.crt
```

----
### Encode Certificates and Keys to Base64 and Save as Files

1. **Encode the new certificate to base64 and save to a file:**
```sh
cat auth-worker.crt | base64 -w 0 > auth-worker.crt.base64
```

2. **Encode the private key to base64 and save to a file:**
```sh
cat auth-worker.key | base64 -w 0 > auth-worker.key.base64
```

3. **Encode the CA certificate to base64 and save to a file:**
 ```sh
cat /var/lib/rancher/k3s/server/tls/server-ca.crt | base64 -w 0 > server-ca.crt.base64
```

----
### Update the `k3s.yaml` on the Worker Node with the Base64 Encoded Certificates
```yaml
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: <content of server-ca.crt.base64>
    server: https://192.168.1.214:6443 
  name: default
contexts:
- context:
    cluster: default
    user: default
  name: default
current-context: default
kind: Config
preferences: {}
users:
- name: default
  user:
    client-certificate-data: <content of auth-worker.crt.base64>
    client-key-data: <content of auth-worker.key.base64>
	token: <master node token>
```

Replace `<content of server-ca.crt.base64>`, `<content of auth-worker.crt.base64>`, and `<content of auth-worker.key.base64>` with the actual contents of the corresponding base64 encoded files.

### Example Command to Update the `k3s.yaml`

You can use `sed` to automate the replacement process:
```sh
sed -i "s|<content of server-ca.crt.base64>|$(cat server-ca.crt.base64)|g" /etc/rancher/k3s/k3s.yaml sed -i "s|<content of auth-worker.crt.base64>|$(cat auth-worker.crt.base64)|g" /etc/rancher/k3s/k3s.yaml sed -i "s|<content of auth-worker.key.base64>|$(cat auth-worker.key.base64)|g" /etc/rancher/k3s/k3s.yaml
```

### Restart the `k3s-agent` with the Updated Configuration
```sh
k3s agent -c /etc/rancher/k3s/config.yaml
```
