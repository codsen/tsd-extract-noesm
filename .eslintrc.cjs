module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["row-num", "test-num"],
  ignorePatterns: [
    "**/eslint-plugin-row-num/rules/utils/**",
    "**/dist/**",
    "**/tap/**",
    "**/types/**",
    "perf-ref.umd.js",
    "perf-ref.esm.js",
  ],
  rules: {
    "array-callback-return": 0,
    "consistent-return": 0,
    "no-console": 0,
    "no-nested-ternary": 0,
    "row-num/correct-row-num": "error",
    "test-num/correct-test-num": 0,
    "import/extensions": 0,
    "import/order": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unnecessary-condition": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
  },
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      extends: ["prettier"],
    },
  ],
};
