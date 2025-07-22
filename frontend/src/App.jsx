import { useEffect, useState } from "react";
import FormularioSugestao from "./components/FormularioSugestao";
import ListaSugestoes from "./components/ListaSugestoes";

function App() {
  const [sugestoes, setSugestoes] = useState([]);

  const carregarSugestoes = async () => {
    try {
      const resposta = await fetch("http://localhost:8069/api/sugestoes");
      const dados = await resposta.json();
      setSugestoes(dados);
    } catch (erro) {
      console.error("Erro ao carregar sugestões:", erro);
    }
  };

  const adicionarSugestao = async (sugestao) => {
    try {
      const resposta = await fetch("http://localhost:8069/api/sugestoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sugestao),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao adicionar sugestão");
      }

      await carregarSugestoes();
    } catch (erro) {
      console.error("Erro ao adicionar sugestão:", erro);
    }
  };

  useEffect(() => {
    carregarSugestoes();
  }, []);

  return (
    <div className="app-container">
      <h1>Sugestões de Melhorias</h1>
      <FormularioSugestao aoEnviar={adicionarSugestao}></FormularioSugestao>
      <ListaSugestoes sugestoes={sugestoes}></ListaSugestoes>
    </div>
  );
}

export default App;
