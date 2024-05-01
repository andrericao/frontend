const prompt = require("prompt-sync")();
const pessoas = Number(prompt("Número de pessoas: "));
const peixes = Number(prompt("Número de peixes: "));

let pagar;
if(peixes <= pessoas){
	pagar = pessoas * 20;
} else {
	pagar = (pessoas * 20) + ((peixes - pessoas) * 12);
}

console.log(`O valor a ser pago é de R$ ${pagar.toFixed(2)}`);