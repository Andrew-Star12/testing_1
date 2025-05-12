describe('Отклик на потребность', () => {
    it('Студент откликается на первую доступную потребность', () => {

        cy.visit('https://dev.profteam.su/login');

        // Авторизация
        cy.get('input[type=text]').type('ffff');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.url().should('include', '/account/main');

        // Переход в раздел потребностей
        cy.get('.page > header:nth-child(1) > nav > a:nth-child(2)').click();

        // Ждём переход на страницу потребностей
        cy.url().should('include', '/needs');

        // Ждём появления карточек
        cy.get('.need-item', { timeout: 15000 }).should('exist');

        // Находим первую карточку с кнопкой "Откликнуться" и нажимаем
        cy.get('.need-item').filter((index, el) => {
            return Cypress.$(el).find('button:contains("Откликнуться")').length > 0;
        }).first().within(() => {
            cy.contains('button', 'Откликнуться').click();
        });
    });
});
