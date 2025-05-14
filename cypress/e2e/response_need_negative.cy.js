describe('Негативный сценарий: нет заявок на рассмотрении', () => {
    it('Проверка поведения при отсутствии откликов', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.url().should('include', '/account/main');
        cy.get(':nth-child(5) > .menu-item__item-name').click();

        cy.get('nav .navigation-item__title').contains('На рассмотрении').click({ force: true });

        cy.get('article').should('have.length.greaterThan', 0); // нет заявок
        cy.contains('Нет откликов на рассмотрении').should('be.visible');
    });
});