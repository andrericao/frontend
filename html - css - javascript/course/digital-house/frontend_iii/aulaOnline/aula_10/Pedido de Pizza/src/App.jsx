import { useState } from 'react'
import {Pizza} from './components/Pizza'
import './App.css'

export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <h1>Seu pedido: </h1>
    {toggle && <Pizza />}
    <button onClick={() => setToggle(!toggle)}>
      {toggle ? "Cancelar" : "Enviar"} Pedido
    </button>
    </>
  )
}