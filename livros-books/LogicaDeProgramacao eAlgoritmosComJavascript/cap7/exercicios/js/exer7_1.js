const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const mensagem = frm.in_mensagem.value;

	const partes = mensagem.split("");

	let impares = "";
	let pares = "";
	
	for (let i = 0; i < partes.length; i++){

		if (i == 0 || i % 2 == 0) {
			pares += partes[i];
		} else if(i % 2 == 1){
			impares += partes[i];
		}
	}

	resp.innerText = `${pares}${impares}`;
});