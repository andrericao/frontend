const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = frm.in_nome.value;
	const peso = Number(frm.in_peso.value);

	respLista.innerText = `${nome}`;

	// chama function que verifica se o peso já foi apostado
	if (verApostaExiste(peso)) {
		alert("Alguém já apostou este peso, informe outro...");
		frm.in_peso.focus();
		return;
	}

	if (localStorage.getItem("melanciaNome")) {
		
		// obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
		const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
		const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
		localStorage.setItem("melanciaNome", melanciaNome);
		localStorage.setItem("melanciaPeso", melanciaPeso);
	} else {
		localStorage.setItem("melanciaNome", nome);
		localStorage.setItem("melanciaPeso", peso);
	}

	mostrarApostas();
	frm.reset();
	frm.in_nome.focus();
});

const verApostaExiste = (peso) => {
	if (localStorage.getItem("melanciaPeso")) {
		const pesos = localStorage.getItem("melanciaPeso").split(";");

		return pesos.includes(peso.toString());
	} else {
		return false
	}
}

const mostrarApostas = () => {
	// se não há apostas armazenadas em localStorage
	if (!localStorage.getItem("melanciaNome")) {
		// limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
		respLista.innerText = "";
		return; // não executa comandos abaixo
	}

	const nomes = localStorage.getItem("melanciaNome").split(";");
	const pesos = localStorage.getItem("melanciaPeso").split(";");

	// irá acumular as linas a serem exibidas
	let linhas = "";

	for (let i = 0; i < nomes.length; i++){
		linhas += nomes[i] + " - " + pesos[i] + "gr \n";
	}

	respLista.innerText = linhas;
}

window.addEventListener("load", mostrarApostas);

frm.btn_vencedor.addEventListener("click", () => {
	
	if (!localStorage.getItem("melanciaNome")) {
		alert("Não há apostas cadastradas!");
		return;
	}

	const pesoCorreto = Number(prompt("Qual o peso correto da melância?"))

	if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
		return;
	}

	const nomes = localStorage.getItem("melanciaNome").split(";");
	const pesos = localStorage.getItem("melanciaPeso").split(";");

	// valor inicial para vencedor é o da prieira aposta
	let vencedorNome = nomes[0];
	let vencedorPeso = Number(pesos[0]);

	// percorre as apostas
	for (let i = 1; i < nomes.length; i++){
		// calcula a diferença de peso de "vencedor" e da aposta atual
		const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
		const difAposta = Math.abs(Number(pesos[i] - pesoCorreto));

		// se a diferença da paosta atual (no for) for menor que a do "vencedor"
		if (difAposta < difVencedor) {
			vencedorNome = nomes[i];
			vencedorPeso = pesos[i];
		}
	}

	// monta mensagem com dados do vencedor
	let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
	mensagem += "\n-------------------------------------------------";
	mensagem += "\nVencedor: " + vencedorNome;
	mensagem += "\nAposta: " + vencedorPeso + "gr";
	alert(mensagem);
})