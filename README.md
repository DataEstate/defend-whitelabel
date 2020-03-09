# Data Estate FrontEND Whitelabel
v0.0.1

This is the Whitelabel web application for distributing Data Estate API content. This Whitelabel is currently in development and not production ready. 

## Requirements

* Access to Data Estate API. Please see administrator for this information. 
* npm
* npx

The project uses [Flow](https://flow.org/) for type checking instead of TypeScript. 

## Installation
Clone the project and run `npm i` to install necessary dependencies. 

### Configuration
Setup your **.env.local** file with following two keys: 
`API_URL={DATA Estate API URL with the version number}`
`API_KEY={DATA Estate API Key for development}`

## Running the project
Following script commands are available: 
* **npx nps local** - Runs the local project in your browser with hot module swapping. 
* **npx nps test** - Runs jest tests
* **npx nps flow** - Runs flow check. 

## Development

### Branch management
We use a simplified version of git flow. All branches should be created with the following format: **feature/{ISSUE_ID}-{BRIEF_TITLE}**. Once development is completed, create a **pull request**. Branch will need to be reviewed and approved before it can be merged into master. 

### Testing
Please ensure that relevant unit tests and functional tests have been written for your features. Reviewers will need to ensure there're enough tests (or ask that question) before approving a PR. 

#### Unit Test
The unit testing framework we're using is **jest** with, **chai** and **enzyme**. All components should have unit tests within it's same folder (See sample component). Majority of the Helper functions, HOC functions, Custom hook and Providers should also have it's own unit test. It should be in the structure like this: 

```
src
 |-components
 |  |- SampleComponent
 |       |- __tests__
 |       |     |-SampleComponent.spec.jsx
 |       |- SampleComponent.jsx
```

Test structure should be like this:
```javascript
describe('path/to/the/component', ()=> {
  it('description of the feature that is being tested', ()=> {
     // Arrange
     // Act
     // Assert
  });
});
```

### Functional Testing
Functional testing is done using **cypress** with cucumber syntax. 
