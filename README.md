# base-project

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This is a starter repo for JS and HTML projects to help meet [12 factor](https://12factor.net/) conformant applications. It includes:

* babel
* commitizen
* dotenv
* eslint
* flow
* husky
* jest
* prettier
* semantic-release
* stylelint
* testcafe

It also include some default files to get you started:

* .babelrc
* .editorconfig
* .env
* .eslintrc.js
* .flowconfig
* .gitignore
* .stylelint
* some test files to makes sure the linters, prettiers, and static type checkers are working properly.

---

It favours:

* typed code
* defined code style for JS, HTML, and CSS (and prettifies code to meet it)
* controlled commits
* automatic versioning and releases

---

If you are using vs code, it provides a vs code workspace settings file which you can uncomment to have them work out of the box. The extensions include:

* ESLint
* Flow Language Support
* Prettier
* Stylelint

If you don't want to use the file, or want to use them in your user settings, you'll need to disable the default validation for JS and enabled ESLint, disabled the default formatters for JS and CSS, and then make prettier integrate with ESLint and Stylelint.
