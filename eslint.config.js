/* eslint-disable no-undef */
import { defineConfig } from '@eslint/configs'
import globals from 'globals'
import js from '@eslint/js'

export default defineConfig([
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.mocha
            },
            ecmaVersion: 2022,
            sourceType: "module",
        },
        rules: {
            'max-len': 100,
        }
    },
])
