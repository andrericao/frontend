const prompt = require("prompt-sync")();
console.log("Informe os clientes em ordem de chegada ou digite 'Fim' no nome para sair");
const clientes = [];
do {
	const nome = prompt("Nome: ");
	if(nome == "fim" || nome  == "Fim" || nome == "FIM"){
		break;
	}
	const idade = Number(prompt("Idade: "));
	clientes.push({ nome, idade });
	console.log("Cliente inserido na fila!");
} while (true);

console.log("\nFila Preferencial");
console.log("-".repeat(40));

// dica boa essa do "filter"
const filaPref = clientes.filter(cliente => cliente.idade >= 60);

filaPref.forEach((fila, i) => {
	console.log(`${i + 1}. ${fila.nome}`);
})

console.log("\nFila Normal");
console.log("-".repeat(40));
const filaNormal = clientes.filter(cliente => cliente.idade < 60);
filaNormal.forEach((fila, i) => {
	console.log(`${i + 1}. ${fila.nome}`)
});