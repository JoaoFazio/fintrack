import { createContext, useReducer, useState, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect } from "react";
import { useContext } from "react";

export const TransactionContext = createContext<TransactionContextType | null>(null);
type Transaction = {
  id: string;
  type: "income" | "expense";
  desc: string;
  amount: number;
  date: string;
  catId: string | null;
};

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
  );
  const [transactions, dispatch] = useReducer(transactionReducer, stored);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setStored(transactions);
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{ transactions, dispatch, isModalOpen, setIsModalOpen }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
