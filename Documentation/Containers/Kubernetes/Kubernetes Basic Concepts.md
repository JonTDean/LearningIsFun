### **Workloads**

1. **Deployment**
    
    - **Definition**: A controller that manages the desired state of an application, such as the number of replicas of a pod.
    - **Use Case**: Ensures that the specified number of pod replicas are running at any time, allows for rolling updates, and rollback of applications.
2. **DaemonSet**
    
    - **Definition**: Ensures that a copy of a pod is running across all (or some) nodes in the cluster.
    - **Use Case**: Typically used for deploying background tasks on all nodes, such as logging agents, monitoring daemons, etc.
3. **StatefulSet**
    
    - **Definition**: Manages the deployment and scaling of a set of pods, and provides guarantees about the ordering and uniqueness of these pods.
    - **Use Case**: Useful for stateful applications that require stable network identities and persistent storage.
4. **Job**
    
    - **Definition**: Creates one or more pods and ensures that a specified number of them successfully terminate.
    - **Use Case**: For batch processing or tasks that should run to completion.
5. **CronJob**
    
    - **Definition**: Schedules jobs to run at specified times, similar to cron jobs in Unix-like operating systems.
    - **Use Case**: Scheduled tasks, such as backups or report generation.

### **Configuration & Storage**

1. **ConfigMap**
    
    - **Definition**: Used to store non-confidential data in key-value pairs. ConfigMaps can be used by pods as environment variables, command-line arguments, or configuration files.
    - **Use Case**: Application configuration.
2. **Secret**
    
    - **Definition**: Similar to ConfigMap but intended to hold sensitive information like passwords, OAuth tokens, and SSH keys.
    - **Use Case**: Securely pass sensitive information to pods.
3. **PersistentVolume (PV)**
    
    - **Definition**: A piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes.
    - **Use Case**: Storage resource in the cluster.
4. **PersistentVolumeClaim (PVC)**
    
    - **Definition**: A request for storage by a user. Pods can request specific levels of resources (e.g., storage size, access modes) using PVCs.
    - **Use Case**: Claim storage resources for a pod.
5. **StorageClass**
    
    - **Definition**: Describes the "classes" of storage offered by a cluster, allowing for dynamic provisioning of PVs.
    - **Use Case**: Differentiate between types of storage (e.g., SSDs vs HDDs).

### **Access Control**

1. **Namespace**
    
    - **Definition**: A virtual cluster within a Kubernetes cluster, providing a mechanism to partition resources.
    - **Use Case**: Organize and separate resources between different projects, teams, or environments.
2. **Role**
    
    - **Definition**: Defines permissions to resources within a namespace.
    - **Use Case**: Grant fine-grained access control within a namespace.
3. **ClusterRole**
    
    - **Definition**: Similar to Role, but applies to the entire cluster.
    - **Use Case**: Grant permissions across the entire cluster.
4. **RoleBinding**
    
    - **Definition**: Grants the permissions defined in a Role to a user or set of users within a namespace.
    - **Use Case**: Assign roles to users or groups in a namespace.
5. **ClusterRoleBinding**
    
    - **Definition**: Grants the permissions defined in a ClusterRole to a user or set of users across the entire cluster.
    - **Use Case**: Assign cluster-wide roles to users or groups.
6. **ServiceAccount**
    
    - **Definition**: Provides an identity for processes that run in a pod.
    - **Use Case**: Allows pods to communicate with the Kubernetes API and access resources securely.

### **Networking**

1. **Service**
    
    - **Definition**: An abstract way to expose an application running on a set of pods as a network service.
    - **Use Case**: Enable pods to communicate with each other or external clients.
2. **Ingress**
    
    - **Definition**: Manages external access to services, typically HTTP.
    - **Use Case**: Provide external access to services, load balancing, SSL termination, and name-based virtual hosting.

### **Cluster Management**

1. **Node**
    
    - **Definition**: A worker machine in Kubernetes, which can be a virtual or physical machine.
    - **Use Case**: Run the applications and workloads.
2. **Pod**
    
    - **Definition**: The smallest deployable unit in Kubernetes, which can contain one or more containers.
    - **Use Case**: Encapsulate an application container(s) with its storage and network settings.
3. **ReplicaSet**
    
    - **Definition**: Ensures that a specified number of pod replicas are running at any given time.
    - **Use Case**: Maintain a stable set of replica pods.
