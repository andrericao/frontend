const frm = document.querySelector("form");
const resp = document.querySelector("h3");

const nomeCompleto = frm.in_nome.value;

const validarNome = (nome) => {
	const nomeDividido = nome.split(" ");
	if (nomeDividido.length <= 1) {
		alert("Favor digitar nome completo!")
	} else {
		return true;
	}
}

const obterSobrenome = (nome) => {
	const nomeDividido = nome.split(" ");
	const qtdNome = nomeDividido.length - 1;
	return nomeDividido[qtdNome];
}

const contarVogais = (nome) => {
	const nomeArray = nome.toLowerCase().split("");

	const nomeTamanho = nomeArray.length;
	
	let contadorVogais = 0;
	for (let i = 0; i < nomeTamanho; i++){
		if (nomeArray[i].match(/[aeiou]/g)) {
			contadorVogais++;
		}
	}
	let contadorString = contadorVogais.toString();
	const vogais = contadorString.padStart(2, "0");

	return vogais;
}

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nomeInput = frm.in_nome.value;

	if(validarNome(nomeInput)){
		const sobrenome = obterSobrenome(nomeInput);
		const numeroVogais = contarVogais(nomeInput);
		resp.innerText = `Senha Inicial: ${sobrenome}${numeroVogais}`; 
	}
});