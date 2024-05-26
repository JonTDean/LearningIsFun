## Proxmox Cluster Specifications

|Node|RAM|CPU Cores|CPU Speed|Storage|
|---|---|---|---|---|
|1|80GB|12|4.0 GHz|29TB|
|2|8GB|4|3.2 GHz|256GB|

|Node|Role|Services|
|---|---|---|
|1|Worker Node|Data-intensive workloads|
|2|Master Node, GUI, Monitoring|Kubernetes Control Plane, Dashboard, Metrics Server|

### Master Node - Node 2

| Attribute        | Description                                              |
| ---------------- | -------------------------------------------------------- |
| Node Type        | Master                                                   |
| CPU              | 1 core @ 3.0GHz                                          |
| Memory           | 2GB DDR4                                                 |
| Storage          | 16GB                                                     |
| Node URL         | 192.168.1.213                                            |
| Grafana Endpoint | [http://192.168.1.213:32000](http://192.168.1.213:32000) |
| k9s              | Installed for Kubernetes management                      |

#### Installed Kubernetes Services
| Service Name | Type      | Cluster IP    | Node Port | Target Port | Description                       |
| ------------ | --------- | ------------- | --------- | ----------- | --------------------------------- |
| kubernetes   | ClusterIP | 10.43.0.1     | N/A       | 443/TCP     | Kubernetes API server             |
| prometheus   | NodePort  | 10.43.117.107 | 32003     | 9090/TCP    | Prometheus monitoring system      |
| grafana      | NodePort  | 10.43.142.175 | 32000     | 80/TCP      | Grafana monitoring dashboard      |
| longhorn     | ClusterIP | 10.43.x.x     | N/A       | various     | Longhorn storage management       |
| istio        | ClusterIP | 10.43.x.x     | N/A       | various     | Istio service mesh                |
| kiali        | ClusterIP | 10.43.x.x     | N/A       | various     | Kiali for Istio observability     |
| velero       | ClusterIP | 10.43.x.x     | N/A       | various     | Velero backup and restore         |
| kubeflow     | ClusterIP | 10.43.x.x     | N/A       | various     | Kubeflow machine learning toolkit |
