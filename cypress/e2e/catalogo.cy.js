/// <reference types="cypress"/>

describe('Funcionalidade: Catálogo de Livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    afterEach(() => {
        cy.screenshot()
    });


    it('Deve Clicar em Todos os Botões Adicionar à Cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })
    });

    it('Deve Clicar no Primeiro Botão Adicionar à Cesta', () => {
        cy.get('.btn-primary').first().click()
    });

    it('Deve Clicar no Último Botão Adicionar à Cesta', () => {
        cy.get('.btn-primary').last().click()
    });

    it('Deve Clicar no Terceiro Botão Adicionar à Cesta', () => {
        cy.get('.btn-primary').eq(2).click()
    });

    it('Deve Clicar no Quinto Botão Adicionar à Cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')
    });

    it('Deve Clicar no Nome do Livro e Direcionar para a Tela do Livro', () => {
        cy.contains('Dom Casmurro').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
    });

    it('Deve Clicar em um Botão Adicionar à Cesta de Forma Randômica', () => {
        cy.get('.btn-primary').its('length').then((totalDeBotoes) => {
            // Gera um Índice Aleatório
            const indiceAleatorio = Math.floor(Math.random() * totalDeBotoes);
            // Clica no Botão correspondente ao Índice Sorteado
            cy.get('.btn-primary').eq(indiceAleatorio).click();
        });
    });

    it('Deve Clicar em dois Botões Adicionar à Cesta de Forma Randômica', () => {
        cy.get('.btn-primary').its('length').then((totalDeBotoes) => {
            // Garante que existem pelo menos 2 botões na tela para o teste fazer sentido
            expect(totalDeBotoes).to.be.greaterThan(1);
            // 1. Sorteia e clica no primeiro botão
            const primeiroIndice = Math.floor(Math.random() * totalDeBotoes);
            cy.log(`Primeiro botão selecionado: índice ${primeiroIndice}`);
            cy.get('.btn-primary').eq(primeiroIndice).click();
            // 2. Sorteia o segundo índice e garante que ele seja DIFERENTE do primeiro
            let segundoIndice = Math.floor(Math.random() * totalDeBotoes);
            while (segundoIndice === primeiroIndice) {
                segundoIndice = Math.floor(Math.random() * totalDeBotoes);
            }
            // 3. Clica no segundo botão
            cy.log(`Segundo botão selecionado: índice ${segundoIndice}`);
            cy.get('.btn-primary').eq(segundoIndice).click();
        });
    });

    it('Deve Clicar em um Livro Aleatório, Acessar os Detalhes e Adicionar à Cesta', () => {
        // Seletor que mapeia todos os títulos de livros da página
        const seletorTitulos = '.text-dark';
        cy.get(seletorTitulos).its('length').then((totalDeLivros) => {
            // Sorteia um índice dinâmicogit 
            const indiceAleatorio = Math.floor(Math.random() * totalDeLivros);
            // Captura o elemento do livro sorteado (Corrigido: sem a barra invertida)
            cy.get(seletorTitulos).eq(indiceAleatorio).then(($livroSorteado) => {
                const nomeDoLivro = $livroSorteado.text().trim();
                cy.log(`Livro sorteado da vez: ${nomeDoLivro}`);
                // Clica no livro selecionado
                cy.wrap($livroSorteado).click();
                // Validação exata da URL usando o seu padrão com Query Parameter (?id=)
                cy.url().should('include', 'book-details.html?id=');
                // Garante que o título do livro sorteado está visível na página de detalhes
                cy.get('h1').should('contain', nomeDoLivro);
                // Finaliza o fluxo adicionando ao carrinho
                cy.get('#add-to-cart-btn').click();
                cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!');
            });
        });
    });

});