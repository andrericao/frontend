import User from './components/User';
import styles from './app.module.css';

// Lista que simula a API
const listaUsuario = [
  {
    userName: 'André',
    image: 'https://www.github.com/andrericao.png'
  },
  {
    UserName: 'Renan',
    image: 'https://github.com/lmaoclost.png'
  },
  {
    UserName: 'Deyse',
    image: 'https://github.com/deysebonisegnia.png'
  },
  {
    userName: 'Cauê',
    image: "https://github.com/cauesooouza.png"
  },
  {
    userName: 'Débora',
    image: 'https://github.com/debora-borges.png'
  },
  {
    userName: 'Izabela',
    image: 'https://github.com/Belorzye.png'
  },
  {
    userName: 'Izabela',
    image: 'https://github.com/Belorzye.png'
  }
]

export default function App(){
    return (
    <main className={styles.main}>
      <section id="card" className={styles.cardSection}>
        <h2>Usuários</h2>
        <div className={styles.cardContainer}>
          {listaUsuario && (
            //map "MAPEIA" todos os objetos da lista que o chamou
            listaUsuario.map((mapeiaObjetoDaListaDeUsuarios, index) => {
              return (
                <User key={index} user={mapeiaObjetoDaListaDeUsuarios} /> 
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