const frm = document.querySelector("form");
const respH4 = document.querySelector("h4");
const respH3 = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const numero = Number(frm.in_numero.value);

	// let contador = 0; ERREI PORQUE NÃO PRECISO DELE
	let acumulador = 1;
	let respostaH4 = `Divisores de ${numero}: 1`;

	for(let i = 2; i <= numero/2; i++){

		if(numero % i == 0){
			//contador++; ERREI PORQUE NÃO PRECISO DELE
			acumulador += i;
			respostaH4 = `${respostaH4}, ${i}`
		} 
	}

	if(acumulador == numero){
		respH3.innerText = `${numero} é um número perfeito`;
		respH3.style.color = "green";
	} else {
		respH3.innerText = `${numero} não é número perfeito`;
		respH3.style.color = "red";
	}

	respH4.innerText = `${respostaH4} (Soma: ${acumulador})`;

});