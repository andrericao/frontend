const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nomeCompleto = frm.in_nome.value.trim();
	//const arrayNome = nomeCompleto.split("");

	if (!nomeCompleto.includes(" ")) { // se não possui espaços
		alert("Informe o nome completo")
		return;
	}

	let primeiroEspaço = nomeCompleto.indexOf(" "); // acho o primeiro espaço
	let segundoEspaço = nomeCompleto.lastIndexOf(" "); // acho o último espaço, localizando seu index de trás pra frente

	// Para o primeiro nome uso desde o index 0 
	// até o index do primeiro expaço
	let primeiroNome = nomeCompleto.substr(0, primeiroEspaço);
	// Para achar o último nome uso desde o valor do index do último espaço
	// que no automáto pega até o final da palavra
	let segundoNome = nomeCompleto.substr(segundoEspaço);

	const nomeSobrenome = primeiroNome + segundoNome;
	
	resp.innerText = `Crachá: ${nomeSobrenome}`;
});