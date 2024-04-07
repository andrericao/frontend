const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const titulo = frm.in_titulo.value;
	const genero = frm.in_genero.value;

	inserirLinha(titulo, genero);
	gravarFilme(titulo, genero);

	frm.reset();
	frm.in_titulo.focus();
});

const inserirLinha = (titulo, genero) => {
	const linha = tbFilmes.insertRow(-1); // adiciona linha a tabela
	const col1 = linha.insertCell(0);
	const col2 = linha.insertCell(1);
	const col3 = linha.insertCell(2);

	col1.innerText = titulo;
	col2.innerText = genero;
	col3.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='exclui bi bi-trash3' viewBox='0 0 16 16'><path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5'/></svg>";
}

const gravarFilme = (titulo, genero) => {
	if (localStorage.getItem("filmesTitulo")) {
		const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
		const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

		localStorage.setItem("filmesTitulo", filmesTitulo);
		localStorage.setItem("filmesGenero", filmesGenero);
	} else {
		localStorage.setItem("filmesTitulo", titulo);
		localStorage.setItem("filmesGenero", genero);
	}
}

window.addEventListener("load", () => {
	if (localStorage.getItem("filmesTitulo")) {
		const titulos = localStorage.getItem("filmesTitulo").split(";");
		const generos = localStorage.getItem("filmesGenero").split(";");

		for (let i = 0; i < titulos.length; i++){
			inserirLinha(titulos[i], generos[i]);
		}
	}
})

tbFilmes.addEventListener("click", (e) => {
	if (e.target.classList.contains("exclui")) {
		const titulo = e.target.parentElement.parentElement.children[0].innerText;

		if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
			e.target.parentElement.parentElement.remove();

			localStorage.removeItem("filmesTitulo");
			localStorage.removeItem("filmesGenero");

			for (let i = 1; i < tbFilmes.length; i++){
				const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
				const auxGenero = tbFilmes.rows[i].cells[1].innerText;

				gravarFilme(auxTitulo, auxGenero)
			}
		}
	}
})