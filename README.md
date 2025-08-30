# API de Biblioteca - Atividade Web 1

> Projeto desenvolvido para a disciplina de Web 1, com o objetivo de criar uma API REST para gerenciar uma coleção de livros. A API demonstra os conceitos de serialização, desserialização e *Content Negotiation*, sendo capaz de responder tanto em formato JSON quanto em XML.

## ✨ Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/pt-br/)

## 💻 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js (versão LTS)](https://nodejs.org/en/)
* [Git](https://git-scm.com/)

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação localmente:

1.  **Clone o repositório:**
    ```bash
    # Altere para a URL do seu repositório
    git clone [https://github.com/SEU-USUARIO/api-biblioteca-web1.git](https://github.com/SEU-USUARIO/api-biblioteca-web1.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd api-biblioteca-web1
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor:**
    ```bash
    node server.js
    ```

Após executar o último comando, o servidor estará rodando em `http://localhost:3000`.

## 🛠️ Como Usar a API

Os testes a seguir foram feitos utilizando o terminal **PowerShell** do Windows.

> **Nota:** No PowerShell, `curl` é um apelido para `Invoke-WebRequest`, que tem uma sintaxe diferente. Para usar os comandos padrão do cURL, utilizamos `curl.exe`.

### 1. Listar todos os livros (GET /livros)

Este endpoint retorna a lista completa de livros.

**➡️ Para receber em JSON (padrão):**

```powershell
curl.exe http://localhost:3000/livros
```

**➡️ Para receber em XML:**
É necessário especificar o cabeçalho `Accept` na requisição.

```powershell
curl.exe -H "Accept: application/xml" http://localhost:3000/livros
```

### 2. Adicionar um novo livro (POST /livros)

Este endpoint adiciona um novo livro à coleção. O corpo da requisição deve ser enviado em formato JSON.

**➡️ Exemplo de comando:**

```powershell
curl.exe -X POST -H "Content-Type: application/json" -d '{\"id\": 4, \"titulo\": \"O Senhor dos Anéis\", \"autor\": \"J.R.R. Tolkien\", \"ano\": 1954}' http://localhost:3000/livros
```

**➡️ Corpo (Body) da requisição em JSON:**

```json
{
  "id": 4,
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "ano": 1954
}
```

**✅ Resposta de Sucesso (Status 201 Created):**

```json
{
  "mensagem": "Livro adicionado com sucesso!",
  "livro": {
    "id": 4,
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954
  }
}
```

---

## ✒️ Autor

Desenvolvido por **Edilson Gonçalves Alves**.