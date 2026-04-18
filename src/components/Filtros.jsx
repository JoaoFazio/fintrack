import "./Filtros.css";

function Filtros({ onCategoriaChange, categoriaSelecionada }) {
  const botoes = [
    "Todos",
    "Alimentação",
    "Lazer",
    "Transporte",
    "Compras",
    "Outros",
  ];

  return (
    <div>
      {botoes.map((botao) => (
        <button
          key={botao}
          className={
            botao === categoriaSelecionada ? "filtro-btn ativo" : "filtro-btn"
          }
          onClick={() => onCategoriaChange(botao)}
        >
          {botao}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
