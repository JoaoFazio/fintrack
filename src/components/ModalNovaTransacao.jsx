import { useState } from "react";
import "./ModalNovaTransacao.css";

function ModalNovaTransacao({ onFechar, onAdicionarTransacao }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("Entrada");
  const [categoria, setCategoria] = useState("Alimentação");
  const [data, setData] = useState("");

  function salvar() {
    const novaTransacao = {
      id: crypto.randomUUID(),
      descricao,
      valor: parseFloat(valor),
      tipo,
      categoria,
      data,
    };
    onAdicionarTransacao(novaTransacao);
    onFechar();
  }

  return (
    <div className="overlay">
      <div className="card-modal">
        <h1>Nova Transação</h1>
        <p>Valor da Transação</p>
        <input
          type="text"
          placeholder="R$ 0.00"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <div className="overlay-tipo">
          <button
            className={tipo === "Entrada" ? "tipo-btn ativo" : "tipo-btn"}
            onClick={() => setTipo("Entrada")}
          >
            Entrada
          </button>

          <button
            className={tipo === "Saída" ? "tipo-btn ativo" : "tipo-btn"}
            onClick={() => setTipo("Saída")}
          >
            Saída
          </button>
        </div>
        <div className="overlay-descricao">
          <p>Descrição</p>
          <input
            type="text"
            placeholder="Ex: Ifood"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="overlay-dados">
          <div>
            <p>Categoria</p>
            <select
              name="Categoria"
              id=""
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Transporte">Transporte</option>
              <option value="Compras">Compras</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <div>
            <p>Data</p>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
        </div>

        <div className="buttons">
          <button onClick={salvar}>Salvar</button>
          <button onClick={onFechar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalNovaTransacao;
