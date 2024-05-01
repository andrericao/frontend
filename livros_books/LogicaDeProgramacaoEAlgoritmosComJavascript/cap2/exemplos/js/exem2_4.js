// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" de evento, acionafo quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
	const quilo = Number(frm.inPrecoQuilo.value); // obtém conteúdo dos campos
	const consumo = Number(frm.inConsumo.value)

	const valor = (quilo / 1000) * consumo; // Calcula valor a ser pago
	resp.innerText = `Valor a ser pago: R$ ${valor.toFixed(2)}`;

	e.preventDefault();
})