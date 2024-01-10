const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = frm.in_paciente.value;
	pacientes.push(nome);

	let lista = "";

	// for "tradicional" (inicia em 0, enquanto menor que o tamanho do array)
	for(let i = 0; i < pacientes.length; i++){
		lista += `${i + 1} - ${pacientes[i]} \n`;
	}

	respLista.innerText = lista;
	frm.in_paciente.value = "";
	frm.in_paciente.focus();
})


// Adiciona um "ouvinte" para o evento click no btn_urgencia que esta no form
frm.btn_urgencia.addEventListener("click", () => {
	// verifica se as validações do form estão ok (no caso, paciente is required)
	if(!frm.checkValidity()){
		alert("Informe o nome do paciente a ser atendido em caráter de urgência");
		frm.in_paciente.focus();
		return;
	}

	const nome = frm.in_paciente.value;
	pacientes.unshift(nome); // adiciona paciente no início do vetor
	let lista = "";

	// forEach aplicado sobre o array pacientes
	pacientes.forEach((paciente, i) => (lista += `${i + 1} - ${paciente} \n`));
	respLista.innerText = lista;
	frm.in_paciente.value = "";
	frm.in_paciente.focus();
	return;
})

frm.btn_atender.addEventListener("click", () => {
	// se tamanho do vetor = 0
	if(pacientes.length == 0){
		alert("Não há pacientes na lista de espera");
		frm.in_paciente.focus();
		return;
	}

	const atender = pacientes.shift(); // remove paciente do início da fila e obtém o nome
	respNome.innerText = atender;
	let lista = "";
	pacientes.forEach((paciente, i) => (lista += `${i + 1} - ${paciente} \n`));
	respLista.innerText = lista;
})