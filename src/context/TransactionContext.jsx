import { createContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect } from "react";
import { useContext } from "react"

export const TransactionContext = createContext(null);

function transactionReducer(state, action) {
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

export function TransactionProvider({ children }) {
  const [stored, setStored] = useLocalStorage("transactions", []);
  const [transactions, dispatch] = useReducer(transactionReducer, stored);
  useEffect(() => {
    setStored(transactions);
  }, [transactions]);

  return (
    <TransactionContext.Provider value={{ transactions, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext)
}
