const prompt = require("prompt-sync")();
const formula = prompt("Fórmula: ");

let abre = 0;
let fecha = 0;

for (const simbolo of formula) {
	if (simbolo == "(") {
		abre++;
	} else if (simbolo == ")") {
		fecha++;
	}

	console.log("Abre: " + abre);
	console.log("fecha: " + fecha);

	if (fecha > abre) {
	// ótimo insight, caso o que feche fique maior já é sinal que errou
		break;
  }

}

if (abre == fecha) {
	console.log("Fórmula correta em relação aos parêntese!");
} else {
	console.log("Os números de parênteses está errado!")
}