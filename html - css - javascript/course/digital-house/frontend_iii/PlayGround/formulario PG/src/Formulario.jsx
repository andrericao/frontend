import { useState } from "react";

export function Formulario(){

  // Criamos um estado para cada input do formulário
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');

  // Criamos um manipulador de eventos para cada um dos inputs
	const handleNameChange = (e) => setUserName(e.target.value);
	const handlePasswordChange = (e) => setUserPassword(e.target.value);

  // Criamos o manipulador para o evento onSubmit
	const onSubimitForm = (e) => {

    // Evitamos que a página seja recarregada
    // prevendo o comportamento por
    // padrão
    e.preventDefault();

    // No momento, só exibiremos o nome de usuário
    console.log(userName + userPassword);
	}

	return (
    <div className="App">

    <h3>Login</h3>
	
    {/* Passamos o nosso manipulador para o evento onSubmit */}
    <form onSubmit={onSubimitForm}>

        {/*
        Criamos dois inputs controlados
        passando o estado como value e o manipulador
        para o evento onChange
       */}

        <input
        type="text"
        placeholder="Nome de usuário"
        value={userName}
        onChange={handleNameChange}
        />
        <input
        type="password"
        placeholder="Senha"
        value={userPassword}
        onChange={handlePasswordChange}
        />
        {/* 
        Através do type, nos certificamos de que
        o evento onSubmit seja disparado ao clicar
        no botão
        */}
        <button type="submit">Enviar</button>
    </form>
    </div>
	)
}