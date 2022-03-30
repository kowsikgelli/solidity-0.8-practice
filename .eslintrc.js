module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "arrow-parens": 0,
    "max-len": ["error", { code: 120 }],
  },
};
