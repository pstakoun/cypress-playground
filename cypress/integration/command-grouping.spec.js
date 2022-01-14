Cypress.config('experimentalSessionSupport', true)

describe('Command Grouping', () => {
    it('cy.within()', () => {
        cy.visit('https://example.cypress.io/commands/querying#within')
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
        })
    })

    it('cy.each()', () => {
        cy.visit('https://example.cypress.io/commands/connectors#each')
        cy.get('.connectors-each-ul>li')
            .each(function($el, index, $list){
                console.log($el, index, $list)
            })
    })

    it('cy.session()', () => {
        cy.session('test', () => {
            cy.visit('https://example.cypress.io')
            cy.url().should('contain', 'cypress.io')
        })
    })

    it('Multiple duplicate XHR events', () => {
        cy.visit('https://cnn.com')
    })
})
