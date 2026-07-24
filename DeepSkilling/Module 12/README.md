# Module 12 - Containerization using Docker

This module covers application virtualization, container isolation, and running services in multi-container setups using Docker and Docker Compose.

---

## Key Learning Areas

### 1. Docker Basics & Commands
- **Containers vs Virtual Machines**: Lightweight virtualization sharing the host OS kernel vs heavy guest operating systems.
- **Commands**: `docker run`, `docker ps`, `docker images`, `docker build`, `docker stop`, `docker rm`, `docker exec`.

### 2. Images & Registries
- **Dockerfile**: Blueprint for building container images (using commands like `FROM`, `COPY`, `RUN`, `EXPOSE`, `CMD`).
- **Container Registries**: Storing and pulling images from Docker Hub or private registries.

### 3. Docker Compose & Storage
- **Docker Compose**: Orchestrating multi-container systems (e.g., database + backend + frontend) using a unified `docker-compose.yml` file.
- **Docker Volumes**: Persisting database data across container lifecycles.
- **Docker Networks**: Enabling secure networking communications between services.

---

## Recommended Self-Learning Links
- [Docker Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/docker-tutorial/)
- [Docker Get Started Guide](https://docs.docker.com/get-started/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
