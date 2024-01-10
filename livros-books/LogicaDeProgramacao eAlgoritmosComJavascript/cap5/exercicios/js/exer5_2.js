const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	let numChinchilas = Number(frm.in_numero.value);
	const numAnos = Number(frm.in_anos.value);

	let resposta = "";
	
	for(let i = 1; i <= numAnos; i++){

			resposta = resposta + `${i}° Ano: ${numChinchilas} Chinchilas\n`;
			numChinchilas *= 3;
	}

	resp.innerText = resposta;
})