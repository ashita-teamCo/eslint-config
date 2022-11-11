# @ashita-team/eslint-config

A sharable ESLint config for ASHITA-TEAM.

## Installation

```sh
yarn add --dev eslint typescript @ashita-team/eslint-config
```

## Configuration

Add a following `.eslintrc` in your project.

By default, the recommended settings for JavaScript and TypeScript are enabled.

```json
{
  "extends": ["@ashita-team"]
}
```

### Use TypeScript config requiring type checking

Add a following `.eslintrc` in your project.

```json
{
  "extends": [
    "@ashita-team",
    "@ashita-team/eslint-config/ts-requiring-type-checking"
  ],
  "parserOptions": {
    "project": ["./tsconfig.json"]
  }
}
```

### Use GraphQL config

Install [graphql](https://www.npmjs.com/package/graphql) package.

```sh
yarn add graphql
```

Add a following `.eslintrc` in your project.

```json
{
  "overrides": [
    {
      "files": ["*.graphql"],
      "extends": ["@ashita-team/eslint-config/graphql-schema"]
    }
  ]
}
```

```json
{
  "overrides": [
    {
      "files": ["*.graphql"],
      "extends": ["@ashita-team/eslint-config/graphql-operation"]
    }
  ]
}
```

Create [GraphQL Config](https://www.the-guild.dev/graphql/config).

```js
// graphql.config.js
module.exports = {
  schema: "examples/graphql/**/*.graphql",
  documents: "examples/graphql/queries/**/*.graphql",
};
```

If you wish to use [VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), add the following settings to your project's `.vscode/settings.json` file.

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "graphql"
  ]
}
```

### Use import config

Add a following `.eslintrc` in your project.

```json
{
  "extends": ["@ashita-team/eslint-config/import"]
}
```
