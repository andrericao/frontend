import { useState } from 'react'

export default function App() {
  const [pacientes, setPacientes] = useState([]);
  const [atendido, setAtendido] = useState("");
  const [nome, setNome] = useState("");

  const novoPaciente = (e) => {
    e.preventDefault();
    setPacientes([...pacientes, nome]);
    setNome("");
  };

  const novoUrgente = () => {
    setPacientes([nome, ...pacientes]);
    setNome("");
  };

  const atenderPaciente = () => {
    if (!pacientes.length) {
      alert("Não há pacientes na fila de espera");
      return;
    }

    setAtendido(pacientes[0]);
    setPacientes(pacientes.slice(1));
  };

  return (
    <>
      <h1>Consultório Odontológico</h1>
      <form onSubmit={novoPaciente}>
        <p>
          Paciente:
          <input
            type="text"
            id="in_paciente"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input type="submit" value="Adicionar" />
          <input
            type="button"
            value="Urgência"
            id="btn_urgencia"
            onClick={novoUrgente}
          />
          <input
            type="button"
            value="Atender"
            id="btn_atender"
            onClick={atenderPaciente}
          />
        </p>
      </form>
      <h3>
        Em Atendimento:
        <span className="fonte-azul"> {atendido}</span>
      </h3>
      <pre>
        {pacientes.map(
          (paciente) =>
            pacientes.indexOf(paciente) + 1 + " - " + paciente + "\n"
        )}
      </pre>
    </>
  )
}