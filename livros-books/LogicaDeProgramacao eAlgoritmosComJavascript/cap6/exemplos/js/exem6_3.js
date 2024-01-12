const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const modelo = frm.in_modelo.value;
	const preco = Number(frm.in_preco.value);
	carros.push({modelo, preco}); // adiciona dados ao vetor
	frm.in_modelo.value = "";
	frm.in_preco.value = "";

	frm.in_modelo.focus();

	frm.btn_listar.dispatchEvent(new Event("click"));
})