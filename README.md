# webapp

A web app containing a prototype of a radar.

### Quickstart

Without docker:

```bash
cp env_example .env
npm install
npm run dev
```

With docker and without HTTPS:

```bash
cp env_example .env
npm run build
docker-compose up -d
```

### Configuration

```bash
# for docker
DOCKER_COMPOSE_IMAGE_NAME=tobemodified          # the name of the docker image
DOCKER_COMPOSE_CONTAINER_NAME=tobemodified      # the name of the docker container
DOCKER_COMPOSE_LISTENING_PORT=8080              # listening port of the web app under docker
```

### Installation

```bash
npm install
# or
npm i
```

### Running

```bash
# standard mode
npm run start

# dev mode
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Prettier

```bash
npm run format
```

### About DEV Environment

About webapp-dev VM:
- Name: startupwebapp-dev
- OS: Ubuntu Server 24.04 LTS - Gen2 x64 
- Size: Standard B2s (2 vcpus, 4 GiB memory)
- Access Type: Password
- SSH Command: ssh webadmin@20.82.109.23
- VM Username: webadmin
- VM Password: v418vuIKf4iSGozpHJLkTpv7a81NofU4
- Location: West Europe
- Public IP: 20.82.109.23
