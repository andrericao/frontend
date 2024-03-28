const frm = document.querySelector("form");
let resp = document.querySelector("pre");
let lista = [];

const adicionar = () => {

	const produto = frm.in_produto.value;

		if (!lista.includes(produto)) {
			lista.push(produto);
		} else {
			alert("produto já incluso na lista!")
		}
}


const limparLista = () => {
	lista = [];
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
		const listaExistente = localStorage.getItem("listaCompras") + ";" + produto;
		localStorage.setItem("listaCompras", listaExistente);
	} else {
		localStorage.setItem("listaCompras", produto);
	}
	mostrarLista();
	frm.reset();
	frm.in_produto.focus();
});

window.addEventListener("load", mostrarLista);
frm.btn_adicionar.addEventListener("click", adicionar);
frm.btn_limpar_lista.addEventListener("click", limparLista);