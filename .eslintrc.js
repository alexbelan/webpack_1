module.exports = {
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        "no-console": "warn",
        "no-unused-vars": "warn",
        "quotes": ["error", "single"],
        "jsx-quotes": ["error", "prefer-single"],
        "semi": ["error", "never"]
    }
}