// https://eslint.org/docs/user-guide/configuring

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
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 允许使用分号
    'semi': [0, 'never'],
    // 允许使用==
    'eqeqeq': 0,
    // 缩进使用不做限制
    'indent': 0,
    // 允许使用tab
    'no-tabs': 0,
    // 函数圆括号之前没有空格
    'space-before-function-paren': [2, "never"],
    // 不要求块内空格填充格式
    'padded-blocks': 0,
    // 开发模式允许使用console
    'no-console': 0,
    // 单行可忽略大括号，多行不可忽略
    'curly': [2, 'multi-line'],
    // 在函数括号之前需要或不允许空格
    'space-before-function-paren': ["error", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
    // 在文件末尾要求或禁止换行
    'eol-last': [0, "always"],
    // 强制一致使用反引号，双引号或单引号
    'quotes': [0, "double", { "avoidEscape": true }],
    // 强制执行回调错误处理
    'handle-callback-err': ["error", "error"],
    // 禁止未声明的变量
    'no-undef': [0, { "typeof": true }],
    // 禁止在行尾添加尾随空格
    'no-trailing-spaces': ["error", { "ignoreComments": true }],
    // 在箭头功能的箭头之前/之后需要空格
    'arrow-spacing': ["error", { "before": true, "after": true }],
    // 禁止未使用的变量
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  }
}
