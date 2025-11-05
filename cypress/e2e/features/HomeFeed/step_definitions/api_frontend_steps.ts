import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('user visits the users page', () => {
  cy.visit('/users');
});

Then('user should see the list of users', () => {
  cy.get('[data-testid="user-list"]').should('exist');
});

Given('user visits the new post page', () => {
  cy.visit('/posts/new');
});

When('user fills the form with valid data and submits', () => {
  cy.get('[data-testid="post-title"]').type('Test Başlık');
  cy.get('[data-testid="post-content"]').type('Test İçerik');
  cy.get('[data-testid="post-user-id"]').type('1');
  cy.get('[data-testid="post-category-id"]').type('1');
  cy.get('[data-testid="submit-post"]').click();
});

Then('user should see a success message', () => {
  cy.contains('Gönderi başarıyla oluşturuldu').should('be.visible');
});

Given('user visits the user detail page for id 99999', () => {
  cy.visit('/users/99999');
});

Then('user should see a not found error', () => {
  cy.contains('Kullanıcı bulunamadı').should('be.visible');
});

When('user submits the form with missing title', () => {
  cy.get('[data-testid="post-content"]').type('Test İçerik');
  cy.get('[data-testid="post-user-id"]').type('1');
  cy.get('[data-testid="post-category-id"]').type('1');
  cy.get('[data-testid="submit-post"]').click();
});

Then('user should see a validation error for title', () => {
  cy.contains('Başlık boş olamaz').should('be.visible');
});
