import { useTransactions } from "../context/TransactionContext";
import { CATEGORIES } from "../constants/categories";
import { useState } from "react";

function Modal() {
  const { isModalOpen, setIsModalOpen } = useTransactions();
  const [type, setType] = useState("income");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [catId, setCatId] = useState(null);
  const listCategories = CATEGORIES.map((category) => (
    <button
      className={`p-2 rounded-lg ${catId === category.id ? "bg-surface-hi text-t1" : "text-t2"}`}
      key={category.id}
      value={category.id}
      onClick={(e) => setCatId(e.target.value)}
    >
      {category.name} {category.emoji}
    </button>
  ));

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-surface p-6 rounded-lg flex flex-col gap-3 min-w-96"
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
        <div className="flex flex-wrap gap-2">
          {type === "expense" && listCategories}
        </div>
      </div>
    </div>
  );
}

export default Modal;
