
# API de Gerenciamento de Produtos e Usuários

## 📋 Descrição do Projeto
Esta API foi desenvolvida para gerenciar **produtos** e **usuários**.  
Com ela, é possível realizar operações de **CRUD** (Criar, Ler, Atualizar e Deletar) em um banco de dados **MongoDB**.

---

## 🚀 Funcionalidades
- Gerenciamento de **Usuários**:
  - Criar novos usuários
  - Listar usuários
  - Atualizar informações dos usuários
  - Remover usuários
  
- Gerenciamento de **Produtos**:
  - Criar novos produtos
  - Listar produtos
  - Atualizar detalhes dos produtos
  - Remover produtos

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos
Antes de começar, você precisará ter instalado:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Gerenciador de pacotes **npm** (incluso no Node.js)

### Passos para Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/VictorZornek/API-Restful_MongoDB.git
   cd API-Restful_MongoDB
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:
   ```
   PORT=3000
   MONGO_CONNECTION=mongodb://localhost:27017
   ```

4. **Inicie a aplicação**:
   - Usando Node.js:
     ```bash
     node server.js
     ```
   - Ou com **npm**:
     ```bash
     npm start
     ```

---

## 🔗 Endpoints da API

### Usuários
Base URL: `http://localhost:3000/Users`  
Operações disponíveis:
- **Criar usuário** (POST)
- **Listar usuários** (GET)
- **Atualizar usuário** (PUT)
- **Deletar usuário** (DELETE)

### Produtos
Base URL: `http://localhost:3000/Products`  
Operações disponíveis:
- **Criar produto** (POST)
- **Listar produtos** (GET)
- **Atualizar produto** (PUT)
- **Deletar produto** (DELETE)

---

## 🧪 Testando a API

Utilizamos o **Postman** para realizar os testes das rotas da API.

 **Configuração do Postman**:
  - Defina as URLs mencionadas acima como base.
  - Utilize os métodos HTTP apropriados para cada operação (GET, POST, PUT, DELETE).

`

---

## 📂 Arquivos para Teste no Postman

Utilize as coleções do Postman abaixo para realizar testes facilmente na API:

- [Coleção de Usuários (Users)](./Users.postman_collection.json)
- [Coleção de Produtos (Products)](./Products.postman_collection.json)

Para importar as coleções no Postman:

1. Abra o Postman.
2. Clique em **Import**.
3. Selecione o arquivo desejado e importe-o.

**LEMBRETE:** É necessário que tenha pelo menos um usuário cadastrado antes de ser cadastrado um produto

---

## 🛡️ Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript
- **Express**: Framework para criação de APIs
- **MongoDB**: Banco de dados NoSQL
- **Postman**: Ferramenta para testes de API

---

## 🤝 Contribuindo
Contribuições são bem-vindas!  
1. Faça um fork do projeto.  
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).  
3. Commit suas alterações (`git commit -m 'Adiciona minha feature'`).  
4. Submeta um pull request.  

---

## 📜 Licença
Este projeto está sob a licença **MIT**. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).
