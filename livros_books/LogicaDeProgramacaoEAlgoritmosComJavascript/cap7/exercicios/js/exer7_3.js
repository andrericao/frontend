const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = frm.in_data.value;
	const vencimento = new Date();
	const valor = Number(frm.in_valor.value);
	const desconto = 0.2;
	const valorComDesconto = valor - (valor * desconto);

	const partes = data.split("-");
	vencimento.setDate(Number(partes[2]));
	vencimento.setMonth(Number(partes[1]) + 3);
	vencimento.setFullYear(Number(partes[0]));

	const dia = vencimento.getDate();
	const mes = vencimento.getMonth();
	const ano = vencimento.getFullYear();

	
	const diaTratamento1 = dia.toString()
	const diaTratamento2 = diaTratamento1.padStart(2, "0");
	const mesTratamento1 = mes.toString();
	const mesTratamento2 = mesTratamento1.padStart(2, "0")


	resp1.innerText = `Data Limite para pagamento com Desconto: ${diaTratamento2}/${mesTratamento2}/${ano}`;
	resp2.innerText = `Valor com Desconto R$: ${valorComDesconto.toFixed(2)}`
});