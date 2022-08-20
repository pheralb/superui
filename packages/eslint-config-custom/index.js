module.exports = {
  extends: [
    "next",
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
