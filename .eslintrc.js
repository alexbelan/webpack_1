module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'quotes': ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'semi': ['error', 'never']
    }
}