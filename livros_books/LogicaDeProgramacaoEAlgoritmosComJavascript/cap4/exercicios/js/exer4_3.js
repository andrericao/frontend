const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
	e.preventDefault();
	const valor = Number(frm.in_valor.value);

	if(valor >= 3){

		const troco = valor - 3;
		resp1.innerText = "O tempo é de 120 min"

		if(valor > 3){
			
			resp2.innerText = `O troco é de R$ ${troco.toFixed(2)}`
		}
	} else if (valor >= 1.75) {

		const troco = valor - 1.75;
		resp1.innerText = "O tempo é de 60 min"

		if(valor > 1.75){

			resp2.innerText = `O troco é de R$ ${troco.toFixed(2)}`
		} 
	}else if(valor >= 1) {
		
		const troco = valor - 1;
		resp1.innerText = "O tempo é de 30 min"

		if(valor > 1){

		resp2.innerText = `O troco é de R$ ${troco.toFixed(2)}`
		}
	}
})