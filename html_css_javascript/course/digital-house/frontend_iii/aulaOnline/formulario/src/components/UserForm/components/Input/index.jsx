import style from './input.module.css';

export function Input(props){
	return(
		//os dados do input serão as props
		<input {...props} //spread-operator traz apenas os valores do objeto
		className={style.input}
		/>
	)
}