const frm = document.querySelector("form");
const respTitulo = document.querySelector("#h41");
const respEntradaDe50PC = document.querySelector("#h42");
const respParcelaEm12 = document.querySelector("#h43");

console.log(frm.inModeloVeiculo.value);

frm.addEventListener('submit', (event) => {
	event.preventDefault();
	const modeloVeiculo = frm.inModeloVeiculo.value;
	const precoVeiculo = Number(frm.inPrecoVeiculo.value);
	
	const metadoDoValor = precoVeiculo / 2;
	const valorDaParcela = metadoDoValor / 12; 

	respTitulo.innerText = `Promoção: ${modeloVeiculo}`;
	respEntradaDe50PC.innerText = `Entrada de apenas R$ ${metadoDoValor.toFixed(2)}`;
	respParcelaEm12.innerText = `+12 de R$ ${valorDaParcela.toFixed(2)}`;
});