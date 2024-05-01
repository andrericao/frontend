const frm = document.querySelector("form");
const imgClube = document.querySelector("#img_clube");
const divTitulo = document.querySelector("#div_titulo");

const inRadios = document.querySelectorAll("input");

const trocarClube = () => {
	const clubes = ["Brasil", "Pelotas", "Farroupilha"]

	let selecao;

	// percorre os inradios para verificar qual está selecionado
	for (let i = 0; i < inRadios.length; i++){
		if (inRadios[i].checked) {
			selecao = i; // se selecionado, armazena índice do radio selecionado
			break; // e sai da repetição
		}
	}

	if (selecao <= 2) {
		divTitulo.className = `row cores-${clubes[selecao]}`; // modifica cor

		// muda a propriedade src com a imagem do clube selecionado
		imgClube.src = `../src/${clubes[selecao].toLowerCase()}.png`;
		imgClube.className = `img-fluid`; // muda estilo para exibir imagem
		imgClube.alt = `Bandeira do ${clubes[selecao]}`; // texto alternativo
		localStorage.setItem("clube", clubes[selecao]); // salva nome
	} else {
		divTitulo.className = "row";
		imgClube.className = "d-none";
		imgClube.alt = "";
		localStorage.removeItem("clube");
	}
}

// percorre os elementos para associar functions ao evento change
for (const inRadio of inRadios) {
	inRadio.addEventListener("change", trocarClube)
}

const verificarClube = () => {

	if (localStorage.getItem("clube")) {
		const clube = localStorage.getItem("clube");

		// conforme o clube, marca um dos elementos do input type radio
		if (clube == "Brasil") {
			inRadios[0].checked = true;
		} else if (clube == "Pelotas"){
			inRadios[1].checked = true;
		} else {
			inRadios[2].checked = true;
		}

		trocarClube();
	}
}

window.addEventListener("load", verificarClube);