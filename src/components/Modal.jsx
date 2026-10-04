import { useTransactions } from "../context/TransactionContext";
import { CATEGORIES } from "../constants/categories";
import { useState } from "react";

function Modal() {
  const { isModalOpen, setIsModalOpen, dispatch } = useTransactions();
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

  function handlesubmit(e) {
    e.preventDefault();

    const transaction = {
      id: Date.now().toString(),
      type,
      desc,
      amount: Number(amount),
      date,
      catId,
    };

    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

    setIsModalOpen(false);
  }

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-surface rounded-xl p-6 w-full max-w-md flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-t1 font-bold text-lg">Nova transação</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-t2 hover:text-t1 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex gap-2">
          <button
            value="income"
            onClick={(e) => setType(e.target.value)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${type === "income" ? "bg-income text-bg" : "bg-surface-hi text-t2"}`}
          >
            Receita
          </button>
          <button
            value="expense"
            onClick={(e) => setType(e.target.value)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${type === "expense" ? "bg-expense text-bg" : "bg-surface-hi text-t2"}`}
          >
            Despesa
          </button>
        </div>

        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Descrição"
          className="bg-surface-hi text-t1 placeholder-t2 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-accent"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Valor (R$)"
          className="bg-surface-hi text-t1 placeholder-t2 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-accent"
        />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          className="bg-surface-hi text-t1 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-accent"
        />

        {type === "expense" && (
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                value={category.id}
                onClick={(e) => setCatId(e.target.value)}
                className={`px-3 py-1 rounded-lg text-xs transition-colors ${catId === category.id ? "bg-surface-hi text-t1 ring-1 ring-accent" : "bg-surface-hi text-t2"}`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={handlesubmit}
          className="bg-accent text-bg font-bold py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default Modal;
