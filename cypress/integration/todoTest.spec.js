describe('simple toDo_js test', () => {



it('Creates new task after adding', () => {
    cy.visit('http://jakubpniak.com/todo_js/');
    cy.get('input[type=text]').type('go shopping');
    cy.get('button').click();
    cy.get('ul > li').should('contain', 'go shopping');
});

})