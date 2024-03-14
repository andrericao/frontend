const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("pre");



const calcularDesconto = () => {

	let valorDesc = Number(frm.in_valor.value);

	if (frm.rd_sim.checked) {
		if (frm.slc_convenio.value == "amigo") {
			valorDesc *= 0.2; 
		} else {
			valorDesc *= 0.5;
		}
	} else {
		valorDesc *= 0.1;
	}
	return valorDesc;
};

frm.addEventListener("submit", (e) => {
	e.preventDefault();
	
	const valor = Number(frm.in_valor.value);
	const desconto = calcularDesconto();
	const valorAPagar = valor - desconto;

	resp1.innerText = `Valor a Pagar: R$ ${valorAPagar.toFixed(2)}`
	resp2.innerText = `Desconto: R$ ${desconto.toFixed(2)}`;
});