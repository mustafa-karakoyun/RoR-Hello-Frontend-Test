import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('user visits the home page', () => {
  cy.visit('/');
});

Then('user should see {string} on the page', (text: string) => {
  cy.contains(text).should('be.visible');
});
