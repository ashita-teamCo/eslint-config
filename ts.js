module.exports = {
  extends: [
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/stylistic",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
  },
};
