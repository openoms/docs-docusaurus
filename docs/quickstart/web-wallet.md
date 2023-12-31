# Web Wallet

Galoy Web Wallet is a web application that uses the Galoy backend API to offer a web experience for sending and receiving bitcoin over onchain, lightning and intraledger.
It can be customized and used by any community or organization. It is built with Node, TypeScript, GraphQL, and React. It runs on any modern web browser and uses a responsive layout that's friendly on small screens.

Web Wallet is packaged as a docker image, and is automatically installed as part of Galoy helm charts.

With a default installation, this web application can be accessed with `wallet.domain.com`. It fetches data from a Graphql API endpoint `graphql.domain.com` defined in [graphql-main-server](https://github.com/GaloyMoney/galoy/blob/main/src/servers/graphql-main-server.ts)

### Config

The project depends on a few environment variables to be set. The `.envrc` root file has a list of them.

### How to run this repo locally?

In the project directory:

```shell
yarn install

# In a terminal
yarn dev:bundler

# In another terminal
yarn dev:server
```

Open [http://localhost:1234](http://localhost:1234/) to view it in the browser.

### How to run this repo for production?

In the project directory:

```shell
yarn install

# To build the app under the `build` folder
yarn build:all

# To start the app
yarn prod:start
```
