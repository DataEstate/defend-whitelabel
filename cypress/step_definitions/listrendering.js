/* global Given, When, Then, cy */

import { cyan } from "@material-ui/core/colors";

Given(/I navigate to the "([^"]*)" screen/, screen => {
  cy.visit(`/#/${screen}`);
  cy.wait(500);
});

Given(/I choose to go to the "([^"]*)"/, linkName => {
  cy.get(".test-app")
    .find(`.Navigation__Link.to-${linkName}`)
    .click();
});

Given(/I see the "([^"]*)" Listing is exist/, screen => {
  cy.get(`#${screen}Listing`).should("exist");
});
