describe('Login and logout', () => {

  const baseUrl = 'https://shopfloor-v12-timely-bongo-pi.cfapps.us10.hana.ondemand.com';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.clearCookies();
    cy.wait(5000); 
  });

  // Test case: Error when no username and password are provided
  it('should display an error when username and password are not provided', () => {
    cy.get('.login-footer').children().last().click();
    cy.contains('Please enter the username and password').should('be.visible');
  });

  // Test case: Error with incorrect password
  it('should display an error with incorrect password', () => {
    cy.get('input[name="username"]').type('Bro Test!!!');
    cy.get('input[name="password"]').type('Bro Pass!');
    cy.get('.login-footer').children().last().click();
    cy.contains('Unable to login').should('be.visible');
  });

  // Test case: Login with valid username and password
  it('should login with valid username and password and then logout', () => {
    cy.get('input[name="username"]').type('Bro Test!');
    cy.get('input[name="password"]').type('Use your password');
    cy.get('.login-footer').children().last().click();
    cy.contains('BaseVisu').should('be.visible');
  

    // Logout after successful login
    cy.wait(5000);
    cy.contains('Logout').should('be.visible').and('not.be.disabled').click();
    cy.contains('Confirm').should('be.visible').and('not.be.disabled').click();
    cy.url().should('include', '/login');
  });

});
