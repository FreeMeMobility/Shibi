# Deploy

**Using yarn:**

- Dev server

``yarn dev``

- Dev server (rebuild)

``yarn rebuild:dev``

- Prod server

``yarn prod``

- Prod server (rebuild)

``yarn rebuild:prod``

**Using docker:**

- Docker (docker-compose)

``docker-compose up -d``

- Docker Swarm

``docker service create -p 8174:8174 --mode global --name shibi_service pdesire/shibi``
