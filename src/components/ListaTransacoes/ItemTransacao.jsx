import "./ItemTransacao.css";

function ItemTransacao({ transacao }) {
  return (
    <div className="item-transacao">
      <div className="item-esquerda">
        <span>{"💸"}</span>
        <div className="item-info">
          <p>{transacao.descricao}</p>
          <p>
            {transacao.data} • {transacao.categoria}
          </p>
        </div>
      </div>
      <p
        className={
          transacao.tipo === "Entrada"
            ? "item-valor entrada"
            : "item-valor saida"
        }
      >
        {transacao.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
}

export default ItemTransacao;
