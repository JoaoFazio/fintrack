import "./ResumoCard.css";

function ResumoCard({ titulo, valor, icone, corIcone }) {
  return (
    <div className="resumo-card">
      <span className="card-icone" style={{ backgroundColor: corIcone }}>
        {icone}
      </span>
      <h2 className="card-titulo">{titulo}</h2>
      <h1 className="card-saldo">
        {valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </h1>
    </div>
  );
}

export default ResumoCard;
