const prompt = require("prompt-sync")();
const nomeProduto = prompt("Digite o nome do produto: ");
const numeroEtiquetas = Number(prompt("Digite o número de etiquitas: "));

for(let i = 1; i <= numeroEtiquetas / 2; i++){
console.log(`${nomeProduto.padEnd(30)} ${nomeProduto.padEnd(30)}`)
}

if(numeroEtiquetas % 2 == 1){
	console.log(nomeProduto);
}