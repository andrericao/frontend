import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Consultório Ondontológico</h1>
      <form>

        <p>Paciente:
          <input type="text" id="inPaciente" required autoFocus/>
          <input type="submit" value="Adicionar" />
          <input type="button" value="Urgência" id="btnUrgencia" />
          <input type="buuton" value="Atender" is="btnAtender" />

        </p>

      </form>

      <h3>
        Em atendimento:
        <span className="fonte-azul"></span>
      </h3>

      <pre></pre>
    </>
  );
}

