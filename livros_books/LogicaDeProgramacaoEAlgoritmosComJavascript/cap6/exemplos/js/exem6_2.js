const frm = document.querySelector("form");
const respErros = document.querySelector("#out_erros");
const respChances = document.querySelector("#out_chances");
const respDica  = document.querySelector("#out_dica");

const erros = [];
const sorteado = Math.floor(Math.random() * 100) + 1; // numero aleatório entre 1 e 100
const CHANCES = 6;

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const numero = Number(frm.in_numero.value);
	if(numero == sorteado) { // se acertou
			respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
			frm.btn_submit.disabled = true;
			frm.btn_novamente.className = "exibe";
	} else {
		if(erros.includes(numero)){
			alert(`Você já apostou o número ${numero}. Tente outro!`);
		} else {
			erros.push(numero); // adiciona número ao vetor
			const numErros = erros.length;
			const numChances = CHANCES - numErros // calcula número de chances

			// exibe número de erros, conteúdo do vetor e n° de chances
			respErros.innerText = `${numErros} (${erros.join(", ")})`;
			respChances.innerText = numChances;

			if(numChances == 0){
				alert("Suas chances acabaram!");
				frm.btn_submit.disabled = true;
				frm.btn_novamente.className ="exibe";
				respDica.innerText = `Game Over! Número sorteado: ${sorteado}`;
			} else {
				// usa operador ternário para mensagem da dica
				const dica = numero < sorteado ? "maior" : "menor";
				respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
			}
		}
	}
	frm.in_numero.value = "";
	frm.in_numero.focus();
})

frm.btn_novamente.addEventListener("click", () => {
	location.reload();
})