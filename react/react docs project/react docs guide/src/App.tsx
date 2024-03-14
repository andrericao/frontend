function Saudacao({ nome }: { nome: string }){
  return (
    <h1>Olá {nome}!</h1>
  );
}

export default function App(){
  return  (
    <>
      <Saudacao nome = "mundo" />
    </>
  );
}