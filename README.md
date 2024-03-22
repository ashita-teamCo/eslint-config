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
  "extends": ["@ashita-team"],
  "overrides": {
    "files": ["src/**/*.ts", "tests/**/*.ts"],
    "extends": ["@ashita-team/eslint-config/ts-requiring-type-checking"],
    "parserOptions": {
      "project": ["./tsconfig.json"]
    }
  }
}
```

### Use import config

Add a following `.eslintrc` in your project.

```json
{
  "extends": ["@ashita-team/eslint-config/import"]
}
```
