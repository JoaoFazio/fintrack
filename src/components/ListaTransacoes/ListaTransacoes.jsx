import "./ListaTransacoes.css"

import ItemTransacao from "./ItemTransacao"

function ListaTransacoes ({transacoes, categoriaSelecionada}) {
    const transacoesFiltradas = categoriaSelecionada === "Todos" 
    ? transacoes 
    : transacoes.filter(t => t.categoria === categoriaSelecionada)
    
    return (
        <div className="lista-transacoes">
            <h2 className="lista-titulo">Atividade Recente</h2>
            {transacoesFiltradas.map((t) => <ItemTransacao key={t.id} transacao={t}/>)}
        </div>
    )
}

export default ListaTransacoes  