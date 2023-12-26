const prompt = require("prompt-sync")();
const veiculo = prompt("veiculo: ");
const preco = Number(prompt(`Preço R$ `));
const entrada = preco * .50;
const parcela = (preco * .50) / 12;
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$ ${entrada.toFixed(2)}`);
console.log(`+12 vezes de R$ ${parcela.toFixed(2)}`);