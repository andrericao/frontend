const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const numero = Number(frm.in_numero.value);
	let resposta = "";

	for(let i = 1; i < 11; i++){
		let tabuada = numero * i;
		resposta = `${resposta}${numero} x ${i} = ${tabuada}\n`;
	}
	resp.innerText = resposta;
})