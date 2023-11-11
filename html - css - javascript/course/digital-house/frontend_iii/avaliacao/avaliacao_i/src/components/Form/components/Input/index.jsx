import style from './input.module.css';

export function Input(props){

	return (
		<input {...props}
		className={style.input}
		/>
	);
}