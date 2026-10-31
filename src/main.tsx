import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";

function bringRoot() {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("Element with root id not found in HTML");
  }
  return root;
}

createRoot(bringRoot()).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>,
);
