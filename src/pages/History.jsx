import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import TransactionItem from "../components/TransactionItem";
import { useTransactions } from "../context/TransactionContext";

export default function History() {
  const [month, setMonth] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const listCategories = CATEGORIES.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ));
  const { transactions } = useTransactions();
  const filtered = transactions
    .filter((t) => month === "" || t.date.startsWith(month))
    .filter((t) => category === "" || t.catId === category)
    .filter((t) => type === "" || t.type === type);

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-t1 text-2xl font-bold mb-6">Histórico</h1>

      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="bg-surface-hi text-t1 text-sm rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">Todos os meses</option>
          <option value="2026-10">Outubro 2026</option>
          <option value="2026-09">Setembro 2026</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-surface-hi text-t1 text-sm rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">Todas as categorias</option>
          {listCategories}
        </select>

        <div className="flex gap-1 bg-surface-hi rounded-lg p-1">
          <button
            value=""
            onClick={(e) => setType(e.target.value)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${type === "" ? "bg-surface text-t1" : "text-t2"}`}
          >
            Todos
          </button>
          <button
            value="income"
            onClick={(e) => setType(e.target.value)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${type === "income" ? "bg-surface text-income" : "text-t2"}`}
          >
            Receitas
          </button>
          <button
            value="expense"
            onClick={(e) => setType(e.target.value)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${type === "expense" ? "bg-surface text-expense" : "text-t2"}`}
          >
            Despesas
          </button>
        </div>
      </div>

      <div className="bg-surface rounded-lg p-4">
        {filtered.length === 0 ? (
          <p className="text-t2 text-sm">Nenhuma transação encontrada.</p>
        ) : (
          filtered.map((t) => <TransactionItem key={t.id} transaction={t} />)
        )}
      </div>
    </div>
  );
}
