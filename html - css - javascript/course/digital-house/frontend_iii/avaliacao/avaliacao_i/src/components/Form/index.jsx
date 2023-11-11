import { useState } from "react";
import { Input } from './components/Input';
import style from './form.module.css';

export default function Form({handleSubmit}){

	const [color, setColor] = useState('');
	const [codigoColor, setCodigoColor] = useState('');

	const [nameColorError, setNameColorError] = useState('');
	const [hexadecimalColorError, setHexadecimalColorError] = useState('');

	const handleColorNameChange = (value) => {
		if(value.length <= 3){
			
			setNameColorError('Nome deve ter no mínimo 3 letras');
		}
		if (value.length >= 3 && value.lenght <= 15){
			setNameColorError('');
		}
		if(value.length > 15) {
			setNameColorError('Nome deve ter no máximo 15 letras');
		}
		setColor(value);
	}

	const handleCodigoColorNameChange = (value) => {
		if(value.length !== 7){
			setHexadecimalColorError('Favor inserir "#" mais o código da cor');
		}
		if(value.lenght == 7){
			setHexadecimalColorError('');
		}
		setCodigoColor(value);
	}

	return (

		<form className={style.form} onSubmit={handleSubmit}>
			<div className={style.formDiv}>
				<h3>ADICIONAR COR</h3>
				<Input type="text" 
					name="color" 
					id="color" 
					value={color} 
					onChange={(event) => handleColorNameChange(event.target.value)} 
					placeholder="Digite a cor" 
				/>
				<span>{nameColorError}</span>
				<Input type="text" 
					name="codigoColor" 
					id="codigoColor" 
					placeholder="Digite o hexadecimal da cor" 
					value={codigoColor} 
					onChange={(event) => handleCodigoColorNameChange(event.target.value)} 
				/>
				<span>{hexadecimalColorError}</span>
			
				<button className={style.button} type="submit">Adicionar</button>
			</div>
		</form>
	)
}