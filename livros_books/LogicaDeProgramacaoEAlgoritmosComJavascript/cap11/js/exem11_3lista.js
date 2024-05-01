const tbPalavras = document.querySelector("table");
const ckMostrar = document.querySelector("input[type='checkbox']");

const montarTabela = () => {

	if (localStorage.getItem("jogoForca")) {
		const palavras = localStorage.getItem("jogoForca").split(';');
		const dicas = localStorage.getItem("jogoDica").split(";");

		for (let i = 0; i < palavras.length; i++) {
			const linha = tbPalavras.insertRow(-1);

			const col1 = linha.insertCell(0);
			const col2 = linha.insertCell(1);
			const col3 = linha.insertCell(2);

			col1.innerText = palavras[i];
			col2.innerText = dicas[i];
			col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
		}
	}
};

// ocorre quando o checkbox é alterado. Exibe a lista se marcado, senão, recarrega
ckMostrar.addEventListener("change", () => {
	ckMostrar.checked ? montarTabela() : window.location.reload();
});

tbPalavras.addEventListener("click", (e) => {
	// se a CLASSE (linha 19) do elemento alvo clicado contém exclui
	if (e.target.classList.contains("exclui")) {
		// acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho
		const palavra = e.target.parentElement.parentElement.children[0].innerText;

		if (confirm(`Confirma Exclusão da Palavra: ${palavra}?`)) {
			// remove a linha da tabela, correspondente ao símbolo de excluir clicado
			e.target.parentElement.parentElement.remove();

			localStorage.removeItem("jogoForca");
			localStorage.removeItem("jogoDica");

			const palavras = [];
			const dicas = [];

			// obtém dados da tabela, acrescentando-os aos vetores
			for (let i = 1; i < tbPalavras.rows.length; i++) {
				palavras.push(tbPalavras.rows[i].cells[0].innerText);
				dicas.push(tbPalavras.rows[i].cells[1].innerText);
			}

			// salva o conteúdo dos vetores em localStorage (sem a linha removida)
			localStorage.setItem("jogoForca", palavras.join(";"));
			localStorage.setItem("jogoDica", dicas.join(";"));
		}
	}
});

