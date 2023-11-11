import { useState } from "react";

export default function MeuForm(){
	const [userName, setUserName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefalt();

		setUserName('');
	}

	const handleuserNameChange = (e) => {
		setUserName(e.target.value);
	}

	return(
		<form onSubmit={handleSubmit}>
			<label htmlFor="">Name</label>
			<input type="text" placeholder="Digite seu nome"/>
			<button type="submit">enviar</button>
		</form>
	)
}