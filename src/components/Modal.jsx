import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

function Modal() {
  const { isModalOpen, setIsModalOpen } = useTransactions();
  const [type, setType] = useState("income");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-surface p-6 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setIsModalOpen(false)}>X</button>

        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Descrição"
        ></input>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="R$"
        ></input>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        ></input>
        <button
          value="income"
          onClick={(e) => setType(e.target.value)}
          className={`p-2 rounded-2xl ${type === "income" ? "bg-accent text-t1" : "text-t2"}`}
        >
          Receita
        </button>
        <button
          value="expense"
          onClick={(e) => setType(e.target.value)}
          className={`p-2 rounded-2xl ${type === "expense" ? "bg-expense text-t1" : "text-t2"}`}
        >
          Despesa
        </button>
      </div>
    </div>
  );
}

export default Modal;
