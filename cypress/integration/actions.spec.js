/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display screen with default value', () => {
    cy.get('.Ay-FilterPanel__active-view-option--active').contains('Product View');
    cy.get('.Ay-FilterPanel__sort-by-select').contains('Sort By: Highest Price');
  });

  it('should be able to see the default view', () => {
    cy.get('.Ay-Grid__grid-products-div').children().should('have.length', 50)
    cy.get('.Ay-FilterPanel__active-view-option').eq(0).click();
    cy.get('.Ay-Grid__grid-products-div .Ay-GridProduct__image-div').eq(0)
      .should('have.attr', 'style', 'background-image: url("//cdn.aboutstatic.com/file/897e9e47b71d9b7348c1a9584263ff30?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1");')
  });

  it('should be able to change the view', () => {
    cy.get('.Ay-Grid__grid-products-div').children().should('have.length', 50);
    cy.get('.Ay-Grid__grid-products-div .Ay-GridProduct__image-div').eq(0)
      .should('have.attr', 'style', 'background-image: url("//cdn.aboutstatic.com/file/299a1a008af1baac684b6e102e918055?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1");')
    cy.get('.Ay-FilterPanel__active-view-option').eq(0).click();
    cy.get('.Ay-Grid__grid-products-div .Ay-GridProduct__image-div').eq(0)
      .should('have.attr', 'style', 'background-image: url("//cdn.aboutstatic.com/file/897e9e47b71d9b7348c1a9584263ff30?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1");')
  });

  it('should be able to change sorting', () => {
    cy.get('.Ay-Grid__grid-products-div').children().should('have.length', 50);
    cy.get('.Ay-GridProduct').eq(0).get('.Ay-GridProduct__price').contains('89.9 €');
    cy.get('select').select("LOWEST_PRICE")
    cy.get('.Ay-GridProduct').eq(0).get('.Ay-GridProduct__price').contains('12.9 €');
  });

  it('should open the product in new window', () => {
    cy.get('.Ay-Grid__grid-products-div').children().should('have.length', 50);
    cy.get('.Ay-GridProduct').eq(0).click();
    cy.get('.Ay-ProductViewer__details-div__title').contains('Kleid');
    cy.get('.Ay-ProductViewer__details-div__brand').contains('SUDDENLY princess');
    cy.get('.Ay-ProductViewer__details-div__cost').contains('89.9 €');
  });
});
