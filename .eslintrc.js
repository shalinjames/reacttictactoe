module.exports = {
  root: true,
  extends: [
    "react-app",
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended"
  ],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true
  },
  rules: {
    strict: 0,
    quotes: ["error", "double"],
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never"
      }
    ]
  }

  // extends: [
  //   "react-app",
  //   "eslint:recommended",
  //   "airbnb",
  //   "plugin:react/recommended"
  // ],
  // plugins: ["react"],
  // rules: {
  //   quotes: ["error", "double"],
  //   "linebreak-style": ["error", "unix"],
  //   "comma-dangle": [
  //     "error",
  //     {
  //       arrays: "never",
  //       objects: "never"
  //     }
  //   ]
  // }
  // env: {
  //   browser: true,
  //   commonjs: true,
  //   es6: true
  // },

  // parserOptions: {
  //   ecmaFeatures: {
  //     experimentalObjectRestSpread: true,
  //     jsx: true
  //   },
  //   sourceType: "module"
  // },
  // plugins: ["react"],
  // rules: {
  //   indent: ["error", 4],
  //   "linebreak-style": ["error", "windows"],
  //   quotes: ["error", "double"],
  //   semi: ["error", "always"]
  // }
};
