const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const modelo = frm.in_modelo.value;
	const preco = Number(frm.in_preco.value);
	carros.push({modelo, preco}); // adiciona dados ao vetor
	frm.in_modelo.value = "";
	frm.in_preco.value = "";

	frm.in_modelo.focus();

	// "dispatch"" inclui evento, 
	// neste caso ele causa um evento de clique no botão "btn_listar" 
	// assim que o submit roda
	frm.btn_listar.dispatchEvent(new Event("click"));
});

frm.btn_listar.addEventListener("click", () => {
	if(carros.length == 0){
		alert("Não há carros na lista")	
		return
	}

	// método reduce() concatena uma String, obtendo modelo e preço de cada veículo
	const lista = carros.reduce((acumulador, carro) => 
		acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "");

		resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
});

frm.btn_filtrar.addEventListener("click", () => {
	const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

	if(maximo == 0 || isNaN(maximo)){
		return;
	}

	//cria um novo vetor com objetos que atendem a condição de fltro 
	const carrosFilter = carros.filter(carro => carro.preco <= maximo);
	if(carrosFilter.length == 0){
		alert("Não há carros com o preço inferior ou igual ao solicitado");
		return;
	}

	let lista = "";
	for (const carro of carrosFilter){
		lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
	}

	resp.innerText = `Carro Até R%: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
});

frm.btn_simular.addEventListener("click", () => {
	const desconto = Number(prompt("Qual o percentual de desconto: "));
	if(desconto == 0 || isNaN(desconto)){
		return;
	}

	const carroDesc = carros.map(aux => ({
		modelo: aux.modelo,
		preco: aux.preco - (aux.preco * desconto / 100)
	}))

	let lista  = "";
	for(const carro of carroDesc){
		lists += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
	}
	resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
});