const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = frm.in_nome.value;
	const masculino = frm.in_masculino.checked;
	const altura = Number(frm.in_altura.value) / 100;

	/*
	let peso;
	if(masculino){
		peso = 22 * Math.pow(altura, 2);
	} else {
		peso = 21 * Math.pow(altura, 2);
	}
	*/
	// USANDO TERNÁRIO
	const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

	resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;

});

frm.addEventListener("reset", () =>{
	resp.innerText = "";
})