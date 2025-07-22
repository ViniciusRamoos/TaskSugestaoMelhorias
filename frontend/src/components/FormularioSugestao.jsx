import { useState } from "react";

export default function FormularioSugestao({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nome.trim() && descricao.trim()) {
      await aoEnviar({ nome, descricao });
      setNome("");
      setDescricao("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulário de Sugestões</h2>
      <div>
        <label>Nome:</label>
        <br />
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descrição:</label>
        <br />
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
