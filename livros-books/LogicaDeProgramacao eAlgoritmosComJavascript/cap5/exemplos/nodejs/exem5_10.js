const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor R$: "));
const numeroParcelas = Number(prompt("Número de parcelas: "));
const valorParcela = Math.floor(valor / numeroParcelas);
const valorFinal = valorParcela + (valor % numeroParcelas);

for(let i = 1; i < numeroParcelas; i++){
	console.log(`${i}° parcela: R$ ${valorParcela.toFixed(2)}`);
}

console.log(`${numeroParcelas}° parcela: R$ ${valorFinal.toFixed(2)}`);