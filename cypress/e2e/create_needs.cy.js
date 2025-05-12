describe('Создание потребности', () => {
    it('Работодатель авторизуется и создает потребность', () => {
        // 1. Авторизация

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerInstitution');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(6) > .menu-item__item-name').click();
        cy.get('[data-v-99600bb6=""][data-v-4849dea2=""] > .needs-block > .needs-block__content > .needs-block__filters-wrapper > .button').click();

        cy.get('.vacancy-need-wrapper > .form').should('be.visible');
        // cy.get(' body > div:nth-child(17) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input').type('Разнорабочий', {force: true});
        cy.get('.vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text',{ timeout: 10000 }).first().type('Разнорабочий', {force: true});
        cy.get('.vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2)').click({ multiple: true, force: true });
        cy.get('.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(3) > div > textarea[placeholder="Обязанности сотрудника"]',{ timeout: 10000 }) .eq(0).should('be.visible').type(',,,,,,,,jjjjjй', {force: true});
        cy.get('.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(4) > div > textarea[placeholder="Ваши требования"]',{ timeout: 10000 }) .eq(0).should('be.visible').type(',,,,,,,,jjjjjй', {force: true});

        // cy.get('.form-select__selected').click({ force: true });
        // cy.contains('.form-select__option', 'Дистант').eq(1).click({multiple: true, force: true });

        cy.get('.vacancy-need-wrapper > .form > .form__buttons > .button').eq(1).click({force: true});
    });
});