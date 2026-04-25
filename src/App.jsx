import "./App.css";
import ResumoCard from "./components/ResumoCard";
import { useState } from "react";
import Filtros from "./components/Filtros";
import ListaTransacoes from "./components/ListaTransacoes/ListaTransacoes";
import ModalNovaTransacao from "./components/ModalNovaTransacao";

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [transacoes, setTransacoes] = useState([
    {
      id: "1",
      descricao: "iFood",
      valor: 45.9,
      tipo: "Saída",
      categoria: "Alimentação",
      data: "2026-04-16",
    },
    {
      id: "2",
      descricao: "Bolsa LabMulti",
      valor: 1200,
      tipo: "Entrada",
      categoria: "Outros",
      data: "2025-04-01",
    },
  ]);

  function adicionarTransacao(novaTransacao) {
    setTransacoes([...transacoes, novaTransacao]);
  }

  const totalEntradas = transacoes
    .filter((t) => t.tipo === "Entrada")
    .reduce((total, t) => total + t.valor, 0);
  const totalSaidas = transacoes
    .filter((t) => t.tipo === "Saída")
    .reduce((total, t) => total + t.valor, 0);
  const saldo = totalEntradas - totalSaidas;

  return (
    <div>
      <div className="cards-container">
        <ResumoCard titulo={"Saldo Atual"} icone={"💰"} valor={saldo} />
        <ResumoCard titulo="Total de Entradas" icone={"📈"} valor={totalEntradas} />
        <ResumoCard titulo="Total de Saídas" icone={"📉"} valor={totalSaidas} />
      </div>

      <div className="filtros">
        <Filtros
          categoriaSelecionada={categoriaSelecionada}
          onCategoriaChange={setCategoriaSelecionada}
        />
      </div>

      <div>
        <ListaTransacoes
          transacoes={transacoes}
          categoriaSelecionada={categoriaSelecionada}
        />
      </div>

      <div>
        <button onClick={() => setModalAberto(true)}>+</button>
        {modalAberto && (
          <ModalNovaTransacao
            onFechar={() => setModalAberto(false)}
            onAdicionarTransacao={adicionarTransacao}
          />
        )}
      </div>
    </div>
  );
}

export default App;
