import { useState } from 'react';
import style from './app.module.css';
import Form from './components/Form';
import Color from './components/Colors';

export default function App() {
  const [userList, setUserList] = useState([]);

  const handleColorSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); 
    const {color, codigoColor} = Object.fromEntries(formData);
    setUserList([...userList, {color, codigoColor}]);
    }

  return (
    <main className={style.main}>
        <Form handleSubmit={ handleColorSubmit } />

        <h2>CORES ESCOLHIDAS</h2>
        
      <section id="card" className={style.cardSection}>
        <div className={style.cardContainer}>
          {userList && (
            userList.map((color, index) => {
              return (
                <Color 
                key={index} 
                color={color}
                /> 
              )
            })
          )}
        </div>
      </section>

    </main>
  )
}