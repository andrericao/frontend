//import { useState } from 'react'
import React from 'react'
import './App.css';
import Cabecalho from './components/Cabecalho'
import Irmaos from './components/Irmaos';

export default function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho titulo = "Exercicio João e Maria"/>
      <Irmaos nome="João"/>
      <Irmaos nome="Maria"/>
    </>
  )
}