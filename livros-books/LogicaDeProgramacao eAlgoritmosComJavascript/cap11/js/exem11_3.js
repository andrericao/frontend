const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	// obtém conteúdo dos campos (.trim() remove espaços na palavra no início e fim)
	const palavra = frm.in_palavra.value.trim();
	const dica = frm.in_dica.value;

	// valida preenchimento (palavra não deve possuir espaços em branco no meio)
	if (palavra.includes(" ")) {
		alert("Informe uma palavra válida (sem espaços)");
		frm.in_palavra.focus();
		return;
	}

	// se já existe dados em localStorage, grava conteúdo anterior + ";" + palavra / dica
	if (localStorage.getItem("jogoForca")) {
		localStorage.setItem("jogoForca", localStorage.getItem("jogoForca") + ";" + palavra);
		localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica);
	} else {
		localStorage.setItem("jogoForca", palavra);
		localStorage.setItem("jogoDica", dica);
	}

	// verifica se salvou
	if (localStorage.getItem("jogoForca")) {
		alert(`Ok!! Palavra ${palavra} Cadastrada com Sucesso!`);
	}

	frm.reset();
	frm.in_palavra.focus();
});