module.exports = {
  extends: [
    "plugin:@graphql-eslint/operations-recommended"
  ],
  rules: {
    "@graphql-eslint/no-deprecated": "warn",
    "@graphql-eslint/selection-set-depth": ["warn", { maxDepth: 10 }],
    "@graphql-eslint/naming-convention": [
      "error",
      {
        OperationDefinition: {
          style: "camelCase",
        },
        FragmentDefinition: {
          style: "camelCase",
        },
      },
    ],
  }
}
