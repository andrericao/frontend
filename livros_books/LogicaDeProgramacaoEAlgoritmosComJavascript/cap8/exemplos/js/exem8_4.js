const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const itens = [];

frm.rb_pizza.addEventListener("click", () => {
	frm.in_bebida.className = "oculta";
	frm.in_pizza.className = "exibe";
});

frm.rb_bebida.addEventListener("click", () => {
	frm.in_pizza.className = "oculta";
	frm.in_bebida.className = "exibe";
});

frm.in_detalhes.addEventListener("focus", () => {
	if (frm.rb_pizza.checked) {
		const pizza = frm.in_pizza.value;
		const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
		frm.in_detalhes.placeholder =  `Até ${num} sabores!`
	}
});

frm.in_detalhes.addEventListener("blur", () => {
	frm.in_detalhes.placeholder = "";
});

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	let produto;

	if (frm.rb_pizza.checked) {
		const num = frm.in_bebida.selectedIndex;
		produto = frm.in_pizza.options[num].text;
	} else {
		const num = frm.in_bebida.selectedIndex;
		produto = frm.in_bebida.options[num].text;
	}

	const detalhes = frm.in_detalhes.value;
	itens.push(produto + " (" + detalhes + ")");
	resp.innerText = itens.join("\n");

	frm.reset();
	frm.rb_pizza.dispatchEvent(new Event("click"));
});