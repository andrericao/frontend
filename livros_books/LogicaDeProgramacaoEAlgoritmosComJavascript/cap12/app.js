const express = require('express');
const app = express();
// para reconhecer os dados recebidos como sendo um objeto no formato JSON
app.use(express.json());
const port = 3001;

// Arquivo de rotas para cadastro de livros
const livros = require("./livros");

// identificação de rota e da const (require) associada
app.use("/livros", livros);

app.get('/', (req, res) => {
	res.send("olá... bem vindo!");
});

app.get('/cap12', (req, res) => {
	res.send("<h2>Capítulo 12: Introdução ao Express!</h2>");
});

app.post('/filmes', (req, res) => {
	// const titulo = req.body.titulo;
	// const genero = req.body.titulo;
	const { titulo, genero } = req.body;
	res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`);
});

// Exemplo middleware
const log = (req, res, next) => {
	console.log(`.................. Acessando ${new Date()}`);
	next();
}

app.get('/transfere', log, (req, res) => {
	res.send("Ok! valor transferido com sucesso...")
});

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});

