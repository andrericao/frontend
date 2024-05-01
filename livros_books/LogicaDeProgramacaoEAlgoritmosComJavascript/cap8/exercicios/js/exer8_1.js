const frm = document.querySelector("form");
const resp1 = document.querySelector("#out_resp1");
const resp2 = document.querySelector("#out_resp2");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = frm.in_nome.value;
	const idade = Number(frm.in_idade.value);

	// Unicode
	// de "À" a "Y"
	const nome2 = nome.toUpperCase().replace(/[A-Z\u00C0-\u00FF]/g, "-");
	let categoria = "";

	if (!frm.checkValidity()) {
		alert("Favor informar idade maior que 0 (zero)!");
		return;
	} else if (idade <= 12) {
		categoria = "Infantil";
	} else if (idade <= 18) {
		categoria = "Juvenil";
	} else {
		categoria = "Adulto";
	}

	resp1.innerText = "\n" + nome + "\n" + nome2;
	resp2.innerText = `Categoria: ${categoria}`;

});