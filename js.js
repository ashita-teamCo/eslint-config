module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "func-style": "error",
    "prefer-arrow-callback": "error",
  },
};
