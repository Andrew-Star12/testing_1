describe('Негатив: нет рабочих пространств', () => {
    it('Проверяем поведение при отсутствии активных откликов', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();
        cy.url().should('include', '/account/main');

        cy.get(':nth-child(5) > .menu-item__item-name').click();

        // Проверяем, что нет ни одного пространства
        cy.get('section.responses-page article').should('have.length', 0);

    });
});
