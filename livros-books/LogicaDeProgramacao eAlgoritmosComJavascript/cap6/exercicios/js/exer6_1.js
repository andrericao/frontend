const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const clubes = [];

frm.addEventListener("submit", (e) => {
	e.preventDefault();
	
	const nomeClube = frm.in_clube.value;

	if (clubes.includes(nomeClube)) {
		alert("Clube já foi inserido na lista");
		frm.reset();
		frm.in_clube.focus();
		return;
	}

	clubes.push(nomeClube);
	frm.reset();
	frm.in_clube.focus();
	frm.btn_listar.dispatchEvent(new Event("click"));
});

frm.btn_listar.addEventListener("click", () => {
	if (clubes.length == 0) {
		alert("Não há clube para listar");
			return;
	}

	let lista = "";
	for (const clube of clubes) {
		lista += clube + "\n";
	}

	resp.innerText = lista;
});

frm.btn_montar.addEventListener("click", () => {

	
	if (clubes.length == 0 || clubes.length % 2 == 1) {
		alert("A quantidade de clubes deve ser par");
		return;
	}
	
	let partidas = "";
	
	const ultimoClube = clubes.length - 1;

	for (i = 0; i < clubes.length / 2; i++){
		partidas += clubes[i] + " x " + clubes[ultimoClube - i] + "\n";
	}

	resp.innerText = partidas;
});