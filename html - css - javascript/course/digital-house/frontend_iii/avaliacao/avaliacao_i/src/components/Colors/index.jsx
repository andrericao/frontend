import { useState } from 'react';
import style from './color.module.css';

export default function Color({ color }){

	const styleDiv = {
		backgroundColor: color.codigoColor
	}

	return (
		<div className={style.card}>
			<div className={style.cardContainer} style={styleDiv}>
				<p>Cor: {color.color}</p>
				<h3>Hexadecimal: {color.codigoColor}</h3>
			</div>
		</div>
	)
}