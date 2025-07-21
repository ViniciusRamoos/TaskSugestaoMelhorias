export default function ListaSugestoes({ sugestoes }) {
  return (
    <div>
      <h2>Lista de Sugestões</h2>
      {sugestoes.length === 0 ? (
        <p>Não existem sugestões no momento.</p>
      ) : (
        <ul>
          {sugestoes.map((sugestao, index) => (
            <li key={index}>
              <strong>{sugestao.nome}</strong> enviada em{" "}
              {new Date(sugestao.data_envio).toLocaleDateString()}:
              <p>{sugestao.descricao}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
