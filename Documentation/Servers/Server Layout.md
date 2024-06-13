## Proxmox Cluster Specifications

| Node | RAM  | CPU Cores | CPU Speed | Storage |
| ---- | ---- | --------- | --------- | ------- |
| 1    | 80GB | 12        | 4.2 GHz   | 29TB    |
| 2    | 8GB  | 4         | 3.0 GHz   | 256GB   |

|Node|Role|Services|
|---|---|---|
|1|Worker Node|Data-intensive workloads|
|2|Master Node, GUI, Monitoring|Kubernetes Control Plane, Dashboard, Metrics Server|

## Master Node - Node 2

#### Node Information

| Attribute | Description                                  |
| --------- | -------------------------------------------- |
| Node Type | Master                                       |
| CPU       | 2 cores @ 3.0GHz                             |
| Memory    | 4GB DDR4                                     |
| Storage   | 32GB                                         |
| Node URL  | [http://192.168.1.214](http://192.168.1.214) |
| k9s       | Installed for Kubernetes management          |
#### Kubernetes Services

| Service Name               | Description                         | Endpoint                         |
| -------------------------- | ----------------------------------- | -------------------------------- |
| kubernetes                 | Kubernetes API server               |                                  |
| k3s                        | Lightweight Kubernetes distribution |                                  |
| **Monitoring and Logging** |                                     |                                  |
| prometheus                 | Prometheus monitoring system        | prometheus.jonathantomdean.com   |
| grafana                    | Grafana monitoring dashboard        | grafana.jonathantomdean.com      |
| alertmanager               | Alertmanager for handling alerts    | alertmanager.jonathantomdean.com |
| loki                       | Loki for log aggregation            |                                  |
| **Backup and Restore**     |                                     |                                  |
| velero                     | Velero backup and restore           |                                  |
| **Ingress**                |                                     |                                  |
| nginx-ingress              | NGINX Ingress controller            |                                  |

----

# TODO
## Necessary Components

| Service Name               | Implementation | Description                                   |
| -------------------------- | -------------- | --------------------------------------------- |
| **Meta Utilities**         |                |                                               |
| Hashicorp Vault            | 🆃🅾🅳🅾       | Centralized cloud secrets storage platform    |
| Terraform                  | ✅              | IaC K8s service                               |
| MinIO                      | 🆃🅾🅳🅾†      | Kubernetes distributed block storage platform |
| authentik                  | ✅*             | Authentication platform                       |
| **Monitoring and Logging** |                |                                               |
| Prometheus                 | ✅              | Prometheus monitoring system                  |
| Grafana                    | ✅              | Grafana monitoring dashboard                  |
| Loki                       | ✅**†           | Log aggregation                               |
| **Backup and Restore**     |                |                                               |
| Longhorn                   | ✅†             | Cluster spanning block storage                |
| Velero                     | 🆃🅾🅳🅾†      | Velero backup and restore                     |
| **Databases**              |                |                                               |
| PostgreSQL                 | 🆃🅾🅳🅾       | Relational Database                           |
| MongoDB                    | 🆃🅾🅳🅾       | Document Database                             |
| Redis                      | 🆃🅾🅳🅾       | KV Storage Database                           |
| Cassandra                  | 🆃🅾🅳🅾       | Wide Column Database                          |
| ONgDB                      | 🆃🅾🅳🅾       | Graph Database                                |
| MeiliSearch                | 🆃🅾🅳🅾       | Search Database                               |
| pgvector                   | 🆃🅾🅳🅾       | Vector Database                               |
| **Development Platforms**  |                |                                               |
| argo-cd                    | 🆃🅾🅳🅾†      | Argo CD for GitOps workflows                  |
| argo-workflows             | 🆃🅾🅳🅾†      | Argo Workflows for CI/CD pipelines            |
| coder                      | 🆃🅾🅳🅾†      | Web-based IDE                                 |


\* Still need to complete all 🆃🅾🅳🅾
\*\* The Loki database throws an error in the Grafana UI
† Need to make sure these are Authenticated with Authentik
## Non-Necessary Components

|Service Name|Implementation|Description|
|---|---|---|
|Argo Events|🆃🅾🅳🅾|Event-driven automation framework|
|MemCache|🆃🅾🅳🅾|Distributed memory object caching system|
|MySQL|🆃🅾🅳🅾|Open-source relational database management system|
|Typesense|🆃🅾🅳🅾|Modern search engine built for speed|
|ChromaDB|🆃🅾🅳🅾|High-performance vector database|
|Weaviate|🆃🅾🅳🅾|Scalable, open-source vector search engine|
