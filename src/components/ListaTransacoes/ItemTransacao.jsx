function ItemTransacao ({transacao}) {
    return (
        <div className="item-transacao">
            <span>{transacao.descricao}</span>
            <span>{"💸"}</span>
            <div>
                <p>{transacao.data}</p>
                <p>{transacao.categoria}</p>
            </div>
            <p>{transacao.valor}</p>
        </div>
    )
}

export default ItemTransacao