module.exports = {
  extends: [
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      "error",
      {
        allowComparingNullableBooleansToTrue: false,
        allowComparingNullableBooleansToFalse: false,
      },
    ],
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/consistent-type-exports": [
      "error",
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
        ignorePrimitives: {
          boolean: true,
          string: true,
        },
      },
    ],
  },
};
