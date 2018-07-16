module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    /* Best practice rules. */
    "curly": [2],
    "default-case": [2],
    "eqeqeq": [2],
    "no-const-assign": [2],
    "no-empty-function": [2],
    "no-eval": [2],
    "no-implicit-coercion": [2],
    "no-multi-spaces": [2],
    "no-loop-func": [2],
    "no-new-func": [2],
    "no-redeclare": [2],
    "no-self-assign": [2],
    "no-self-compare": [2],
    "yoda": [2],

    /* ECMAScript 6 rules */
    "arrow-spacing": [1],
    "no-duplicate-imports": [2],
    "no-var": [2],
    "object-shorthand": [1, "methods"],
    "prefer-const": [2],

    /* Stylistic rules. */
    "block-spacing": [1],
    "brace-style": [1],
    "comma-spacing": [1],
    "comma-style": [1],
    "computed-property-spacing": [1],
    "eol-last": [2],
    "func-call-spacing": [1],
    "indent": [2, 2],
    "keyword-spacing": [1],
    "linebreak-style": [2],
    "max-len": [2, 100],
    "no-trailing-spaces": [2],
    "semi": [2],
    "space-before-blocks": [1],
    "space-in-parens": [1],
  }
};
