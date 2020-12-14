<h1 align="center">:zap: Semana Agilizei 2.0 :zap:</h1>
<h2 align="center">Cypress na prática, do zero à integração contínua</h2>

## :question: Sobre

A **Semana Agilizei 2.0** é um evento online e gratuito, organizado pela equipe da [Agilizei](https://agilizei.com/), na qual o [@samlucax](https://github.com/samlucax) nos ensina a como automatizar processos de compras em uma [loja virtual fictícia](http://automationpractice.com/index.php). 
Para tal, a ferramenta **Cypress** foi utilizada gerar testes e executá-los localmente, bem como produzir seus relatórios. O mesmo foi feito usando o **Github Actions**, com a publicação dos *logs* no **Github Pages**. 

## :hammer_and_wrench: Setup

Este projeto requer **Node.js** e o pacote **npm** que ja vem incluído. Se você não o tem, você pode obtê-lo através [desta página](https://nodejs.org/en/download/). Tudo deve funcionar corretamente para o **Node.js v14.15.1**. Além disso, esse repositório possui o arquivo `package.json` que contém todas as dependências necessárias. Para instalar os modulos npm, entre a pasta raiz e execute o comando:

`npm install`

Após, para rodar os testes, digite no terminal:

`npm run cy:run`

Para criar os relatórios, utilize os seguintes comandos:

`npm run report:merge && npm run report:mocha`

Ao final do processo, é apresentado o link do relatório. Para acessá-lo, abra o arquivo através do browser.
Para ver o mesmo relatório produzido pelo **Github Actions** clique [aqui](https://lobophf.github.io/semana-agilizei/).
