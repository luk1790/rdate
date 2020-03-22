module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        semi: [2, 'always'],
    },
};
