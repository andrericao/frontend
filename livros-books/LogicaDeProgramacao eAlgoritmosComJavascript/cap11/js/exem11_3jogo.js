const frm = document.querySelector("form");
const respPalavra = document.querySelector("#out_palavras");
const respErros = document.querySelector("#out_erros");
const respDica = document.querySelector("#out_dica");
const respChances = document.querySelector("#out_chances");
const respMensagemFinal = document.querySelector("#out_mensagem_final");
const imgStatus = document.querySelector("img");

let palavraSorteada;
let dicaSorteada;

window.addEventListener("load", () => {
	if (!localStorage.getItem("jogoForca")) {
		alert("Cadastre palavras para jogar");
		frm.in_letra.disable = true;
		frm.btn_jogar.disabled = true;
		frm.btn_ver_dica.disabled = true;
	}

	// obtém conteúdo do localStorage e separa em elementos de vetor
	const palavras = localStorage.getItem("jogoForca").split(";");
	const dicas = localStorage.getItem("jogoDica").split(";");

	const tam = palavras.length;

	// gera um número entre 0 e tam-1 (pois arredonda para baixo)
	const numAleatorio = Math.floor(Math.random() * tam);

	// obtém palavra (em letras maiúsculas) e dica na posição do nº aleatório gerado
	palavraSorteada = palavras[numAleatorio].toUpperCase();
	dicaSorteada = dicas[numAleatorio];

	let novaPalavra = ""; // para montar palavra exibida (com letra inicial e "_")

	// for para exibir a letra inicial e as demais ocorrências desta letra na palavra
	for (const letra of palavraSorteada) {
		// se igual a letra inicial, acrescenta esta letra na exibição
		if (letra == palavraSorteada.charAt(0)) {
			novaPalavra += palavraSorteada.charAt(0);
		} else {
			novaPalavra += "_"; // senão acrescenta "_"
		}
	}

	respPalavra.innerText = novaPalavra;
});

frm.btn_ver_dica.addEventListener("click", () => {
	// verifica se o jogador já clicou anteriormente no botão
	if (respErros.innerText.inludes("*")) {
		alert("Você já solicitou a dica...");
		frm.in_letra.focus();
		return;
	}

	respDica.innertext = " * " + dicaSorteada;
	respErros.innerText += "*";

	const chances = Nunber(respChances.innerText) - 1;
	respChances.innerText = chances;

	trocarStatus(chances); // troca imagem

	verificarFim(); // verifica se atingiu o limite de chances

	frm.in_letra.focus();
});

const trocarStatus = (num) => {
	if (num > 0) imgStatus.src = `src/status${num}.jpg`;
};

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const letra = frm.in_letra.value.toUpperCase();

	let erros = respErros.innerText;
	let palavra = respPalavra.innerText;

	// verifica se a palavra apostada já const em erros ou na palavra
	if (erros.includes(letra) || palavra.includes(letra)) {
		alert("Você já apostou esta letra")
		frm.in_letra.focus();
		return;
	}

	// se letra consta em palavraSorteada
	if (palavraSorteada.includes(letra)) {
		let novaPalavra = ""; // para compor nova palavra
		
		// for para montar palavra exibida
		for (let i = 0; i < palavraSorteada.length; i++){
			// se igual a letra apostada, acrescenta esta letra na exibição
			// novaPalavra vai crescendo a cada interação
			if (palavraSorteada.charAt(i) == letra) {
				novaPalavra += letra;
			} else {
				novaPalavra += palavra.charAt(i);
			}
		}

		respPalavra.innerText = novaPalavra;
	} else {
		respErros.innerText += letra;
		const chances = Number(respChances.innerText) - 1;
		respChances.innerText = chances;

		trocarStatus(chances);
	}

	verificarFim();

	frm.in_letra.value = "";
	frm.in_letra.focus();
});

const verificarFim = () => {
	const chances = Number(respChances.innerText);

	if (chances == 0) {
		respMensagemFinal.className = "display-3 text-danger";
		respMensagemFinal.innerText = `Ah... é ${palavraSorteada}. Você Perdeu!`;
		concluirJogo();
	} else if (respPalavra.innerText == palavraSorteada) {
		respMensagemFinal.className = "display-3 text-primary";
		respMensagemFinal.innerText = "Parabéns!! Você ganhou.";
		trocarStatus(4);
		concluirJogo();
	}
}

// modifica o texto da dica e desabilita od botões de jogar
const concluirJogo = () => {
	respDica.innerText = "* Clique no botão 'Iniciar Jogo' para jogar novamente";
	frm.in_letra.disabled = true;
	frm.btn_jogar.desabled = true;
	frm.btn_ver_dica.disabled = true;
}