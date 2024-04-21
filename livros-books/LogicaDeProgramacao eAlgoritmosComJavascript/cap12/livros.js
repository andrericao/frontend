const express = require("express"); // pacotes a serem utilizados
const router = express.Router();
const cors = require('cors');
router.use(cors());

// dados de conexão com o banco de dados
const dbKnex = require("./data/db_config"); 

// método get é usado para consulta
router.get("/", async (req, res) => {
	try {
		// para obter os livros pode-se utilizar .select().orderBy() ou apenas .orderBy()
		const livros = await dbKnex("livros").orderBy("id", "desc");
		// retorna statusCode ok e os dados
		res.status(200).json(livros); 

	} catch (error) {
		// retorna status de erro e msg
		res.status(400).json({ msg: error.message }); 
	}
});

// Método post é usado para inclusão

router.post("/", async (req, res) => {
	// faz a desestruturação dos dados recebidos no corpo da requisição
	const { titulo, autor, ano, preco, foto } = req.body;

	// se algum dos campos não foi passado, irá enviar uma mensagem de erro e retornar
	if (!titulo || !autor || !ano || !preco || !foto) {
		res.status(400).json({ msg: "Enviar titulo, autor, ano, preço, e foto do livro!" });
		return;
	}

	// caso ocorra algum erro na inclusão, o programa irá capturar irá capturar (catch) o erro
	try {
		// insert, faz a inserção na tabela livros (e retorna o id do registro inserido)
		const novo = await dbKnex("livros").insert({ titulo, autor, ano, preco, foto });
		res.status(201).json({ id: novo[0] }); // statusCode indica Create (criado)
	} catch (error) {
		res.status(400).json({ msg: error.message }); // retorna status de erro e msg
	}
});

// Método put é usado para alteração. id indica o registro a ser alterado
router.put("/:id", async (req, res) => {
	const id = req.params.id; // ou const { id } = req.params
	const { preco } = req.body; // campo a ser alterado

	try {
		// altera o campo preço, no registro cujo id coincidir com o parâmetro passado
		await dbKnex("livros").update({ preco }).where("id", id); // ou .where({ id })
		res.status(200).json(); // statusCode indica ok
	} catch (error) {
		res.status(400).json({ msg: error.message }); // retorna status de erro e msg
	}
});

// Método delete é usado para exclusão
router.delete("/:id", async (req, res) => {
	const { id } = req.params; // id do registro a ser excluído

	try {
		await dbKnex("livros").del().where({ id });
		res.status(200).json();
	} catch (error) {
		res.status(400).json({ msg: "Deu ruim!" });
	}
});

// Filtro por título ou autor
router.get("/filtro/:palavra", async (req, res) => {
	// palavra do título ou autor a pesquisar
	const palavra = req.params.palavra;
	try {
		// para filtrar registros, utiliza-se .where(), com suas variantes
		const livros = await dbKnex("livros")
			.where("titulo", "like", `%${palavra}%`)
			.orWhere("autor", "like", `%${palavra}%`);
		// retorna statusCode ok e os dados
		res.status(200).json(livros);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
});

// Resumo do cadastro de livros
router.get("/dados/resumo", async (req, res) => {
	try {
		// métodos que podem ser utilizados para obter dados estatísticos da tabela
		const consulta = await dbKnex("livros")
			.count({ num: "*" })
			.sum({ soma: "preco" })
			.maior({ maior: "preco" })
			.avg({ media: "preco" });
		const { num, soma, maior, media } = consulta[0];
		res.status(200).json({ num, soma, maior, media: Number(media.toFixed(2)) });
	} catch (error) {
		// retorna status de erro e msg
		res.status(400).json({ msg: message });
	}
});

// Soma dos preços, agrupados por ano
router.get("/dados/grafico", async (req, res) => {
	try {
		// obtém ano e s oma do preço dos livros (com nome total), agrupados por ano
		const totalPorAno = await dbKnex("livros").select("ano")
			.sum({ total: "preco" }).groupBy("ano");
		res.status(200).json(totalPorAno);
	} catch (error) {
		res.status(400).json({ msg: message });
	}
});

module.exports = router;