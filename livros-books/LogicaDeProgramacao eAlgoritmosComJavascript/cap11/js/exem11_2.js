const frm = document.querySelector("form");
const divPalco = document.querySelector("#div_palco");

const POLTRONAS = 240;
const reservadas = [];

window.addEventListener("load", () => {
	// operador ternário: se houver dados salvos em localStorage, faz um split(";") e
	// atribui esses dados ao array, caso contrário, o array é inicializado vazio
	const ocupadas = localStorage.getItem("teatroOcupadas")
		? localStorage.getItem("teatroOcupadas").split(";") : [];
	
	// repetição para montar o n° total de poltronas (definida da constante)
	for (let i = 1; i <= POLTRONAS; i++){
		const figure = document.createElement("figure");
		const imgStatus = document.createElement("img");

		// se a posição consta em ocupadas, exibe a imagem ocupada, senão, disponível
		imgStatus.src = ocupadas.includes(i.toString())
			? "src/ocupada.jpg" : "src/disponivel.jpg";
		
		imgStatus.className = "poltrona"; // classe com dimensão img
		const figureCap = document.createElement("figcaption");

		// quantidade de zeros antes do número da poltrona
		const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

		const num = document.createTextNode(`[${zeros}${i}]`);

		figureCap.appendChild(num);
		figure.appendChild(imgStatus);
		figure.appendChild(figureCap);

		// se i módulo 24 == 12 (é o corredor: define margem direita 60px)
		if (i % 24 == 12) figure.style.marginRight = "60px";

		divPalco.appendChild(figure); // indica que fugura é filha de divPalco

		// se i módulo 24 == 0: o comando após && será executado (insere quebra de linha)
		(i % 24 == 0) && divPalco.appendChild(document.createElement("br"));

	}
});

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const poltrona = Number(frm.in_poltrona.value);

	if (poltrona > POLTRONAS) {
		alert("Informe um número de poltrona válido!")
		frm.in_poltrona.focus();
		return;
	}

	const ocupadas = localStorage.getItem("teatroOcupadas")
		? localStorage.getItem("teatroOcupadas").split(";") : [];

	// se poltrona escolhida já estiver ocupada (existe em localStorage)
	if (ocupadas.includes(poltrona.toString())) {
		alert(`Poltrona ${poltrona} já está ocupada!`);
		frm.in_poltrona.value = '';
		frm.in_poltrona.focus();
		return;
	}

	// captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
	const imgPoltrona = divPalco.querySelectorAll("img")[poltrona - 1];
	imgPoltrona.src = "src/reservada.jpg";

	reservadas.push(poltrona);

	frm.in_poltrona.value = "";
	frm.in_poltrona.focus();
});

frm.btn_confirmar.addEventListener("click", () => {

	if (reservadas.length == 0) {
		alert("Não há poltronas reservadas!");
		frm.in_poltrona.focus();
		return;
	}

	const ocupadas = localStorage.getItem("teatroOcupadas")
		? localStorage.getItem("teatroOcupadas").split(";") : [];
	
	// for decrescente, pois as reservas vão sendo removidas a cada alteração da imagem
	for (let i = reservadas.length - 1; i >= 0; i--) {
		ocupadas.push(reservadas[i]);

		// captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
		const imgPoltrona = divPalco.querySelectorAll("img")[reservadas[i] - 1];

		imgPoltrona.src = "src/ocupada.jpg";
		reservadas.pop();
	}

	localStorage.setItem("teatroOcupadas", ocupadas.join(";"));
});