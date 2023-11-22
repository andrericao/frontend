const frm = document.querySelector("form");
const respH4 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {

	const valorRef = Number(frm.inValor.value);
	const tempoRef = Number(frm.inTempo.value);

	// arredonda valor para cima
	// divide o tempo por 15 minutos
	// se tiver sobra arredonda pra mais uma 
	// taxa de 15 min
	const pagar = Math.ceil(tempoRef / 15) * valorRef

	respH4.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`

	e.preventDefault();

})