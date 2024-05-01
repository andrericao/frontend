// cria referência ao from e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (event) => {
	const nome = frm.inNome.value;  // obtém nome digitado no form
	resp.innerText = `Olá ${nome}`; // exibe a resposta do programa 
	event.preventDefault(); 		// evita envio do form
})