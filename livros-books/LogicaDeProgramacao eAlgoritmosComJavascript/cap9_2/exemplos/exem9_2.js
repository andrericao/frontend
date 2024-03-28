const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = frm.in_nome.value;
	const peso = Number(frm.in_peso.value);

	if (verApostaExiste(peso)) {
		alert("Aposta já informada...");
		frm.in_peso.focus();
		return;
	}

	if (localStorage.getItem("melanciaNome")) {
		// adiciona apostas ao localStorage
		const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
		const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
		localStorage.setItem("melanciaNome", melanciaNome);
		localStorage.setItem("melanciaPeso", melanciaPeso);
	} else {
		// cria dados no localStorage
		localStorage.setItem("melanciaNome", nome);
		localStorage.setItem("melanciaPeso", peso);
	}

	mostraAposta();
	frm.reset();
	frm.in_nome.focus();
});

const verApostaExiste = (peso) => {
	if (localStorage.getItem("melanciaPeso")) {
		const pesos = localStorage.getItem("melanciaPeso").split(";");

		return pesos.includes(peso.toString());
	} else {
		return false;
	}
}

const mostraAposta = () => {
	if (!localStorage.getItem("melanciaNome")) {
		respLista.innerText = "";
		return;
	}

	const nomes = localStorage.getItem("melanciaNome").split(";");
	const pesos = localStorage.getItem("melanciaPeso").split(";");

	let linhas = "";

	for (let i = 0; i < nomes.length; i++){
		linhas += nomes[i] + " - " + pesos[i] + "gr \n";
	}

	respLista.innerText = linhas;
}

window.addEventListener("load", mostraAposta);

frm.btn_vencedor.addEventListener("click", () => {
	if (!localStorage.getItem("melanciaNome")) {
		alert("Não há apostas cadastradas!")
		return;
	}

	const pesoCorreto = Number(prompt("Qual o peso da Melancia?"));

	if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
		return;
	}

	const nomes = localStorage.getItem("melanciaNome").split(";");
	const pesos = localStorage.getItem("melanciaPeso").split(";");

	let vencedorNome = nomes[0];
	let vencedorPeso = Number(pesos[0]);

	for (let i = 1; i < nomes.length; i++){
		const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
		const difAposta = Math.abs(Number(pesos[i] - pesoCorreto));

		if (difAposta < difVencedor) {
			vencedorNome = nomes[i];
			vencedorPeso = pesos[i];
		}
	}

	let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
	mensagem += "\n -----------------------------------------------";
	mensagem += "\nVencedor: " + vencedorNome;
	mensagem += "\nAposta: " + vencedorPeso + "gr";
	alert(mensagem);
});

frm.btn_limpar.addEventListener("click", () => {
	if (confirm("Confirma exclusão de todas as apostas?")) {
		localStorage.removeItem("melanciaNome");
		localStorage.removeItem("melanciaPeso");
		mostraAposta();
	}
})

