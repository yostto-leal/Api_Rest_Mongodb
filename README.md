🌐 API RESTful com Node.js e MongoDB

Este projeto é uma API RESTful desenvolvida com Node.js, Express e MongoDB, focada em boas práticas de estruturação, segurança e testes. Ideal para quem deseja entender e construir aplicações backend modernas, escaláveis e eficientes.

🚀 Funcionalidades

📦 Criação de servidor HTTP usando Express

🔗 Conexão com banco de dados MongoDB (local ou em nuvem)

🧩 Modelagem de dados em arquivos separados para reutilização e clareza

🔄 Operações completas de CRUD:

Create – criação de registros

Read – leitura de registros

Update – atualização de dados

Delete – remoção de registros

🧪 Testes de rotas realizados com Postman

🛡️ Tratamento de erros com middlewares personalizados

🔒 Estrutura de código modular e segura

🛠️ Tecnologias Utilizadas

Node.js – ambiente JavaScript server-side

Express.js – framework para criação de rotas e middlewares

MongoDB – banco de dados NoSQL

Mongoose – modelagem de dados e integração com MongoDB

dotenv – gerenciamento de variáveis de ambiente

Postman – para testes de endpoints

📦 Instalação e ExecuçãoClone o repositório:

git clone https://github.com/yostto-leal/Api_Rest_Mongodb.git

Instale as dependências:

cd Api_Rest_Mongodb

npm install

Configure o arquivo .env na raiz do projeto:

PORT=3000

MONGODB_URI=mongodb://localhost:27017/seu_bancoInicie o servidor:

node server.js

📁 Estrutura do Projeto

├── server.js

├── .env

├── /models
│   └── userModel.js

├── /routes
│   └── userRoutes.js

├── /controllers
│   └── userController.js

├── /middlewares
│   └── errorHandler.js

└── package.json

📮 Exemplos de Requisições

http
GET /users           → Lista todos os usuários
POST /users          → Cria um novo usuário
GET /users/:id       → Busca um usuário específico
PUT /users/:id       → Atualiza os dados de um usuário
DELETE /users/:id    → Remove um usuário
Todas as rotas foram testadas com o Postman e validam corretamente os dados recebidos/enviados.

📌 Boas Práticas Aplicadas

Separação clara entre rotas, modelos e controladores

Middleware para tratamento global de erros

Uso de variáveis de ambiente com dotenv

Validação básica de dados antes de salvar no banco

👨‍💻 Autor

Desenvolvido por Ariosto Leal Explore mais projetos no GitHub
