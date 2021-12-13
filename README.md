# Github Graphql

This project was generated using [Nx](https://nx.dev).

Simple application that uses Github's GraphQL API service to query users with Apollo and React

Live demo of the application can be found [here](https://eloquent-banach-51817f.netlify.app/)

## Prerequisites

- Node v14.17.5
- Create Github personal [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Token should have the following github permissions

- public_repo
- read:user
- user:email

Create a file in `./apps/github/.env` with the contents

```
NX_GITHUB_TOKEN={{PERSONAL_ACCESS_TOKEN}}
```

Make sure to Replace {{PERSONAL_ACCESS_TOKEN}} with the created token

## Installation

Run `npm install` or `yarn`

## Start

Run `nx serve github` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build github` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Tailwind config (Styles config)

Tailwind config can be found in `./apps/github/tailwind.config.js`

```
// tailwind.config.js
{
  ...
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'l-grey': '#EDF0F2',
      },
    },
  },
  ...
}
```

## Running unit tests

Run `nx test github` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e github` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
