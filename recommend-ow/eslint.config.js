import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
    // add more generic rulesets here, such as:
    // js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        rules: {
            semi: 'error',
            'prefer-const': 'error',
        },
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
    },
]
