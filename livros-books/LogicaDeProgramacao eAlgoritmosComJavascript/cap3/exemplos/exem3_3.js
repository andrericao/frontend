const prompt = require("prompt-sync")();
const salario = Number(prompt("Digite o salário: R$ "));
const tempo = Number(prompt("Digite anos de trabalho: "));
const quadrienios = Math.floor(tempo / 4);
const porcentagem = quadrienios / 100;
const salarioMaisAdd = salario + (porcentagem * salario);
console.log(`O piso salarial é de R$ ${salario.toFixed(2)}`);
console.log(`Funcionário há ${tempo} anos.`);
console.log(`O que significa ter ${quadrienios} quadriênios.`)
console.log(`Sua porcentagem salarial é de ${quadrienios}%`);
console.log(`Seu salário mais a adição da porcentagem é de R$ ${salarioMaisAdd.toFixed(2)}`);