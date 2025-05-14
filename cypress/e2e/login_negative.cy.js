describe('Неверные данные для входа', () => {
    it('Пробуем зайти вводя не верные данные', () => {

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerInstitution');
        cy.get('input[type=password]').type('Password2');
        cy.get('button[type=submit]').eq(2).click();


    });
});