 # Orçamento Familiar

 Uma pequena aplicação de orçamento pessoal construída para Google Apps Script.

 O projeto entrega uma interface web responsiva que roda como um aplicativo da web do Google Apps Script, com dados salvos nas propriedades do script.

 ## Visão geral

 - Backend App Script em `app/script.js`
 - Frontend HTML/CSS/JavaScript em `app/Index.html`
 - O app usa `HtmlService` para exibir a interface
 - Os dados do orçamento são salvos usando `PropertiesService.getScriptProperties()`

 ## Funcionalidades

 - Painel de controle com indicadores de orçamento
 - Gestão de despesas e receitas
 - Visualização e filtragem por mês
 - Interface adaptativa para desktop e mobile
 - Modo escuro/tema claro
 - Armazenamento simples de dados no Apps Script

 ## Estrutura do projeto

 - `app/script.js` - funções do Apps Script (`doGet`, `saveData`, `loadData`, `verificarDados`)
 - `app/Index.html` - interface do usuário que é carregada como app web

 ## Como usar

 1. Abra o Google Apps Script.
 2. Crie um novo projeto.
 3. Copie o conteúdo de `app/script.js` para o arquivo `Código.gs`.
 4. Crie um novo arquivo HTML no Apps Script e nomeie-o como `Index` (sem a extensão `.html`).
 5. Copie o conteúdo de `app/Index.html` para o arquivo `Index` criado.
 6. Implante como aplicativo da web.

 > Dica: ao implantar pela primeira vez, selecione as opções de execução e acesso conforme necessário para o seu caso de uso.
