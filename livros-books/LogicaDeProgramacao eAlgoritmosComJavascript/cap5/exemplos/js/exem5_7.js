const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
	e.preventDefault();

	const numero = Number(frm.in_numero.value);
	let estrelas = "";

	for(let i = 1; i <= numero; i++){
		if(i % 2 == 1){
			estrelas = estrelas + "*"; // na posição ímpar do i
		} else {
			estrelas = estrelas + "-"; // posição par
		}
	}

	resp.innerText = estrelas;
})