module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/array-bracket-spacing": "warning",
    "vue/arrow-spacing": "warning",
    "vue/brace-style": "warning",
    "vue/camelcase": "error",
    "vue/component-name-in-template-casing": "error",
    "vue/eqeqeq": "warning",
    "vue/match-component-file-name": "error",
    "vue/object-curly-spacing": "warning",
    "vue/script-indent": "warning",
    "vue/space-unary-ops": "error"
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: ["plugin:vue/recommended", "@vue/prettier"]
};
