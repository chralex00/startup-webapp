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
DOCKER_COMPOSE_LISTENING_PORT=8080          # listening port of the web app under docker
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
