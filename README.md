# Hub de Leitura - Testes E2E com Cypress

![Cypress](https://img.shields.io/badge/Cypress-E2E-17202C?logo=cypress&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)

Projeto de automação de testes 2e2 desenvolvido como atividade do **Módulo 11** do curso de Engenharia de Qualidade de Software da **EBAC**, utilizando [Cypress](https://www.cypress.io/) e [Faker](https://fakerjs.dev/) para geração de dados dinâmicos.

## Sumário

- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando a aplicação](#executando-a-aplicação)
- [Executando os testes](#executando-os-testes)
- [Autor](#autor)

## Tecnologias

- [Node.js](https://nodejs.org/) 18+
- [Cypress](https://www.cypress.io/)
- [@faker-js/faker](https://fakerjs.dev/)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [Git](https://git-scm.com/)
- Um editor de código (recomendado: [Visual Studio Code](https://code.visualstudio.com/))

## Instalação

1. Clone o Repositório e Acesse a Pasta do Projeto:

```bash
   git clone https://github.com/EBAC-QE/hub-de-leitura-integrado.git
   cd hub-de-leitura-integrado
```

2. Instale as Dependências:

```bash
   npm install
```

3. Instale as Dependências de Testes (Caso ainda não estejam no Projeto):

```bash
   npm i cypress @faker-js/faker
```

## Executando a aplicação

Inicie o Servidor Local:

```bash
npm start
```

Após a Inicialização, Acesse o Sistema em: **http://localhost:3000**

## Executando os Testes

Com a Aplicação em Execução, abra um Novo Terminal e utilize uma das Opções Abaixo:

| Modo | Comando | Descrição |
|------|---------|-----------|
| Interativo | `npx cypress open` | Abre a Interface Gráfica do Cypress |
| Headless | `npx cypress run` | Executa todos os Testes no Terminal |

## Autor

**Thiago C. H. Moreira**

Atividade desenvolvida para o Módulo 11 da [EBAC](https://ebaconline.com.br/).