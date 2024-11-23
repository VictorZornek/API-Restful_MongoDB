
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
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:
   ```
   PORT=3000
   MONGO_CONNECTION=sua-string-de-conexao-mongodb
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
Base URL: `http://localhost:<PORT>/Users`  
Operações disponíveis:
- **Criar usuário** (POST)
- **Listar usuários** (GET)
- **Atualizar usuário** (PUT)
- **Deletar usuário** (DELETE)

### Produtos
Base URL: `http://localhost:<PORT>/Products`  
Operações disponíveis:
- **Criar produto** (POST)
- **Listar produtos** (GET)
- **Atualizar produto** (PUT)
- **Deletar produto** (DELETE)

---

## 🧪 Testando a API

Utilizamos o **Postman** para realizar os testes das rotas da API.

1. **Configuração do Postman**:
   - Defina as URLs mencionadas acima como base.
   - Utilize os métodos HTTP apropriados para cada operação (GET, POST, PUT, DELETE).

2. **Exemplo de Teste**:
   - **Criar usuário**:  
     Enviar uma requisição `POST` para `http://localhost:<PORT>/Users` com um corpo JSON como:
     ```json
     {
       "nome": "John Doe",
       "email": "johndoe@email.com"
     }
     ```

   - **Criar produto**:  
     Enviar uma requisição `POST` para `http://localhost:<PORT>/Products` com um corpo JSON como:
     ```json
     {
       "nome": "Produto A",
       "preco": 99.99
     }
     ```

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
