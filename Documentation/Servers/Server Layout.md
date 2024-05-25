## Proxmox Cluster Specifications

| Node | RAM  | CPU Cores | CPU Speed | Storage |
| ---- | ---- | --------- | --------- | ------- |
| 1    | 80GB | 12        | 4.0 GHz   | 29TB    |
| 2    | 8GB  | 4         | 3.2 GHz   | 256GB   |

| Node | Role                         | Services                                            |
| ---- | ---------------------------- | --------------------------------------------------- |
| 1    | Worker Node                  | Data-intensive workloads                            |
| 2    | Master Node, GUI, Monitoring | Kubernetes Control Plane, Dashboard, Metrics Server |

### Node 1 Kubernetes Cluster Specifications

### Node 2 Kubernetes Cluster Specifications
|Attribute|Description|
|---|---|
|Node Type|Master|
|CPU|1 core @ 3.0GHz|
|Memory|2GB DDR4|
|Storage|16GB|
|Node URL|192.168.1.213|
|Grafana Endpoint|[http://192.168.1.213:32000](http://192.168.1.213:32000)|
|KubeView Endpoint|[http://192.168.1.213:32001](http://192.168.1.213:32001)|

### Installed Kubernetes Services

| Service Name     | Type      | Cluster IP    | Node Port | Target Port | Description                   |
| ---------------- | --------- | ------------- | --------- | ----------- | ----------------------------- |
| kubernetes       | ClusterIP | 10.43.0.1     | N/A       | 443/TCP     | Kubernetes API server         |
| victoria-metrics | ClusterIP | None          | N/A       | 8428/TCP    | Victoria Metrics server       |
| grafana          | NodePort  | 10.43.142.175 | 32000     | 80/TCP      | Grafana monitoring dashboard  |
| kubeview         | NodePort  | 10.43.5.73    | 32001     | 8000/TCP    | KubeView Kubernetes dashboard |