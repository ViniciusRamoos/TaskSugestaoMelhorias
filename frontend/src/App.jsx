import { useState } from "react";
import FormularioSugestao from "./components/FormularioSugestao";
import ListaSugestoes from "./components/ListaSugestoes";

function App() {
  const [sugestoes, setSugestoes] = useState([]);
  const adicionarSugestao = (sugestao) => {
    setSugestoes([sugestao, ...sugestoes]);
  };

  return (
    <div className="app-container">
      <h1>Sugestões de Melhorias</h1>
      <FormularioSugestao aoEnviar={adicionarSugestao}></FormularioSugestao>
      <ListaSugestoes sugestoes={sugestoes}></ListaSugestoes>
    </div>
  );
}

export default App;
