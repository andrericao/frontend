const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const criancas = [];

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	//  Pego as variáveis para composição do objeto
	const nome = frm.in_nome.value;
	const idade = Number(frm.in_idade.value);

	// componho objeto com informação das variáveis
	// incluo objeto(por meio do push) com informação de variáveis na lista declarada globalmente
	criancas.push({ nome, idade });

	// ao mesmo tempo reseto os inputs e ponho o cursor no input específico
	frm.reset();
	frm.in_nome.focus();
	frm.btn_listar.dispatchEvent(new Event("click"));
});

frm.btn_listar.addEventListener("click", () => {
	if(criancas.length == 0){
		alert("Não há crianças na lista");
		return;
	}
	let lista = "";
	for(const crianca of criancas ){
		// desestruturar para poder ter flexibilidade na exibição
		const { nome, idade } = crianca; 
		// usando informações desestruturadas (como se fossem variáveis)
		lista += nome + " - " + idade + " anos\n";
	}

	resp.innerText = lista;
});

frm.btn_resumir.addEventListener("click", () => {
	if(criancas.length == 0){
		alert("Não há crianças na lista");
		return;
	}

	const copia = [ ...criancas];
	copia.sort((a, b) => a.idade - b.idade); // ordena por idade
	let resumo = "";
	let aux = copia[0].idade; // menor idade do valor ordenado
	let nomes = [];

	for(const crianca of copia){
		const { nome, idade} = crianca;
		if(idade == aux) {
			nomes.push(nome);
		} else {
			resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
			resumo += ((nomes.length / copia.length) * 100 ).toFixed(2) + "%\n";
			resumo += "(" + nomes.join(", ") + ")\n\n";
			aux = idade;
			nomes = [];
			nomes.push(nome)
		}
	}

	resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
	resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
	resumo += "(" + nomes.join(", ") + ")\n\n";
	resp.innerText = resumo;
});
