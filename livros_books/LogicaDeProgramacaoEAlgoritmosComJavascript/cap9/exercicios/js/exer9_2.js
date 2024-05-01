const frm = document.querySelector("form");
let resp = document.querySelector("pre");


const limparLista = () => {
	localStorage.removeItem("listaCompras");
}

const mostrarLista = () => {

	if (!localStorage.getItem("listaCompras")) {
		resp.innerText = "";
		return;
	}

	const produtos = localStorage.getItem("listaCompras").split(";");
	const produtosEmOrdem = produtos.sort();
	let linhas = "";
	for (let i = 0; i < produtosEmOrdem.length; i++){
		linhas += produtosEmOrdem[i] + "\n";
	}
	resp.innerText = linhas;
}

frm.addEventListener("submit", (e) => {	
	e.preventDefault();

	const produto = frm.in_produto.value;
	
	if (localStorage.getItem("listaCompras")) {
		const frutas = localStorage.getItem("listaCompras").split(";");

		if (frutas.includes(produto)) {
			alert("Fruta já existe na lista");
			frm.reset();
			return;
		} else {
			const listaExistente = localStorage.getItem("listaCompras") + ";" + produto;
			localStorage.setItem("listaCompras", listaExistente);
		}
		} else {
		localStorage.setItem("listaCompras", produto);
	}
	mostrarLista();
	frm.reset();
	frm.in_produto.focus();
});

window.addEventListener("load", mostrarLista);
frm.btn_limpar_lista.addEventListener("click", limparLista);