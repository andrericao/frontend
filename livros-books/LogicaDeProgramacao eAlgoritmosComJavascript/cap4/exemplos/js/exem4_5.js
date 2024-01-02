const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

	e.preventDefault();

	const numero = Number(frm.in_numero.value);
	const raiz = Math.sqrt(numero);

	(Number.isInteger(raiz)) ? resp.innerText = `A raíz quadrada é ${Math.sqrt(numero)}` : resp.innerText = `O número não possui raíz exata`;
})