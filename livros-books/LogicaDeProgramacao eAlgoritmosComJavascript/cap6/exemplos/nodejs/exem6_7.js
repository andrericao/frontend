const prompt = require("prompt-sync")();
console.log("Informe o valor dos saques ou 0 para sair");
const saques = [];

do {
	const valor = Number(prompt("Saque: "));

	if(valor == 0)
		break;
	
	saques.push(valor);

	if(valor % 10 == 0){
		console.log("Saque realizado com sucesso");
		console.log("-".repeat(40));
	}
	else {
		console.log("Erro... Valor Inválido (valor deve ser múltiplo de 10)");
		console.log("-".repeat(40));
	}
} while (true);

console.log("\nSaques Válidos");
console.log("=".repeat(40));
const saquesValidos = saques.filter(saque => saque % 10 == 0);
for (const saque of saquesValidos){
	console.log(`R$ ${saque.toFixed(2)}`);
}

console.log("=".repeat(40));
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0);
console.log(`Total dos Saques: R$ ${totalSacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`\nN° de Tentativas de Saques (saques inválidos): ${saquesInvalidos}`);