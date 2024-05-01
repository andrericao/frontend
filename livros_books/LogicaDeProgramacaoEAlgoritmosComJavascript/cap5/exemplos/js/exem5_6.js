const frm = document.querySelector("form");
const resp =  document.querySelector("h3");

frm.addEventListener("submit", (e) => {

	e.preventDefault();

	const numero = Number(frm.in_numero.value);
	
	/*let acumuladorDivisores = 0;

	for(let i = 0; i <= numero; i++){
		if(numero % i == 0){
			acumuladorDivisores++
		}
	}

	if(acumuladorDivisores == 2){
		resp.innerText = "É número primo";
	} else {
		resp.innerText = "Não é número primo";
	}*/

	let temDivisor = false;

	for(let i = 2; i <= numero / 2; i++){
		if(numero % i == 0){
			temDivisor = true;
			break;
		}
	}

	if(numero > 1 && !temDivisor){
		resp.innerText = "É número primo."
	} else {
		resp.innerText = "Não é número primo."
	}

})