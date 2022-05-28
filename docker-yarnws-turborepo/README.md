# Docker + Docker Compose + Yarn Workspaces + Turborepo

In this repository I use the following technologies:
- Yarn workspaces for dependency management between packages
- Turborepo to make build/dev/test scripts easier to write and maintain
- Docker compose to launch the project with all its components easily and with one command
- Docker for creating images that can be deployed in production

### Commands
- `yarn build`: Builds a set of docker images that are ready to be deployed
- `yarn dev`: Runs the whole project in dev mode via docker compose, with support for hot reloading