const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const fruta = frm.in_fruta.value.toUpperCase();
	let resposta = "";

	for (const letra of fruta) {
		if (letra == fruta.charAt(0)) {
			resposta == fruta.charAt(0);
		} else {
			resposta += "_";
		}

	}

	resp.innerText = resposta;
	frm.in_fruta.value = "*".repeat(fruta.length);
});