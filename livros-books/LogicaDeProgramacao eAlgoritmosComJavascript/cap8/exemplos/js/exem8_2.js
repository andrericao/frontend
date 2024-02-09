const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const modelo = frm.in_modelo.value;
	const ano = Number(frm.in_ano.value);
	const preco = Number(frm.in_preco.value);
	const classificacao = classificarVeiculo(ano);
	const entrada = calcularEntrada(preco, classificacao);
	const parcela = (preco - entrada) / 10;

	resp1.innerText = modelo + " - " + classificacao;
	resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
	resp3.innerText = `+10x de R$: ${parcela.toFixed(2)}`;
});

// função recebe o ano do veículo como parâmetro
const classificarVeiculo = (ano) => {
	
	const anoAtual = new Date().getFullYear(); // obtém ano atual

	let classific;
	if (ano == anoAtual) {
		classific = "Novo";
	} else if (ano == anoAtual - 1 || ano == anoAtual - 2){
		classific = "Seminovo";
	} else {
		classific = "Usado";
	}
	return classific;
}

// função recebe valor e status do veículo como parâmetro
const calcularEntrada = (valor, status) => 
	status == "Novo" ? valor * 0.5 : valor * 0.3;