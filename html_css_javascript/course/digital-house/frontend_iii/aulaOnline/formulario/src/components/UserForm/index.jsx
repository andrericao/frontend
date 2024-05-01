import { useState } from 'react';
import { Input } from './components/Input';

export default function UserForm({ handleSubmit }){

	const [nome, setNome] = useState('');
	const [nomeError, setNomeError] = useState('');


	const handleNameChange = (value) => {
		if(value.length < 3){
			setNomeError('Nome deve ter no mínimo 3 letras');
		}
		if(value.length > 8) {
			setNomeError('Nome deve ter no máximo 8 letras');
		}
		setNome(value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h3>Adicionar Usuário</h3>
			<Input type="text" 
				name="name" 
				id="name" 
				//value={nome} 
				//onChange={(event) => handleNameChange(event.target.value)} 
				placeholder="Digite seu nome" 
				//<span>{nomeError}</span> => esta de linha HTML é fora do componente "Input"
			/>
			<Input type="text" 
				name="userName" 
				id="userNname" 
				placeholder="Digite seu username" 
			/>
			<button type="submit">Adicionar</button>
		</form>
	)
}