// cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form");
const respFilme = document.querySelector("h3");
const respDuracao = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (event) => {

	const tituloFilme = frm.inTituloFilme.value;	// obtém conteúdo dos campos
	const duracaFilme = Number(frm.inDuracaoFilme.value);

	const horas = Math.floor(duracaFilme / 60);		// arredonda para baixo
	const minutos = duracaFilme % 60;						// obtém o resto da divisão

	respFilme.innerText = tituloFilme;				// exibe respostas
	respDuracao.innerText = `${horas} hr(s) e ${minutos} min(s)`;

	event.preventDefault();							// envio do form
});