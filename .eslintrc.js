module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    extends: [
        "eslint:recommended",
        "airbnb",
        "airbnb-typescript"
    ],
    rules: {
        "no-console": 2,
        "react/react-in-jsx-scope": "off",
        "indent": [
            "error",
            4
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "@typescript-eslint/indent": [
            "error",
            4
        ],
        "arrow-body-style": 0,
        "react/jsx-curly-spacing": [
            "error",
            {
                "when": "always",
                "children": {
                    "when": "always"
                }
            }
        ],
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ],
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "react/jsx-props-no-spreading": "off",
        "no-param-reassign": "off"
    },
    parserOptions: {
        project: `${__dirname}/tsconfig.json`
    }
}