4. **HorizontalPodAutoscaler (HPA)**
    
    - **Definition**: Automatically scales the number of pod replicas based on observed CPU utilization or other custom metrics.
    - **Use Case**: Ensure applications can handle variable loads.
5. **VerticalPodAutoscaler (VPA)**
    
    - **Definition**: Automatically adjusts the resource limits and requests for containers in a pod based on their actual usage.
    - **Use Case**: Optimize resource allocation for pods.

### **Monitoring & Logging**

1. **Metrics Server**
    
    - **Definition**: Collects resource usage data from the kubelet and exposes it through the Kubernetes API.
    - **Use Case**: Provide resource metrics for auto-scaling and monitoring.
2. **Prometheus**
    
    - **Definition**: A monitoring and alerting toolkit.
    - **Use Case**: Collect metrics and enable alerting based on defined rules.
3. **Grafana**
    
    - **Definition**: An open-source platform for monitoring and observability, allowing the creation of dashboards based on metrics data.
    - **Use Case**: Visualize and analyze metrics collected by Prometheus or other data sources.

### **Application Management**

1. **Helm**
    - **Definition**: A package manager for Kubernetes, providing a way to define, install, and upgrade even the most complex Kubernetes applications.
    - **Use Case**: Manage Kubernetes applications using charts (pre-configured resources).

---

### **Advanced Workloads**

1. **Operator**
    
    - **Definition**: Custom controllers that extend Kubernetes' capabilities by managing the entire lifecycle of an application, often encapsulating domain-specific knowledge.
    - **Use Case**: Manage complex applications, automate routine tasks, and manage custom resources.
      
2. **CustomResourceDefinition (CRD)**
    
    - **Definition**: Allows you to create your own resource types and operate on them using the Kubernetes API.
    - **Use Case**: Extend Kubernetes with custom resources for specific application needs.
      
3. **PodDisruptionBudget (PDB)**
    
    - **Definition**: Ensures a minimum number of pods are always available during voluntary disruptions (e.g., maintenance).
    - **Use Case**: Maintain application availability during disruptions.

### **Networking**

1. **NetworkPolicy**
    
    - **Definition**: Specifies how groups of pods are allowed to communicate with each other and with other network endpoints.
    - **Use Case**: Enhance security by defining allowed traffic flows.
      
2. **Service Mesh (e.g., Istio, Linkerd)**
    
    - **Definition**: A dedicated infrastructure layer for managing service-to-service communication, often providing features like load balancing, traffic management, security, and observability.
    - **Use Case**: Manage microservices networking, security, and observability.
      
3. **CNI (Container Network Interface)**
    
    - **Definition**: A specification and libraries for writing plugins to configure network interfaces in Linux containers.
    - **Use Case**: Customize and extend the networking capabilities of Kubernetes clusters.

### **Storage**

1. **VolumeSnapshot**
    
    - **Definition**: Allows for taking snapshots of PersistentVolumes, providing a way to back up and restore data.
    - **Use Case**: Data protection and disaster recovery.
      
2. **CSI (Container Storage Interface)**
    
    - **Definition**: A standard for exposing arbitrary block and file storage systems to containerized workloads on Kubernetes.
    - **Use Case**: Integrate various storage solutions into Kubernetes.

### **Security**

1. **PodSecurityPolicy (PSP)**
    
    - **Definition**: Defines a set of conditions that a pod must meet to be accepted by the system.
    - **Use Case**: Control security aspects of pods, such as running as non-root, using specific volume types, etc. (Note: PSPs are deprecated and will be removed in future Kubernetes versions.)
      
2. **OPA (Open Policy Agent)**
    
    - **Definition**: A policy engine for Cloud Native environments, used for policy-based control in Kubernetes.
    - **Use Case**: Enforce fine-grained policies for resource usage, access control, and more.
      
3. **Kubernetes RBAC (Role-Based Access Control)**
    
    - **Definition**: A method of regulating access to Kubernetes resources based on the roles of individual users within an organization.
    - **Use Case**: Define who can do what within the Kubernetes cluster.

### **Cluster Management**

1. **Cluster Autoscaler**
    
    - **Definition**: Automatically adjusts the size of the Kubernetes cluster based on resource usage, scaling nodes up and down as needed.
    - **Use Case**: Ensure sufficient resources are available while optimizing cost.
      
2. **KubeFed (Kubernetes Federation)**
    
    - **Definition**: Manages multiple Kubernetes clusters, allowing for consistent policies and workloads across clusters.
    - **Use Case**: Multi-cluster management, disaster recovery, and workload distribution.
      
