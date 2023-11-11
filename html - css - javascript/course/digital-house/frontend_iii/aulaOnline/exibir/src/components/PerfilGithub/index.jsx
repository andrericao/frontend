import { useEffect } from "react";

export default function PerfilGithub(){
	
	useEffect(() => {//useEffect é similar ao -> window.onload <-
		alert('entrou na tela');
	}, [])
	
	return (
		<div>	
			<h1>Olá :) </h1>
		</div>
	)
}