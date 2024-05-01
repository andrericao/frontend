const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número(centena): "));

if(numero < 100 || numero > 1000){
	console.log("Número deve ser centena");
	return;
}

const num1 = Math.floor(numero / 100);
const sobra = numero % 100;
const num2 = Math.floor(sobra / 10);
const num3 = sobra % 10;
console.log(`O número digitado invertido é: ${num3}${num2}${num1}`);