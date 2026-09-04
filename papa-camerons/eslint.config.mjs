import js from "@eslint/js"
import globals from "globals"
import prettier from "eslint-config-prettier"
import reactPlugin from "eslint-plugin-react"

// type completions (if i had to guess this is just using typescript
// in the js world?) so I have type completions and specifically these
// types? ->
// Hey claude explain this to me in depth and like I am 5
// what would i do in the regular typescript world as well?  
/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended, {
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect'
            },
        },
    },
    reactPlugin.configs.flat["jsx-runtime"], // es-lint would be confused why we did not import React in a file that needs it without this 
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            // if left out es lint will go "hey idk what document (global from browser env)"
            globals: { ...globals.browser, ...globals.node},
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            "react/no-unescaped-entities": "off", // cant put single quotes in strings '' -> &apos (who would do that)
            "react/prop-types": "off",
        }
    },
    prettier,
]
