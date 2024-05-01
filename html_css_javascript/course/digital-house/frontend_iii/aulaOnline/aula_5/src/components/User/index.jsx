import { useState } from 'react';
import style from './user.module.css';

export default function User({ user }){

	const [likeAmount, setLikeAmount] = useState(0);

	const updateLikeAmount = (likeOption) => {
		//SEMPRE CHAME O USESTATE NO FINAL DA FUNÇÃO
		if(likeOption == 'down' && likeAmount -1 >= 0){
			setLikeAmount((likeAmount) => likeAmount -1)
		}
		if(likeOption == 'up'){
			setLikeAmount((likeAmount) => likeAmount +1)
		}
		console.log("Primeiro console. O valor só será atualizado depois do término da finção \n Por isso exibe o valor do estade antigo: " + likeAmount);
	}

	console.log("Console fora da função. O valor foi atualizado no mesmo click: " + likeAmount);
	
	// O javascript desestrutura a props procurando o nome que está declarada como paramêtro
	// no caso o "user", ou seja "props.user""
	//poderia ser User(props), porém trouxemos o objeto diretamente, atenção as "{}".
	return (
		<div className={style.card}>
			<div className={style.imageContainer}>
				<img className={style.cardUserImage} src={user.image} alt={`Imagem de perfil do usuário ${user.userName}`} />
			</div>
				<h3>
				Oi eu sou {user.userName} e tenho {likeAmount} like{likeAmount > 1 ? "s" : ''}</h3>
			

			<div className={style.buttonContainer}>
				<button className={`${style.button} ${style.likeButton}`} onClick={() => updateLikeAmount('up')}>
					Like 👍
				</button>
				<button className={`${style.button} ${style.disLikeButton}`}
				onClick={() => updateLikeAmount('down')}>
					Dislike 👎
				</button>
			</div>
		</div>
	)
}