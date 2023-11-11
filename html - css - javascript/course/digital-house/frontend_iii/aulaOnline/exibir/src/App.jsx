import { useState } from 'react';
import PerfilGithub from "./components/PerfilGithub";

export default function App() {

  const [exibirPerfil, setExibirPerfil] = useState(false);

  const alternarVisibilidade = () => {
    setExibirPerfil((valorAnterior) => !valorAnterior);
  }

  return (
    <>
      <button onClick={alternarVisibilidade}>
        {exibirPerfil ? 'Esconder' : 'Exibir'} Perfil
      </button>
      {exibirPerfil && (<PerfilGithub />)}
    </>
  )
}