const frm = document.querySelector("form");
const divTimes = document.querySelector("#div_times");
const divTabela = document.querySelector("#div_tabela");
let times = [];

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const time = frm.in_time.value.trim();

	if (times.includes(time)) {
		alert("Time já adicionado");
		frm.reset();
		frm.focus();
		return;
	}

	times.push(time);
	
	const h5 = document.createElement("h5");
	h5.className = "text-capitalize";
	const texto = document.createTextNode(time);

	h5.appendChild(texto);
	divTimes.appendChild(h5);

	frm.reset();
	frm.focus();

});

frm.btn_montar.addEventListener("click", () => {

	const timesEmPar = times.length;

	if (timesEmPar <= 1 || timesEmPar % 2 == 1) {
		alert("Os times devem ser par");
		console.log(timesEmPar);
		return;
	}

	const texto = document.createTextNode("Quadro de Jogos")
	const h3 = document.createElement("h3");
	const tabela = document.createElement("table");

	h3.className = "text-center";
	tabela.className = "mt-3 table table-striped";

	h3.appendChild(texto);
	divTabela.appendChild(h3);
	divTabela.appendChild(tabela);

	for (let i = 1; i <= timesEmPar; i += 2) {
		const linha = tabela.insertRow(-1);
		const col1 = linha.insertCell(0);
		const col2 = linha.insertCell(1);
		const col3 = linha.insertCell(2)
		
		col1.innerText = times[i - 1];
		col2.innerText = "Vs"
		col3.innerText = times[i];

		col1.className = "text-capitalize text-center";
		col2.className = "text-capitalize text-center";
		col3.className = "text-capitalize text-center";
	}

	frm.btn_adicionar.disabled = true;
	frm.btn_montar.disabled = true;
	frm.in_time.readOnly = true;
});

frm.btn_novo_clubes.addEventListener("click", () => {

	times = [];

	while (divTimes.firstChild) {
		divTimes.removeChild(divTimes.firstChild);
	}

	while (divTabela.firstChild) {
		divTabela.removeChild(divTabela.firstChild);
	}

	frm.btn_adicionar.disabled = false;
	frm.btn_montar.disabled = false;
	frm.in_time.readOnly = false;

});