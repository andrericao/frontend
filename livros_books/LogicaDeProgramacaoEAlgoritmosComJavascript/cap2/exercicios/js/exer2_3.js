const frm = document.querySelector("form");
const resp1 = document.getElementById("output1");
const resp2 = document.getElementById("output2");

frm.addEventListener("submit", (e) => {

	const produtoRef = frm.inProduto.value;
	const precoRef = frm.inPreco.value;

	const valorProduto3 = precoRef * 3;
	const valorProdutoMetade = precoRef / 2;
	const valorTotalPromocao = valorProduto3 - valorProdutoMetade;

	resp1.innerText = `${produtoRef} - Promoção: Leve 3 por R$: ${valorTotalPromocao.toFixed(2)}`;

	resp2.innerText = `O 3° produto custa apenas R$: ${valorProdutoMetade.toFixed(2)}`;

	e.preventDefault();

})