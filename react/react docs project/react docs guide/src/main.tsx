import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
//import Galeria1 from './1_primeiroComponent/Galeria1.tsx'
//import Galeria2 from './2_importExport/Galeria2.tsx'
import Todolist from './4_tsEntreChaves/TsEntreChaves'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>,
)
