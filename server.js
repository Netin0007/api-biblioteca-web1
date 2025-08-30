// 1. Importar o framework Express
const express = require('express');

// 2. Inicializar o aplicativo Express
const app = express();

// 3. Adicionar o middleware para fazer o "parse" do JSON
// Isso permite que nossa API entenda o JSON enviado no corpo das requisições POST.
app.use(express.json());

// 4. Nossa "base de dados" em memória. É uma lista (array) de livros.
let livros = [
    { id: 1, titulo: "A Arte da Guerra", autor: "Sun Tzu", ano: 500 },
    { id: 2, titulo: "O Príncipe", autor: "Nicolau Maquiavel", ano: 1532 },
    { id: 3, titulo: "1984", autor: "George Orwell", ano: 1949 }
];

// --- NOSSOS ENDPOINTS ---

// Endpoint: GET /livros
// Retorna a lista de todos os livros. Suporta JSON e XML.
app.get('/livros', (req, res) => {
    // Verificamos o cabeçalho 'Accept' da requisição
    const acceptHeader = req.headers.accept;

    if (acceptHeader && acceptHeader.includes('application/xml')) {
        // Se o cliente pediu XML, construímos a resposta em XML
        let xmlResponse = '<livros>';
        livros.forEach(livro => {
            xmlResponse += `
                <livro>
                    <id>${livro.id}</id>
                    <titulo>${livro.titulo}</titulo>
                    <autor>${livro.autor}</autor>
                    <ano>${livro.ano}</ano>
                </livro>`;
        });
        xmlResponse += '</livros>';

        // Definimos o tipo de conteúdo da resposta e enviamos o XML
        res.type('application/xml');
        res.send(xmlResponse);
    } else {
        // Se não, o padrão é retornar JSON
        res.json(livros);
    }
});

// Rota para a página principal (opcional)
app.get('/', (req, res) => {
    res.send('<h1>API da Biblioteca está no ar!</h1><p>Para ver os livros, acesse <a href="/livros">/livros</a>.</p>');
});

// Endpoint: POST /livros
// Adiciona um novo livro à nossa lista.
app.post('/livros', (req, res) => {
    // Pegamos os dados do novo livro do corpo (body) da requisição
    const novoLivro = req.body;

    // Adicionamos o novo livro à nossa lista
    livros.push(novoLivro);

    // Retornamos uma resposta de sucesso (status 201 = Created)
    // e o livro que foi adicionado.
    res.status(201).json({ mensagem: "Livro adicionado com sucesso!", livro: novoLivro });
});


// 5. Iniciar o servidor para ouvir as requisições
const PORT = 3000; // A porta que nosso servidor vai usar
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});