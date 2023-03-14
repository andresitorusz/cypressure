# Cypressure - Learning Cypress

<p align="center">
  <a href="https://www.cypress.io">
    <picture>
      <source media="(prefers-color-scheme: dark)"  srcset="./doc/assets/cypress-logo-dark.png">
      <source media="(prefers-color-scheme: light)" srcset="./doc/assets/cypress-logo-light.png">
      <img alt="Cypress Logo" src="./doc/assets/cypress-logo-light.png">
    </picture>    
  </a>
</p>
<p align="center">
  <a href="https://on.cypress.io">Documentation</a> |
  <a href="https://on.cypress.io/changelog">Changelog</a> |
  <a href="https://on.cypress.io/roadmap">Roadmap</a>
</p>


### Setup
##### Prerequisites
- Any IDE.
- NodeJS at least v19.6.0.


##### Steps
1. Run `git clone https://github.com/helenanull/cypress-example.git` in your Terminal.
2. Run `cd learning-cypress/app`. Notice that, in the learning **learning-cypress** folder, there will folder named **app**, and in this **app** folder there will be several apps.
3. Run `cd <appname>` to navigate to the app you want to test, e.g. `app/petstore`.


### Run tests
1. After navigating to the app you want to test. Then, install the **node_modules** by running `npm install`.
2. Run `npm run cy` or `npx cypress open` to open the test UI.
3. Run the tests.


### Misc
##### App list
- [Petstore](https://petstore3.swagger.io/) 

##### IDE setup and recommended extensions
[VS Code](https://code.visualstudio.com/download) with following extensions:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Add Only](https://marketplace.visualstudio.com/items?itemName=ub1que.add-only)
- [Mocha snippets](https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


### Q&A
TBD

### Reference

1. [Why Cypress?](https://docs.cypress.io/guides/overview/why-cypress)
2. [Cypress - Writing Your First E2E Test](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
