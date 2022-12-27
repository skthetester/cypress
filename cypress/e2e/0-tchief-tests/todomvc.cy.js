/// <reference types="cypress" />

describe("Sample Test Suite", () => {
  beforeEach("Open Todo MVC App", () => {
    cy.visit("https://example.cypress.io/todo");
  });

  it("Add new to-do lists", function () {
    var todoCnt = 10;
    for(var i=0; i<todoCnt; i++){
        cy.get('.new-todo').type("todo" + (i+1) + "{enter}");
    }
    
    // cy.get('.todo-list li').should('have.length', 10);


  });
});
