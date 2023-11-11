import { useState } from 'react';
import { Users } from './Users'

export default function App(){

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && <Users />}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Ocultar" : "Mostrar"} Lista
      </button>
    </>
  );
}