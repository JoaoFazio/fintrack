import { CATEGORIES } from "../constants/categories";

function TransactionItem({ transaction }) {
  const category = CATEGORIES.find((c) => c.id === transaction.catId);

  const formattedAmount = Number(transaction.amount).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-hi transition-colors">
      <span className="text-xl">{category?.emoji ?? "💰"}</span>
      <div className="flex-1 min-w-0">
        <p className="text-t1 text-sm font-medium truncate">
          {transaction.desc}
        </p>
        <p className="text-t2 text-xs">{transaction.date}</p>
      </div>
      <span
        className={`text-sm font-semibold ${
          transaction.type === "income" ? "text-income" : "text-expense"
        }`}
      >
        {transaction.type === "income" ? "+" : "-"}
        {formattedAmount}
      </span>
    </div>
  );
}

export default TransactionItem;
