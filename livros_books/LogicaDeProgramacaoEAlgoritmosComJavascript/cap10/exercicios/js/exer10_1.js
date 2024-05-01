const frm = document.querySelector("form");
const divIdades = document.querySelector("#div_idades");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const idade = frm.in_idade.value;

	if (idade > 0 && idade <= 120) {
		idade.split("");
		
		while (divIdades.firstChild) {
			divIdades.removeChild(divIdades.firstChild);
		}

		for (let i = 0; i < idade.length; i++) {
			const imgIdade = document.createElement("img");
	
			imgIdade.src = `../src/${idade[i]}.jpg`;
			divIdades.appendChild(imgIdade);
		}

		console.log(idade.length);
		frm.reset();
		
	} else {
		alert("A idade deve estar entre 1 e 120 anos")
	}
});