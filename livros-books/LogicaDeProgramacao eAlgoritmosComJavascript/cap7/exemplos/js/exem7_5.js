const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nomeCompleto = frm.in_nome.value.trim();

	if (!nomeCompleto.includes(" ")) {
		alert("Favor inserir nome completo!");
		return;
	}
	
	const vertorNome = nomeCompleto.split(" ");

	const quantidadeNomes = vertorNome.length - 1;

	let emailGerado = "";
	for (let i = 0; i < quantidadeNomes; i++){
		emailGerado += vertorNome[i].charAt(0);
	}

	emailGerado += vertorNome[quantidadeNomes] + "@empresa.com.br"

	resp.innerText = `E-mail: ${emailGerado.toLowerCase()}`;

});