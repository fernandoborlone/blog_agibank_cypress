# Cypress Automation Project [agibank_test]

This project contains automated web testing using Cypress.
_______

## Technical Choices

I decided to use Cypress because it is suitable for end-to-end testing of web applications. It can simulate user interactions on multiple pages and test the application's behavior as a whole.
In addition, cypress has a low learning curve, is one of the most requested tools in companies, has an active community.
_______

## Prerequisites

Before running the tests, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
_______

## Installation

1. Clone this repository:

```
git clone git@github.com:fernandoborlone/blog_agibank_cypress.git
```

2. Navigate to the project directory:

```
cd <project-directory>
```

3. Install dependencies:

```
npm install
```
____

## Project Structure
```
├── .github/
│ ├── workflows/ # cypress.yml file
├── cypress/
│ ├── e2e/ # Test files
│ ├── evidences/ # Contains evidence found during testing
│ ├── reports/ # Test execution reports
│ ├── screenshots/ # Screenshots (when tests fail)
│ ├── support/ # Support files, custom commands and locators
│ ├── videos/ # Contains videos of the test run
│ └── node_modules/ # Contains Cypress dependency files
├── .gitignore
├── .biome.json
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```
_______

## Running Tests

### GUI Mode (Cypress Test Runner)
To open Cypress in interactive mode:

```
npm run cypress:open
```

### Headless Mode
To run tests in headless mode:

```
npm run cypress:run
```
_______

## Reports and Artifacts

- Screenshots of failed tests are stored in `cypress/screenshots`
- Test execution videos are stored in `cypress/videos`
- Test reports can be found in `cypress/reports`

## 🚀 Technologies
| Tool                                                     | Description                                                    |
|----------------------------------------------------------|----------------------------------------------------------------|
| [**Node.js**](https://nodejs.org/en)                      | Development Platform                                            |
| [**Biome.js**](https://biomejs.dev/)                      | Code formatting and linting tool                                |
| [**Cypress**](https://www.cypress.io/)                    | Modern web testing framework                                    |
| [**cypress-mochawesome-reporter**](https://www.npmjs.com/package/cypress-mochawesome-reporter) | Test reporting tool        |
| [**GitHub Actions**](https://github.com/features/actions) | CI/CD Platform                                                 |
