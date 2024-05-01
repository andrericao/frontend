const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const mensagem = frm.in_mensagem.value;
	const partes = mensagem.split("");

	let impares = "";
	let pares = "";
	
	for (let i = 0; i < partes.length; i++){

		if (i % 2 == 1) {
			pares += partes[i];
		} else if(i == 0 || i % 2 == 0){
			impares += partes[i];
		}
	}

	resp.innerText = `${pares}${impares}`;
});

frm.btn_descriptografar.addEventListener("click", () => {

	// na resposta do livro eles erraram,
	// pois pegaram o dado do formulário.
	// Já na minha peguei o valor da variável do h3
	// Que é a mensagem cifrada
	const mensagemCriptografada = resp.innerText;
	const tamanho = mensagemCriptografada.length;
	const metade = Math.floor(tamanho / 2);
	let resposta = "";

	if (tamanho % 2 == 0) {
		for (let i = metade; i < tamanho; i++){
			resposta += mensagemCriptografada.charAt(i);
			resposta += mensagemCriptografada.charAt(i - metade);
		}
	} else {
		for (let i = metade; i < tamanho - 1; i++) {
			resposta += mensagemCriptografada.charAt(i);
			resposta += mensagemCriptografada.charAt(i - metade);
		}

		resposta += mensagemCriptografada.charAt(tamanho - 1);
	}
	resp.innerText = resposta;
});