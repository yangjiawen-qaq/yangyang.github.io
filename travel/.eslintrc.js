// https://eslint.org/docs/user-guide/configuring
/*
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
*/
module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: [
      'plugin:vue/essential'
      // '@vue/standard'
  ],
  parserOptions: {
      parser: 'babel-eslint'
  },
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'space-before-function-paren': 0,
      'eqeqeq': false,
      'vue/valid-template-root': false,
      'spaced-comment': false,
      'quotes': false,
      'eol-last': false,
      'key-spacing': false,
      'vue/valid-v-for':false,
      'vue/no-unused-vars':false,
      'vue/no-parsing-error':false
  }
}
