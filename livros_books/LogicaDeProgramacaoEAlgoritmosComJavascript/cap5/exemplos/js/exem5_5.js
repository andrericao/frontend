const frm = document.querySelector("form"); //obtém elementos da página
const resp1 = document.querySelector("#out_resp1"); 
const resp2 = document.querySelector("#out_resp2");

let resposta = "";  	// string com a resposta a ser exibida
let numContas = 0;		// inicializa contador...
let valorTotal = 0;		// e acumulados (variáveis globais)

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const descricao = frm.in_descricao.value; 	// obtém dados
	const valor = Number(frm.in_valor.value);	

	numContas++ // adiciona valores ao contador e acumulador 
	valorTotal += valor;
	resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
	resp1.innerText = `${resposta} \n----------------------------`;
	resp2.innerText = `CONTADOR -> ${numContas} Contas(s) - Total R$: ${valorTotal.toFixed(2)} <- ACUMULADOR`;

	frm.in_descricao.value = ""; // limpa campos
	frm.in_valor.value = "";
	frm.in_descricao.focus(); 	// posiciona no campo in_descicao do form
})