import { Outlet } from "react-router-dom";
import { useTransactions } from "../context/TransactionContext";

export default function Dashboard() {
  const { transactions } = useTransactions();
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  const recentTransactions = transactions.slice(-5);

  return (
    <div className="p-6">
      <h1 className="text-t3 font-bold mb-6">DashBoard</h1>
      <div className="flex gap-4">
        <div className="bg-surface p-4 rounded-lg min-w-32">
          <p className="text-t2 text-sm">Saldo</p>
          <p className="text-t1 text-2xl font-bold">{balance}</p>
        </div>
        <div className="bg-surface p-4 rounded-lg min-w-32">
          <p className="text-t2 text-sm">Receitas</p>
          <p className="text-accent text-2xl font-bold">{income}</p>
        </div>
        <div className="bg-surface p-4 rounded-lg min-w-32">
          <p className="text-t2 text-sm">Despesas</p>
          <p className="text-expense text-2xl font-bold">{expense}</p>
        </div>
      </div>
      <div>
        <ul>
          {recentTransactions.map((t) => (
            <li key={t.id} className="bg-surface p-4 rounded-lg">
              <span>{t.desc}</span>
              <span>{t.date}</span>
              <span>{t.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
