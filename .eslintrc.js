module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: [
    "@typescript-eslint",
    "react"
  ],
  parser: "@typescript-eslint/parser",
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  parserOptions: {
    sourceType: "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "no-undef": 0,
    "no-console": 0
  }
}