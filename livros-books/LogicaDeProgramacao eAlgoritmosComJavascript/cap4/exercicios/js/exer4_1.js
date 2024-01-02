const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();
	const numero = Number(frm.in_numero.value);

	if(Number.isInteger(numero) && Number(numero % 2 == 1)){

		resp.innerText = `${numero} é ímpar`;

	} else if (Number.isInteger(numero) && Number(numero % 2 == 0)){

		resp.innerText = `${numero} é par`;

	} else {
		resp.innerText = "O número deve ser inteiro positivo";
	}

})