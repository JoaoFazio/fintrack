import { createContext } from "react";

export const TransactionContext = createContext<TransactionContextType | null>(
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

type TransactionContextType = {
  transactions: Transaction[];
  dispatch: React.ActionDispatch<[action: TransactionAction]>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TransactionAction =
  | { type: "ADD_TRANSACTION"; payload: Transaction }
  | { type: "DELETE_TRANSACTION"; payload: string };