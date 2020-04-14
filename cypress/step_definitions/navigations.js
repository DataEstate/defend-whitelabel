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

Given(/I choose to go to "([^"]*)" screen with query parameters "([^"]*)"/, (screen, queryParams) => {
  cy.visit(`/${screen}?${queryParams}`);
  cy.wait(500);
});

Given(/I see that I have navigated to the "([^"]*)"/, screen => {
  cy.get(`#${screen}Screen`).should("exist");
});
