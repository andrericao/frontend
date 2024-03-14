const personagem = {
	nome: 'Gregorio Y. Zara',
	tema: {
		backgroundColor: 'black',
		color: 'pink'
	}
};

export default function Todolist(){
	return (
		<div style={personagem.tema}>
			<h1>A Fazeres de {personagem.nome}</h1>
			<img 
			src="https://i.imgur.com/7vQD0fPs.jpg"
			alt="Gregorio Y. Zara" />

			<ul>
				<li>Melhorar Telefone</li>
				<li>Preparar Palestras sobre Aeronáutica</li>
				<li>Trabalhar no motor movido a alcool</li>
			</ul>
		</div>
	)
}