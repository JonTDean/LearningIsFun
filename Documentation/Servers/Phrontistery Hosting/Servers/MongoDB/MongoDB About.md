# What is MongoDB?

MongoDB is a popular, open-source, NoSQL database management system. It uses a document-oriented data model, which allows it to store data in flexible, JSON-like documents. This makes it different from traditional relational databases, which use tables and rows.

### Key Features

- **Schema-less:** MongoDB's flexible schema design allows for rapid iteration and easy changes to data structures.
- **Scalability:** It supports horizontal scaling through sharding, allowing the database to grow with your application's needs.
- **High Performance:** Optimized for fast read and write operations, making it suitable for high-traffic applications.
- **Rich Query Language:** Supports a powerful query language with built-in support for complex queries, indexing, and aggregations.

## Installing MongoDB

### On Windows

1. Download the MongoDB installer from the [official website](https://www.mongodb.com/try/download/community).
2. Run the installer and follow the prompts.
3. Add the MongoDB binary path (`C:\\Program Files\\MongoDB\\Server\\<version>\\bin`) to your system's PATH environment variable.

### On Linux

#### Debian/Ubuntu

\```bash
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt update
sudo apt install -y mongodb-org
\```

#### RHEL/CentOS

\```bash
cat <<EOL | sudo tee /etc/yum.repos.d/mongodb-org-4.4.repo
[mongodb-org-4.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
EOL
sudo yum install -y mongodb-org
\```

### On macOS

\```bash
brew tap mongodb/brew
brew install mongodb-community@4.4
\```

## Using MongoDB CLI

### Starting MongoDB

#### On Windows

\```bash
mongod --dbpath <path_to_data_directory>
\```

#### On Linux/macOS

\```bash
sudo systemctl start mongod
\```

### Connecting to MongoDB

To connect to the MongoDB server, use the `mongo` shell:

\```bash
mongo
\```

### Basic CLI Commands

- **Show Databases:**

  \```bash
  show dbs
  \```

- **Switch/Create Database:**

  \```bash
  use <database_name>
  \```

- **Show Collections:**

  \```bash
  show collections
  \```

- **Insert a Document:**

  \```bash
  db.<collection_name>.insertOne({ "name": "John Doe", "age": 30 })
  \```

- **Find Documents:**

  \```bash
  db.<collection_name>.find({ "name": "John Doe" })
  \```

- **Update a Document:**

  \```bash
  db.<collection_name>.updateOne({ "name": "John Doe" }, { $set: { "age": 31 } })
  \```

- **Delete a Document:**

  \```bash
  db.<collection_name>.deleteOne({ "name": "John Doe" })
  \```

## Use Cases of MongoDB

### Real-Time Analytics

MongoDB's flexible document model allows for efficient storage and querying of large volumes of data, making it ideal for real-time analytics applications.

### Content Management

Its ability to handle diverse data types and structures makes MongoDB a great choice for content management systems, where the data schema can evolve over time.

### Mobile and IoT Applications

The scalability and performance of MongoDB make it suitable for mobile and IoT applications that require fast and flexible data storage.

### E-Commerce

MongoDB can efficiently handle the varied and dynamic data models found in e-commerce platforms, such as product catalogs, customer data, and transaction records.
