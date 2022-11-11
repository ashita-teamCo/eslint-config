module.exports = {
  extends: ["plugin:@graphql-eslint/schema-recommended"],
  rules: {
    "@graphql-eslint/input-name": [
      "error",
      {
        checkInputType: true,
        caseSensitiveInputType: false,
      },
    ],
    "@graphql-eslint/strict-id-in-types": [
      "error",
      {
        exceptions: {
          types: ["Query", "Mutation", "PageInfo"],
          suffixes: ["Connection", "Edge", "Payload"],
        },
      },
    ],
  },

}
