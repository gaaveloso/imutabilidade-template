import Garagem from "./Componentes/Garagem";
import { GlobalStyled } from "./globalStyled";
import { useState } from "react";

export default function App() {
  const nome = "Turma";
  const [nomeEstado,setNomeEstado] = useState("Turma Ammal")

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  const mudarNome = () => {
    setNomeEstado("Turma mais divertida!")
  }
  return (
    <div className="App">
      <GlobalStyled />

      <button onClick={mudarNome}>atualizar nome</button>

      <Garagem
      nome={nomeEstado}
      mudarNome = {mudarNome}
      mensagemAprentacao={apresentaGaragem}
      />
    </div>
  );
}
