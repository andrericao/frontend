const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const resp2 = document.querySelector("pre");
const numeros = [];

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const numero = Number(frm.in_numero.value);
	if (numeros.includes(numero)) {
		alert("Número já existe na lista.");
		frm.in_numero.value = "";
		frm.in_numero.focus();
		return;
	}
	numeros.push(numero);

	let lista = "Números: ";
	lista += numeros.join(", ");

	resp.innerText = lista;

	frm.reset();
	frm.in_numero.focus();	
});

frm.btn_verificar.addEventListener("click", () => {

	if (numeros.length == 0) {
		alert("Não há número na lista!");
		return;
	}

	const copia = [...numeros];
	copia.sort((a, b) => a - b);

	for (let i = 0; i < numeros.length; i++) {

		if (copia[i] == numeros[i]) {
			resp2.innerText = "O números estão em ordem.";
		} else {
			resp2.innerText = "Os números estão fora de ordem";
		}
		
	}
});
