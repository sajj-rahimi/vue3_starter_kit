module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prefer-destructuring': ['warn', { object: true, array: false }],
        'no-unused-vars': ['warn'],
        'vue/no-v-html': 0,
        'vue/require-default-prop': 0,
        // 'vue/html-indent': ['error', 'tab', { alignAttributesVertically: true }],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 100,
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'any',
                },
            },
        ],
    },
    parserOptions: {
        requireConfigFile: false,
        parser: "@typescript-eslint/parser"
    },
}
