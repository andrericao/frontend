const frm = document.querySelector("form");
const respTitulo = document.querySelector("h4");
const respValores = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

	const medicamento = frm.inMedicamento.value;
	const preco = Number(frm.inPreco.value);
	
	const promocao = preco * 2;
	const promocaoArredondada = Math.floor(promocao);

	respTitulo.innerText = `Promoção de ${medicamento}`;
	respValores.innerText = `Leve 2 por apenas ${promocaoArredondada.toFixed(2)}`;

	e.preventDefault();
})