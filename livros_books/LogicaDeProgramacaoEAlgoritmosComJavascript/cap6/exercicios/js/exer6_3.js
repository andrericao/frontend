const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const alunos = [];

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = frm.in_nome.value;
	const acerto = Number(frm.in_acerto.value);
	alunos.push({ nome, acerto });

	frm.reset();
	frm.in_nome.focus();
	frm.btn_listar.dispatchEvent(new Event("click"));
});

frm.btn_listar.addEventListener("click", () => {

	if (alunos.length == 0) {
		alert("Não há alunos na lista");
		return;
	}

	let lista = "Lista de todos os alunos\n" + "-".repeat(40) + "\n";
	for (const aluno of alunos) {
		const { nome, acerto } = aluno;
		lista += nome + " - " + acerto + " acerto(s).\n"
	}

	resp.innerText = lista;
});

frm.btn_2_etapa.addEventListener("click", () => {
	const acertoMinimo = prompt("Número de acretos para aprovação? ");
	let lista = "Aprovados 2° Etapa:\n" + "-".repeat(40) + "\n";

	for (const aluno of alunos) {
		const { nome, acerto } = aluno;
		if (aluno.acerto >= acertoMinimo) {
			lista += nome + " - " + acerto + " acerto(s).\n"
		}
	}

	resp.innerText = lista;
});