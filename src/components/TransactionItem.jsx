import { CATEGORIES } from "../constants/categories";

function TransactionItem({ transaction }) {
  const category = CATEGORIES.find((category) => {
    return category.id === transaction.catId;
  });

  return (
    <div className="flex gap-4 p-3 rounded-3xl">
      <span>{category?.emoji}</span>
      <span>{transaction.desc}</span>
      <span>{transaction.date}</span>
      <span
        className={
          transaction.type === "income" ? "text-income" : "text-expense"
        }
      >
        {transaction.amount}
      </span>
    </div>
  );
}

export default TransactionItem;
