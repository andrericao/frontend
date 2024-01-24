const frm = document.querySelector("form");
const resp = document.querySelector("h3");

const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

frm.addEventListener("submit", (e) => {
	e.preventDefault();

	const dataVenc = frm.in_data_venc.value;
	const valor = Number(frm.in_valor.value);
	const hoje = new Date()
	const vencto = new Date();

	const partes = dataVenc.split("-"); // data formato aaa-mm-dd
	vencto.setDate(Number(partes[2]));
	vencto.setMonth(Number(partes[1]) - 1);
	vencto.setFullYear(Number(partes[0]));


	const atraso = hoje - vencto // calcula diferença entre os dias entre datas (em ms)
	let multa = 0;
	let juros = 0;

	if (atraso > 0) { // se conta estiver em atraso
		// converte ms do atraso em dias (1 dia = 24h x 60min x 60 seg x 1000ms: 86_400_000)
		const dias = atraso / 86_400_000;
		multa = valor * TAXA_MULTA;
		juros = valor * TAXA_JUROS * dias;

		const total = valor + multa + juros

		frm.out_multa.value = multa.toFixed(2);
		frm.out_juros.value = juros.toFixed(2);
		frm.out_total.value = total.toFixed(2)
	}
})