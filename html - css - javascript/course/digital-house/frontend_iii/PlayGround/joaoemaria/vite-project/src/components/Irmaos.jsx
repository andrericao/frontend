import React from "react";
import styles from './irmaos.module.css';

export default function Irmaos(props){
	return (
		<>
			<p className={styles.p}>Hello {props.nome}</p>
		</>
	)
}