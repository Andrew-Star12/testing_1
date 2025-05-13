describe('Подтверждение отклика работодателем', () => {
    it('Принимает заявку на потребности', () => {
        // 1. Авторизация

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.url().should('include', '/account/main');

        cy.get(':nth-child(5) > .menu-item__item-name').click();

        cy.get('nav .navigation-item__title').contains('На рассмотрении').click({ force: true });

        cy.get('article:nth-child(1) .responses-list-item__actions div')
            .first()
            .click({ force: true });



    });
});