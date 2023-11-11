import React from "react";
import { ReactDOM } from "react";
import styles from './cabecalho.module.css';

export default function Cabecalho(props){
	return (
		<>
			<h1 className={styles.cabecalho}>{props.titulo}</h1>
		</>
	)
}