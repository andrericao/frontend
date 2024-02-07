const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const frase = frm.in_frase.value.toUpperCase();
	const partes = frase.split(""); // separei e vetor  para tirar os espaços
	
	// neste for eu tiro os espaços do vetor
	for (let i = 0; i < partes.length; i++){
		if (partes[i] == " ")
			partes.splice(i, 1);
	}
	
	// junto a frase sem espaços
	const fraseDiretaSemEspacos = partes.join("");

	// reverto o vetor sem espaços
	const partesInverso = partes.reverse();

	// junto o vetor inverso sem espaços
	const fraseInversaSemEspacos = partesInverso.join("");

	// Comparo e exibo a resposta pela estrutura de seleção
	if (fraseDiretaSemEspacos == fraseInversaSemEspacos) {
		resp.innerText = `${frase} é um Palíndromo`;
	} else {
		resp.innerText = `${frase} não é um Palíndromo`;
	}
});