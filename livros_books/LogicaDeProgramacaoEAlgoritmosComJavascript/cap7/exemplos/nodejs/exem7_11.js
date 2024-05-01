const prompt = require("prompt-sync")();
const parcelas = Number(prompt("Quantas parcelas? "));

const data = new Date();

for (let i = 1; i <= parcelas; i++){

	data.setMonth(data.getMonth() + 1); // AUMENTA O MÊS PARA O MÊS ATUAL

	const dia = data.getDate();
	const mes = data.getMonth() + 1; // O mês começa em 0 e vai até 11
	const ano = data.getFullYear();

	const diaZero = dia < 10 ? "0" + dia : dia;
	const mesZero = mes < 10 ? "0" + mes : mes;

	console.log(`${i}° Parcela: ${diaZero}/${mesZero}/${ano}`);
}