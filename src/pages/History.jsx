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
    <div>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Todos os meses</option>
        <option value="2026-09">Setembro 2026</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Categorias</option>
        {listCategories}
      </select>
      <button
        value=""
        onClick={(e) => setType(e.target.value)}
        className={`p-2 rounded-2xl ${type === "" ? "bg-surface text-t1" : "text-t2"}`}
      >
        Todos
      </button>
      <button
        value="income"
        onClick={(e) => setType(e.target.value)}
        className={`p-2 rounded-2xl ${type === "income" ? "bg-accent text-t1" : "text-t2"}`}
      >
        Receitas
      </button>
      <button
        value="expense"
        onClick={(e) => setType(e.target.value)}
        className={`p-2 rounded-2xl ${type === "expense" ? "bg-expense text-t1" : "text-t2"}`}
      >
        Despesas
      </button>
      <div>
        {filtered.map((t) => (
          <TransactionItem key={t.id} transaction={t} />
        ))}
      </div>
      <Outlet />
    </div>
  );
}
