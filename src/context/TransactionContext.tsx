import { createContext, useReducer, useState, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect } from "react";
import { useContext } from "react";

const TransactionContext = createContext<TransactionContextType | null>(
  null,
);
export type Transaction = {
  id: string;
  type: "income" | "expense";
  desc: string;
  amount: number;
  date: string;
  catId: string | null;
};

//typeof item === "object" vem do javascript, eu nao escrevi object em lugar nenhum
//e tem que colocar && !== null pq é a forma de corrigir o erro do javascript
function isTransaction(item: unknown): item is Transaction {
  const currentTransaction = item as Record<string, unknown>;
  return (
    typeof item === "object" &&
    item !== null &&
    typeof currentTransaction.id === "string" &&
    typeof currentTransaction.desc === "string" &&
    typeof currentTransaction.date === "string" &&
    typeof currentTransaction.amount === "number" &&
    (currentTransaction.type === "income" ||
      currentTransaction.type === "expense") &&
    (typeof currentTransaction.catId === "string" ||
      currentTransaction.catId === null)
  );
}

function getTransactionList(value: unknown): Transaction[] | null {
  if (!Array.isArray(value)) {
    return null
  }
  return value.filter(isTransaction);
}

type TransactionContextType = {
  transactions: Transaction[];
  dispatch: React.ActionDispatch<[action: TransactionAction]>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type TransactionAction =
  | { type: "ADD_TRANSACTION"; payload: Transaction }
  | { type: "DELETE_TRANSACTION"; payload: string };

function transactionReducer(state: Transaction[], action: TransactionAction) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      // retorna novo array com a transação adicionada
      return [...state, action.payload];
    case "DELETE_TRANSACTION":
      // retorna novo array sem a transação deletada
      return state.filter((transaction) => transaction.id !== action.payload);
    default:
      return state;
  }
}

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useLocalStorage<Transaction[]>(
    "transactions",
    [],
    getTransactionList
  );
  const [transactions, dispatch] = useReducer(transactionReducer, stored);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setStored(transactions);
  }, [transactions, setStored]);

  return (
    <TransactionContext.Provider
      value={{ transactions, dispatch, isModalOpen, setIsModalOpen }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const usingTransaction = useContext(TransactionContext);

  if (!usingTransaction) {
    throw new Error(
      "useTransaction must be used within the TransactionProvider.",
    );
  }
  return usingTransaction;
}
