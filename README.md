Semana Agilizei 2.0 

Cypress na prática, do zero à integração contínua.

Sobre

A Semana Agilizei 2.0 é um evento online e gratuito, organizado pela equipe da Agilizei, na qual o Samuel nos ensinou a como automatizar processos de compras em uma loja virtual fictícia. 
Para tal, a ferramenta Cypress foi utilizada para testar localmente todas as etapas de compras, bem como produzir os relatórios dos testes. O mesmo foi feito em serviço de nuvem através do Github Actions, com a publicação dos relatórios no serviço Github Pages.

Setup

Este projeto requer Node.js e o pacote npm que ja vem incluído. Se você não o tem, você pode obtê-lo através dessa página. Tudo deve funcionar corretamente para o Node.js v14.15.1. Além disso, esse repositório contem o arquivo package.json que contém todas as dependências necessárias. Para intalar os modulos npm, entre a pasta raiz e instale as dependencias assim:

`npm install`

Após, para rodar os testes, digitar no terminal:

`npm run cy:run`

Para criar os relatórios, utilize os seguintes comandos:

`npm run report:merge` &
`npm run report:mocha`

Ao final do processo, é apresentado o link para acessar o relatório. Para acessá-lo, abra o arquivo através do browser.
Para ver o mesmo relatório produzido pelo **Github Actions** clique aqui.