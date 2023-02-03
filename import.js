module.exports = {
  extends: ["plugin:import/recommended", "plugin:import/typescript"],
  rules: {
    "import/newline-after-import": "warn",
    "import/order": "warn",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ".",
      },
    },
  },
};
