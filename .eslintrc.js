module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  rules: {
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error", {"allow": ["constructors"]}],
    "@typescript-eslint/no-explicit-any": "off"
  }
};
