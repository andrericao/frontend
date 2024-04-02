const frm = document.querySelector("form");
const servPendentes = document.querySelector("h4");
const emExecucao = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const servico = frm.in_servico.value;

	if (localStorage.getItem("listaServicos")) {

		const servicos = localStorage.getItem("listaServicos").split(';');

		if (servicos.includes(servico)) {
			alert("Serviço já incluso na lista!");
			frm.reset();
			return;
		} else {
			const listaServicos = localStorage.getItem("listaServicos") + ";" + servico;
			localStorage.setItem("listaServicos", listaServicos);
		}
	} else {
		localStorage.setItem("listaServicos", servico);
	}

	mostrarServicos();
	frm.reset();
	frm.in_servico.focus();
});

const mostrarServicos = () => {
	
	if (!localStorage.getItem("listaServicos")) {
		emExecucao.innerText = "Sem serviço no momento";
		servPendentes.innerText = `Serviços Pendentes: 0`;
		return;
	} else {
		let servicoSeparado = localStorage.getItem("listaServicos").split(";");
		servPendentes.innerText = `Serviços Pendentes: ${servicoSeparado.length - 1}`;
		emExecucao.innerText = servicoSeparado[0];
	}
};

frm.btn_executar.addEventListener("click", () => {
	if (!localStorage.getItem("listaServicos")) {
		alert("Não existe serviço a ser executado!");
		return;
	}

	let servicoSeparado = localStorage.getItem("listaServicos").split(";");
	
	servicoSeparado.shift();

	localStorage.setItem("listaServicos", servicoSeparado.join(";"));
	mostrarServicos();
});

window.addEventListener("load", mostrarServicos);