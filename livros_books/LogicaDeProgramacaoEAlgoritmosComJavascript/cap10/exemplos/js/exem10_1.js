const frm = document.querySelector("form");
const divQuadro = document.querySelector("#divQuadro");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const tarefa = frm.in_tarefa.value;

	const h5 = document.createElement("h5"); // cria elemento HTML h5
	const texto = document.createTextNode(tarefa); // cria texto
	h5.appendChild(texto); 		// define que texto será filho de "h5"
	divQuadro.appendChild(h5)	// e que será filho de divQuadro

	frm.in_tarefa.value = "";
	frm.in_tarefa.focus();
});

frm.btn_selecionar.addEventListener("click", () => {

	const tarefas = document.querySelectorAll("h5");

	if (tarefas.length == 0) {
		alert("Não há tarefas para selecionar");
		return;
	}

	let aux = -1; // variável auxiliar para indicar linha selecionada

	// percorre lista de elementos h5 inseridos na página, ou seja, tarefas
	for (let i = 0; i < tarefas.length; i++){
		// se tag é da class tarefa.selecionada (está selecionada)
		if (tarefas[i].className == "tarefa-selecionada") {
			tarefas[i].className = "tarefa-normal";
			aux = i; // muda valor da variável auxiliar
			break;
		}
	}

	// se a linha que está selecionada é a última , irá voltar para a primeira
	if (aux == tarefas.length - 1) {
		aux = -1;
	}

	tarefas[aux + 1].className = "tarefa-selecionada"; // muda estilo da próxima linha
});

frm.btn_retirar.addEventListener("click", () => {
	const tarefas = document.querySelectorAll("h5");

	let aux = -1;

	tarefas.forEach((tarefa, i) => {
		if (tarefa.className == "tarefa-selecionada") {
			aux = i;
		}
	});

	if (aux == -1) {
		alert("Selecione uma tarefa para removê-la");
		return;
	}

	if (confirm(`Confirma exclusão de "${tarefas[aux].innerText}"?`)) {
		divQuadro.removeChild(tarefas[aux]);
	}
});

frm.btn_gravar.addEventListener("click", () => {
	const tarefas = document.querySelectorAll("h5");
	console.log(tarefas);

	if (tarefas.length == 0) {
		alert("Não há tarefas para serem salvas!");
		return;
	}

	let dados = "";
	tarefas.forEach(tarefa => {
		dados += tarefa.innerText + ";"; // acumula conteúdo de cada h5
	});

	// grava os dados em localStorage, removendo o último ";"
	localStorage.setItem("tarefasDia", dados.slice(0, -1));

	if (localStorage.getItem("tarefasDia")) {
		alert("Ok, Tarefas Salvas!")
	}
});

window.addEventListener("load", () => {
	if (localStorage.getItem("tarefasDia")) {
		// cria um vetor com a lista de tarefas (saparadas pelo split(";"))
		const dados = localStorage.getItem("tarefasDia").split(";");

		// percorre dados armazenados no localStorage
		dados.forEach(dado => {
			const h5 = document.createElement("h5");
			const texto = document.createTextNode(dado);
			h5.appendChild(texto);
			divQuadro.appendChild(h5);
		});
	}
})

