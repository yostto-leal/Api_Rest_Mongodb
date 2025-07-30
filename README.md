🌐 API REST com Node.js e MongoDB

Este projeto demonstra a criação de uma API RESTful do zero utilizando Node.js, Express e MongoDB. Ele inclui a configuração do ambiente, definição de rotas, conexão com banco de dados, criação de modelos e implementação completa de operações CRUD.

🚀 Funcionalidades

📦 Criação de servidor com Express
🔗 Conexão com banco de dados MongoDB
🧩 Modelagem de dados
🔄 Operações CRUD (Create, Read, Update, Delete)
🧪 Testes de rotas com Postman
🛡️ Boas práticas de estruturação, tratamento de erros e segurança

🛠️ Tecnologias Utilizadas

Node.js – ambiente de execução JavaScript
Express – framework para criação de servidores
MongoDB – banco de dados NoSQL
Mongoose (opcional) – ODM para modelagem de dados
Postman – ferramenta para testes de API

📦 Instalação e Execução

Clone o repositório:
git clone https://github.com/yostto-leal/Api_Rest_Mongodb.git

Acesse o diretório do projeto:
cd Api_Rest_Mongodb

Instale as dependências:
npm install

Configure as variáveis de ambiente (exemplo .env):
PORT=3000
MONGODB_URI=mongodb://localhost:27017/seu_banco

Inicie o servidor:
node server.js

 Estrutura do Projeto
 
├── server.js

├── package.json

├── .gitignore

├── /models
│   └── exemploModel.js

├── /routes
│   └── exemploRoutes.js

└── /controllers
    └── exemploController.js

    📮 Testes com Postman
As rotas da API podem ser testadas utilizando o Postman. Basta importar a coleção ou criar requisições para os endpoints definidos.

👨‍💻 Autor
Desenvolvido por Ariosto Leal Confira outros projetos no GitHub
