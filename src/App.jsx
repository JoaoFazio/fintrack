import "./App.css";
import ResumoCard from "./components/ResumoCard";
import { useState } from "react";
import Filtros from "./components/Filtros";

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");

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
    </div>
  );
}

export default App;
