import "./App.css";
import ResumoCard from "./components/ResumoCard";
import { useState } from "react";
import Filtros from "./components/Filtros";
import ListaTransacoes from "./components/ListaTransacoes/ListaTransacoes";

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [transacoes, setTransacoes] = useState([
    {
      id: "1",
      descricao: "iFood",
      valor: 45.9,
      tipo: "saida",
      categoria: "Alimentação",
      data: "2026-04-16",
    },
    {
      id: "2",
      descricao: "Bolsa LabMulti",
      valor: 1200,
      tipo: "entrada",
      categoria: "Outros",
      data: "2025-04-01",
    },
  ]);

  return (
    <div>
      <div className="cards-container">
        <ResumoCard titulo={"Saldo Atual"} icone={"💰"} valor={12450} />
        <ResumoCard titulo="Total de Entradas" icone={"📈"} valor={562450} />
        <ResumoCard titulo="Total de Saídas" icone={"📉"} valor={12450} />
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
    </div>
  );
}

export default App;
