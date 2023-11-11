import { useState } from 'react';
import User from './components/User';
import UserForm from './components/UserForm';
import styles from './app.module.css';

export default function App(){

  const [userList, setUserList] = useState([]);

  const handleUserSubmit = (event) => {
    event.preventDefault();
    //console.log(event) // objeto com tudo
    const formData = new FormData(event.target); 
    //tira do parameto "event" só o que a gente quer, no caso o target
    //console.log(formData)
    const {name, userName} /* OU const user */= Object.fromEntries(formData);
    // "fromEntries" remete as entradas da parte do usuário: input, botões etc
    // name e userName são o nome do input
    //console.log(name, userName);
    setUserList([...userList, {name, userName}]);
    //este "setUserList" é similar a "userList.push(name,userName)"
    
    }
    //console.log(`Imprimindo userList: ${userList.values}`);
    const removeUserFromList = (userToBeRemoved) =>{
    const newList = userList.filter(user => {
      return userToBeRemoved !== user;
    });
    setUserList(newList);
    }

    return (
    <main className={styles.main}>

      {/*FORMULÁRIO*/}
      <UserForm handleSubmit={ handleUserSubmit } />

      {/*POSTAGENS */}
      <section id="card" className={styles.cardSection}>
        <h2>Usuários</h2>
        <div className={styles.cardContainer}>
          {userList && (
            //map "MAPEIA" todos os objetos da lista que o chamou
            userList.map((mapeiaObjetoDaListaDeUsuarios, index) => {
              return (
                <User 
                key={index} 
                user={mapeiaObjetoDaListaDeUsuarios} 
                removeUserFromList= {() => removeUserFromList(mapeiaObjetoDaListaDeUsuarios)}
                /> 
              )
            })
          )}
        </div>
      </section>
    </main>
    )
}
  // O "user" entra como dado vindo da API
  // Traz objeto como parametro da props declarada na função "User" no arquivo User.jsx
  // O foco é estilizar e fazer o primeiro, depois declarar os demais
  //Esse é o método n feijão -> o map é o automático, mapeia a lista por completo como retorno
  //<User user={listaUsuario[0]} /> 
  //<User user={listaUsuario[1]} />
  //<User user={listaUsuario[2]} /> 