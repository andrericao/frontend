const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const fruta = frm.in_fruta.value;
	const numero = Number(frm.in_numero.value);
	let resposta = "";

	for(let i = 0; i <= numero - 1; i++){
		resposta += fruta + " * ";
	}

	resp.innerText = resposta + fruta;

})