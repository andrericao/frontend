const frm = document.querySelector("form");
const divMoedas = document.querySelector("#div_moedas");

window.addEventListener("load", () => {
	// gera números aleatórios, entre 1 e 5, para cada elemento
	const num1_00 = Math.ceil(Math.random() * 5);
	const num0_50 = Math.ceil(Math.random() * 5);
	const num0_25 = Math.ceil(Math.random() * 5);
	const num0_10 = Math.ceil(Math.random() * 5);

	// define texto alternativo das imagens (acessibilidade)	
	const alt1_00 = "Moedas de Um Real";
	const alt0_50 = "Moedas de Cinquenta Centavos";
	const alt0_25 = "Moedas de Vinte e Cinco Centavos";
	const alt0_10 = "Moedas de Dez Centavos";

	// chama o método "criarMoedas" passando os argumentos
	criarMoedas(num1_00, "1_00.jpg", alt1_00, "Moeda de R$ 1.00");
	criarMoedas(num0_50, "0_50.jpg", alt0_50, "Moeda de R$ 0.50");
	criarMoedas(num0_25, "0_25.jpg", alt0_25, "Moeda de R$ 0.25");
	criarMoedas(num0_10, "0_10.jpg", alt0_10, "Moeda de R$ 0.10");
});

const criarMoedas = (num, moeda, textoAlt, classe) => {
	// cria laço de repetição para inserir várias imagens de moedas na página
	for (let i = 1; i <= num; i++){
		const novaMoeda = document.createElement("img");
		novaMoeda.src = "../src/" + moeda;	// atributo src
		novaMoeda.textoAlt = textoAlt;			// texto alternativo
		novaMoeda.className = classe;				// classe da moeda(css)
		divMoedas.appendChild(novaMoeda)		// hierarquia DOM
	}
	const br = document.createElement("br");
	divMoedas.appendChild(br);
}