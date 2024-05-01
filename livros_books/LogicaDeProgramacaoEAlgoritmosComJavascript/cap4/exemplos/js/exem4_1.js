const frm = document.querySelector("form");
const respMedia = document.querySelector("h3");
const saudacao = document.querySelector("h4");

frm.addEventListener('submit', (e) => {
	e.preventDefault();

	const nomeAluno = frm.in_nome.value;
	const notaUm = Number(frm.in_primeira_nota.value);
	const notaDois = Number(frm.in_segunda_nota.value);

	const media = (notaUm + notaDois) / 2;

	respMedia.innerText = `Médias das notas ${media.toFixed(2)}`;

	if(media >= 7) {
		saudacao.innerText = `Parabéns ${nomeAluno}! Você foi aprovado(a)`
		saudacao.style.color = "green";
	} else if (media >= 4){
		saudacao.innerText = `Atenção ${nomeAluno}! Você está em recuperação.`;
		saudacao.style.color = "orange";
	} else {
		saudacao.innerText = `Ops ${nomeAluno}... Você foi reprovado(a)!`;
		saudacao.style.color = "red";
	}
})