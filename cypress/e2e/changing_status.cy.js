describe('Смена статуса потребности', () => {
    it('Работодатель меняет статус потребности', () => {
        // 1. Авторизация
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.url().should('include', '/account/main');

        // Открыть раздел "Потребности"
        cy.get(':nth-child(6) > .menu-item__item-name')
            .should('be.visible')
            .click();

        // Подождать загрузку фильтров
        cy.get('.needs-block__filters-wrapper', { timeout: 10000 }).should('be.visible');

        //  Добавляем задержку 1 секунда
        cy.wait(1000);

        // Второй фильтр — клик и выбор
        cy.get('.needs-block__filters-wrapper > div > div > div')
            .first()
            .click({ force: true });

        cy.get('.form-select__items > div')
            .eq(1)
            .should('be.visible')
            .click({ force: true });

        // Подождать появление карточек
        cy.get('.infinite-loader.need-list > div', { timeout: 10000 }).should('have.length.greaterThan', 0);

        // Клик на кнопку в первой карточке
        cy.get('.infinite-loader.need-list > div:nth-child(1) .need-footer__button-wrapper > button.button__background-color-green')
            .should('be.visible')
            .click({ force: true });
    });
});
