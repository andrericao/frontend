const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor da compra R$: "));
const numParcelas = Math.floor(valor / 20);
const parcelas = numParcelas == 0 ? 1 : numParcelas > 6 ? 6 : numParcelas;
/* TERNÁRIO ACIMA EXPLICADO ABAIXO
if (numParcelas == 0){
	parcelas = 1
} else if(numParcelas > 6) {
	parcelas = 6
} else {
	parcelas = numParcelas
}
*/
const valorParcela = valor / parcelas;
console.log(`pode pagar em ${parcelas} X de R$: ${valorParcela.toFixed(2)}`);