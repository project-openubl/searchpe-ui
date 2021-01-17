![CI](https://github.com/project-openubl/searchpe-ui/workflows/CI/badge.svg)
[![Docker Repository on Quay](https://quay.io/repository/projectopenubl/searchpe-ui/status "Docker Repository on Quay")](https://quay.io/repository/projectopenubl/searchpe-ui)
[![License](https://img.shields.io/badge/License-EPL%202.0-green.svg)](https://opensource.org/licenses/EPL-2.0)

[![Project Chat](https://img.shields.io/badge/zulip-join_chat-brightgreen.svg?style=for-the-badge&logo=zulip)](https://projectopenubl.zulipchat.com/)

# Searchpe UI

UI application for the searchpe project.

## Development

To start in development mode follow the next steps:

### Start the backend DB

Execute:

```shell
docker run -p 5432:5432 -e POSTGRES_USER=searchpe_username -e POSTGRES_PASSWORD=searchpe_password -e POSTGRES_DB=searchpe_db postgres:13.1
```

### Star the backend

You need to clone the backend server and then start it using:

```shell
./mvnw quarkus:dev
```

### Start the UI

You can start the UI executing:

```shell
yarn start
```

You should be able to open http://localhost:3000 and start working on the UI.
