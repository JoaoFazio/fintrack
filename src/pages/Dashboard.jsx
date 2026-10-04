import { Outlet } from "react-router-dom";
import { useTransactions } from "../context/TransactionContext";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import TransactionItem from "../components/TransactionItem";
import { CATEGORIES } from "../constants/categories";

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
  const chartData = Object.entries(
    transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => {
        if (acc[t.catId]) {
          acc[t.catId] += t.amount;
        } else {
          acc[t.catId] = t.amount;
        }
        return acc;
      }, {}),
  ).map(([name, value]) => ({ name, value }));

  const monthlyData = Object.entries(
    transactions.reduce((acc, t) => {
      const month = t.date.slice(0, 7);

      if (!acc[month]) {
        acc[month] = { income: 0, expense: 0 };
      }

      if (t.type === "income") {
        acc[month].income += t.amount;
      } else {
        acc[month].expense += t.amount;
      }
      return acc;
    }, {}),
  ).map(([month, values]) => ({ month, ...values }));
  const formattedBalance = Number(balance).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const formattedIncome = Number(income).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const formattedExpense = Number(expense).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-t1 text-2xl font-bold mb-6">Dashboard</h1>

      <div className="flex gap-4 mb-8">
        <div className="bg-surface p-4 rounded-lg flex-1">
          <p className="text-t2 text-xs uppercase tracking-wide mb-1">Saldo</p>
          <p className="text-t1 text-2xl font-bold">{formattedBalance}</p>
        </div>
        <div className="bg-surface p-4 rounded-lg flex-1">
          <p className="text-t2 text-xs uppercase tracking-wide mb-1">
            Receitas
          </p>
          <p className="text-income text-2xl font-bold">{formattedIncome}</p>
        </div>
        <div className="bg-surface p-4 rounded-lg flex-1">
          <p className="text-t2 text-xs uppercase tracking-wide mb-1">
            Despesas
          </p>
          <p className="text-expense text-2xl font-bold">{formattedExpense}</p>
        </div>
      </div>

      <div className="flex gap-6 mb-8">
        <div className="bg-surface p-4 rounded-lg">
          <p className="text-t2 text-xs uppercase tracking-wide mb-3">
            Gastos por categoria
          </p>
          <PieChart width={280} height={280}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="80%"
            >
              {chartData.map((entry, index) => {
                const cat = CATEGORIES.find((c) => c.id === entry.name);
                return <Cell key={index} fill={cat?.color ?? "#7070a0"} />;
              })}
            </Pie>
          </PieChart>
        </div>
        <div className="bg-surface p-4 rounded-lg flex-1">
          <p className="text-t2 text-xs uppercase tracking-wide mb-3">
            Receitas vs Despesas
          </p>
          <BarChart width={400} height={280} data={monthlyData}>
            <XAxis dataKey="month" tick={{ fill: "#7070a0", fontSize: 12 }} />
            <YAxis tick={{ fill: "#7070a0", fontSize: 12 }} />

            <Bar dataKey="income" fill="#1fd990" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expense" fill="#f0405e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </div>
      </div>

      <div className="bg-surface rounded-lg p-4">
        <p className="text-t2 text-xs uppercase tracking-wide mb-3">
          Últimas transações
        </p>
        {recentTransactions.length === 0 ? (
          <p className="text-t2 text-sm">Nenhuma transação ainda.</p>
        ) : (
          recentTransactions.map((t) => (
            <TransactionItem key={t.id} transaction={t} />
          ))
        )}
      </div>
    </div>
  );
}
