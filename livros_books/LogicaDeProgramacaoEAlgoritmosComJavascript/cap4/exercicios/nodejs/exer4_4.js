const prompt = require("prompt-sync")();

const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo numero: "));
const numero3 = Number(prompt("Digite o terceiro número: "));

const perimetro = numero1 + numero2 + numero3;

if(numero1 >= perimetro || numero2 >= perimetro || numero3 >= perimetro){
	console.log("Não é um triângulo");
} else if(numero1 == numero2 && numero1 == numero3 && numero2 == numero3){
	console.log("Triângulo Equilátero (3 lados iguais)");
} else if(numero1 == numero2 || numero1 == numero3 || numero2 == numero3){
	console.log("Triângulo Isósceles(2 lados iguais)");
} else if(numero1 != numero2 && numero1 != numero3 && numero2 != numero3){
		console.log("Triângulo Escaleno (todos os lados diferentes)");

	// Esse último ELSE IF poderia ser somente um else,
	// mas fiz uma redundância para confirmar que realmente são diferentes.
}