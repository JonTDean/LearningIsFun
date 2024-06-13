### Necessary Components

| Component           | CPU | RAM   | Storage | Imp          |
| ------------------- | --- | ----- | ------- | ------------ |
| **Dev Platform:**   |     |       |         |              |
| Supabase            | 2   | 4 GB  | 10 GB   | 🆃🅾🅳🅾     |
| **Meta Utilities:** |     |       |         |              |
| Hashicorp Vault     | 2   | 1 GB  | 5 GB    | 🆃🅾🅳🅾<br> |
| Argo CD             | 2   | 2 GB  | 5 GB    | 🆃🅾🅳🅾     |
| Argo Workflow       | 2   | 2 GB  | 5 GB    | 🆃🅾🅳🅾     |
| MinIO               | 4   | 4 GB  | 20 GB   | 🆃🅾🅳🅾     |
| Prometheus          | 2   | 4 GB  | 10 GB   | 🆃🅾🅳🅾     |
| **Databases:**      |     |       |         |              |
| **KVStorage:**      |     |       |         |              |
| - Redis             | 1   | 1 GB  | 5 GB    | 🆃🅾🅳🅾     |
| **Wide Column:**    |     |       |         |              |
| - Cassandra         | 4   | 8 GB  | 20 GB   | 🆃🅾🅳🅾     |
| **DocumentDB:**     |     |       |         |              |
| - MongoDB           | 2   | 4 GB  | 50 GB   | 🆃🅾🅳🅾     |
| **Relational:**     |     |       |         |              |
| - PostgreSQL        | 2   | 4 GB  | 75 GB   | 🆃🅾🅳🅾     |
| **Graph:**          |     |       |         |              |
| - ONgDB             | 2   | 4 GB  | 10 GB   | 🆃🅾🅳🅾     |
| **Search:**         |     |       |         |              |
| - MeiliSearch       | 2   | 2 GB  | 10 GB   | 🆃🅾🅳🅾     |
| **Vector:**         |     |       |         |              |
| - pgvector          |     |       |         | 🆃🅾🅳🅾     |
| **Total Required:** | 34  | 45 GB | 180 GB  |              |

### Non-Necessary Components

|Component|CPU|RAM|Storage|
|---|---|---|---|
|**Meta Utilities:**||||
|Argo Events|1|1 GB|1 GB|
|**Databases:**||||
|**KVStorage:**||||
|- MemCache|1|1 GB|1 GB|
|**Relational:**||||
|- MySQL|2|4 GB|10 GB|
|**Search:**||||
|- Typesense|2|2 GB|10 GB|
|**Vector:**||||
|- ChromaDB|2|4 GB|10 GB|
|- Weaviate|2|4 GB|10 GB|
|**Total Required:**|10|16 GB|42 GB|




