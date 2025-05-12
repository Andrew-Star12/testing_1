describe('Создание потребности', () => {
    it('Работодатель авторизуется и создает потребность', () => {
        // 1. Авторизация

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.url().should('include', '/account/main');

        cy.get(':nth-child(5) > .menu-item__item-name').click();

        cy.get('section.responses-page article:nth-child(1) > button').click({ force: true });

        // Вводим текст в поле комментария
        cy.get('article .comment-textarea__textarea textarea')
            .type('Сделали все что могли', { force: true });

        // Нажимаем кнопку "Отправить"
        cy.get('article .comment-textarea__buttons > button:nth-child(2)')
            .click({ force: true });

        cy.get('.status-open__buttons > button:nth-child(1)').click({ force: true });
    });
});