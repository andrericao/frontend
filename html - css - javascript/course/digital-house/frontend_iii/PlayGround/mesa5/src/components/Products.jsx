import style from './products.module.css'

export default function Products({nome, image, preco, children}){
	return (
		<div className={style.card}>
			<h2>{nome}</h2>
			<img src={image}/>	
			<h3>{preco}</h3>
			{children}
		</div>
	)
}