3. **Cluster API**
    
    - **Definition**: A Kubernetes project to bring declarative, Kubernetes-style APIs to cluster creation, configuration, and management.
    - **Use Case**: Simplify cluster lifecycle management.

### **Monitoring & Logging**

1. **Jaeger**
    
    - **Definition**: An end-to-end distributed tracing system, used for monitoring and troubleshooting microservices-based distributed systems.
    - **Use Case**: Trace requests across multiple services to diagnose performance issues.
      
2. **Fluentd**
    
    - **Definition**: An open-source data collector for unified logging layers, often used to aggregate logs in Kubernetes.
    - **Use Case**: Centralize and manage logs from multiple sources.
      
3. **Thanos**
    
    - **Definition**: A highly available, long-term storage solution for Prometheus metrics, designed to provide global query view and data retention.
    - **Use Case**: Scale Prometheus to a globally available and durable monitoring solution.

### **Application Management**

1. **Kustomize**
    
    - **Definition**: A tool to customize Kubernetes objects through a declarative approach, allowing for overlays and modifications without templates.
    - **Use Case**: Customize Kubernetes manifests based on environment-specific needs.
      
2. **KEDA (Kubernetes Event-Driven Autoscaling)**
    
    - **Definition**: A Kubernetes-based event-driven autoscaler, allowing pods to scale based on external events (e.g., messages in a queue).
    - **Use Case**: Scale applications based on event-driven metrics.
      
3. **Argo CD**
    
    - **Definition**: A declarative, GitOps continuous delivery tool for Kubernetes.
    - **Use Case**: Manage Kubernetes resources using Git repositories as the source of truth.
      
4. **Knative**
    
    - **Definition**: A set of components to run serverless workloads on Kubernetes.
    - **Use Case**: Deploy and manage serverless applications.

### **Resource Management**

1. **ResourceQuota**
    
    - **Definition**: A mechanism to limit the aggregate resource consumption (like CPU, memory) in a namespace.
    - **Use Case**: Control resource usage and prevent resource starvation.
      
2. **LimitRange**
    
    - **Definition**: Specifies resource limits (like CPU, memory) for each pod or container in a namespace.
    - **Use Case**: Ensure pods run within specified resource constraints.

### **Advanced Scheduling**

1. **Taints and Tolerations**
    
    - **Definition**: Mechanisms to control which pods can be scheduled on which nodes.
    - **Use Case**: Isolate workloads to specific nodes, prevent certain pods from running on inappropriate nodes.
      
2. **Affinity and Anti-Affinity**
    
    - **Definition**: Rules to control pod scheduling based on pod labels and node labels.
    - **Use Case**: Ensure pods are scheduled based on proximity, spreading, or colocation rules.
      
3. **PriorityClass**
    
    - **Definition**: Defines the priority of pods, affecting the order in which pods are scheduled and evicted.
    - **Use Case**: Prioritize critical workloads over less critical ones.

### **Service Discovery & Load Balancing**

1. **CoreDNS**
    
    - **Definition**: A flexible, extensible DNS server that is the default DNS for Kubernetes.
    - **Use Case**: Service discovery within Kubernetes.
      
2. **ExternalName Service**
    
    - **Definition**: A special type of service that maps a service to an external DNS name.
    - **Use Case**: Access external services from within the cluster.
      
3. **LoadBalancer Service**
    
    - **Definition**: Exposes the service externally using a cloud provider's load balancer.
    - **Use Case**: Provide a stable, external IP address for services.

### **Advanced Concepts in CRD and Controllers**

1. **Admission Controllers**
    
    - **Definition**: Plugins that govern and enforce how the cluster is used, intercepting requests to the Kubernetes API server.
    - **Use Case**: Validate, mutate, and enforce policies on resource creation and modification.
      
2. **Dynamic Admission Controllers**
    
    - **Definition**: Use webhooks to process admission requests.
    - **Use Case**: Enable custom logic for admission control, such as validating resource quotas dynamically.
      
3. **Webhooks**
    
    - **Definition**: HTTP callbacks triggered by an event.
    - **Use Case**: Integrate external systems with Kubernetes events.

### **Cluster Maintenance**

1. **Kubeadm**
    
    - **Definition**: A tool to bootstrap Kubernetes clusters.
    - **Use Case**: Simplify the cluster setup and configuration. 
      
2. **Etcd**
    
    - **Definition**: A distributed key-value store used for Kubernetes' backing store for all cluster data.
    - **Use Case**: Ensure consistent state across the cluster.