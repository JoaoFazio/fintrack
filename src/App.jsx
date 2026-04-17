import "./App.css";
import ResumoCard from "./components/ResumoCard";

function App() {
  return (
    <div className="cards-container">
      <ResumoCard titulo={"Saldo Atual"} icone={"💰"} valor={12450} />
      <ResumoCard titulo="Total de Entradas" icone={"📈"} valor={562450} />
      <ResumoCard titulo="Total de Saídas" icone={"📉"} valor={12450} />
      
    </div>
  );
}

export default App;
