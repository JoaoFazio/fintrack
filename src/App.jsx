import "./App.css";
import ResumoCard from "./components/ResumoCard";
import Filtros from "./components/Filtros";
import ListaTransacoes from "./components/ListaTransacoes/ListaTransacoes";
import ModalNovaTransacao from "./components/ModalNovaTransacao";
import { useState, useEffect } from "react";

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [transacoes, setTransacoes] = useState(() => {
    const salvo = localStorage.getItem("transacoes");
    return salvo ? JSON.parse(salvo) : [];
  });

  function adicionarTransacao(novaTransacao) {
    setTransacoes([...transacoes, novaTransacao]);
  }

  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

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
        <ResumoCard
          titulo="Total de Entradas"
          icone={"📈"}
          valor={totalEntradas}
        />
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
        <button className="btn-adicionar" onClick={() => setModalAberto(true)}>+</button>
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
