import Products from "./components/Products";
import './app.css';
import { useState } from "react";

const produtos = [
  {
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
];

export default function App(){

  const [info, setInfo] = useState([])

  const addInfo = (nome, acao) => { 
    setInfo((info) => {
      return [...info, { nome, acao }]
  })
}

  return (
    <div>
      <h1>Produtos</h1>

      <div className="lista_de_produtos">
        
        {produtos.map((produto, i) => {
          return <Products key = {i} 
          nome = {produto.nome}
          image = {produto.image}
          preco ={produto.preco}>

            <div className="actButton">

              <button 
              className="adButton button"
              onClick={() => 
              { addInfo(produto.nome, "add") }} >
                Adicionar
                </button>

                <button 
              className="remButton button"
              onClick={() => 
              { addInfo(produto.nome, "rem") }} >
                Remover
                </button>

            </div>

            </Products>
              })}
      </div>

      <h2>STATUS</h2>

      {info.map((informacao, i) => {
        return <p key = {i} > {informacao.nome} - {" "}
        <span className={informacao.acao}>
          {informacao.acao == "add" ? "Adicionado" : "Removido"}
        </span>
        </p>
      })}
    </div>
  );
}