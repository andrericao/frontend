const prompt = require("prompt-sync")();
const pesoRacao = Number(prompt("Peso da ração (kg): "));
const consumo = Number(prompt("Consumo diário (gr): "));
const restante = (pesoRacao * 1000) - consumo;
const duracao = Math.floor( (pesoRacao * 1000) / consumo);
const sobra = restante % consumo
console.log(`A ração tem ${pesoRacao * 1000} gramas`);
console.log(`O consumo diário é de ${consumo} gramas`);
console.log(`Terão duração de ${duracao} dias.`);
console.log(`Sobram ${sobra} gramas.`);