import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

export function useTransactions() {
  const usingTransaction = useContext(TransactionContext);

  if (!usingTransaction) {
    throw new Error(
      "useTransaction must be used within the TransactionProvider.",
    );
  }
  return usingTransaction;
}
