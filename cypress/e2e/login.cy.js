/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve fazer Login com Sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer Login com Sucesso com Comando Customizado', () => {
        cy.login('usuario@teste.com', 'user123')
    });

    it('Deve fazer Login com Sucesso em conta Admin com Comando Customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')
    });

    it('Deve fazer Login com Sucesso com Importação da Massa de Dados', () => {
        cy.login(user.email, user.senha)
    });

});