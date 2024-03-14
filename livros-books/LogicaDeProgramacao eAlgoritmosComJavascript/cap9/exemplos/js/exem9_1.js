const frm = document.querySelector("form");
const imgClube = document.querySelector("#img_clube");
const divTitulo = document.querySelector("#div_titulo");

const trocarClube = () => {
	let clube;

	if (frm.rd_brasil.checked) {
		clube = "Brasil";
	} else if (frm.rd_pelotas.checked) {
		clube = "Pelotas";
	} else {
		clube = "Farroupilha";
	}	

	// define as classes de divTitulo: row e cores do clube
	divTitulo.className = `row cores-${clube}`;

	// modifica a imagem de acordo com a seleção do cliente
	imgClube.src = `../src/${clube.toLowerCase()}.png`;
	imgClube.className = "img-fluid";
	imgClube.alt = `Bandeira do ${clube}`;

	localStorage.setItem("clube", clube);
}

// associa ao evento change de cada botão do form a função trocarClube
frm.rd_brasil.addEventListener("change", trocarClube);
frm.rd_pelotas.addEventListener("change", trocarClube);
frm.rd_farroupilha.addEventListener("change", trocarClube);

const verificarClube = () => {
	if (localStorage.getItem("clube")) {
		const clube = localStorage.getItem("clube");

		if (clube == "Brasil") {
			frm.rd_brasil.checked = true;
		} else if (clube == "Pelotas") {
			frm.rd_pelotas.checked = true;
		} else {
			frm.rd_farroupilha.checked = true;
		}

		trocarClube();
	}
}

// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);