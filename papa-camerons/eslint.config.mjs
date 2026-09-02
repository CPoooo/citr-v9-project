import js from "@eslint/js"
import globals from "globals"
import prettier from "eslint-config-prettier"

// type completions (if i had to guess this is just using typescript
// in the js world?) so I have type completions and specifically these
// types? ->
// Hey claude explain this to me in depth and like I am 5
// what would i do in the regular typescript world as well?  
/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
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
    },
    prettier,
]
