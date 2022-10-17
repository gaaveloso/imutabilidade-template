import Carro from "./Carro";
import { Button, EstilizacaoDaGaragem } from "./styledGaragem";
import {useState} from 'react'

function Garagem(props) {

  const [automovel1, setAutomovel1] = useState({
    cor: "azul",
    ano: 2030,
    flex: "as vezes"
  })

  const [automovel2, setAutomovel2] = useState({
    cor: "verde",
    ano: 2050,
    flex: "sempre"
  })

  const mudarAutomovel1 = () => {
    setAutomovel1({
      cor: "rosa",
      ano: "2031",
      flex: "sempre"
    })
  } 

  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <Carro
        adicionadoPor={props.nome}
        cor={automovel1.cor}
        ano={automovel1.ano}
        flex={automovel1.flex}
      />
      <Button onClick={mudarAutomovel1}>Mudar Carro</Button>
      <Carro
        adicionadoPor={props.nome}
        cor={automovel2.cor}
        ano={automovel2.ano}
        flex={automovel2.flex}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Amarelo"}
        ano={2009}
        flex={"false"}
      />
      <Carro 
        adicionadoPor={props.nome}
        cor={"Rosa"}
        ano={2022}
        flex={"true"}
      />
    </EstilizacaoDaGaragem>
  );
}

export default Garagem;
