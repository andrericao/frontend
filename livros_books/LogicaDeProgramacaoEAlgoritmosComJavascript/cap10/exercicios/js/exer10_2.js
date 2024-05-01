const frm = document.querySelector("form");
const divNome = document.querySelector("#div_nome");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	while (divNome.firstChild) {
		divNome.removeChild(divNome.firstChild);
	}

	const nomeComp = frm.in_nome.value.trim().split(" ");

	for (let i = 0; i < nomeComp.length; i++) {
		const h3Nome = document.createElement("h3");
		const texto = document.createTextNode(nomeComp[i]);

		const red = Math.ceil(Math.random() * 256);
		const green = Math.ceil(Math.random() * 256);
		const blue = Math.ceil(Math.random() * 256);
		
		h3Nome.appendChild(texto);
		h3Nome.style.color = `rgb(${red}, ${green}, ${blue})`;
		divNome.appendChild(h3Nome);
	}

	frm.reset();	
});

