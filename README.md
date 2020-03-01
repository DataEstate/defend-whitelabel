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
Branch management is a simplified version of git flow. All branches should be created with the following format: **feature/{ISSUE_ID}-{BRIEF_TITLE}**. Once development is completed, create a **pull request**. Branch will need to be reviewed and approved before it can be merged into master. 
