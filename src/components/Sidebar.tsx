import { NavLink } from "react-router-dom";
import { useTransactions } from "../context/TransactionContext";

function Sidebar() {
  const { setIsModalOpen } = useTransactions();

  return (
    <aside className="w-56 bg-surface flex flex-col p-6 h-screen border-r border-t3/20">
      <span className="text-accent font-bold text-xl mb-8">Fintrack</span>
      <nav className="flex flex-col gap-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive ? "bg-surface-hi text-t1" : "text-t2 hover:text-t1"
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive ? "bg-surface-hi text-t1" : "text-t2 hover:text-t1"
            }`
          }
        >
          Histórico
        </NavLink>
      </nav>
      <button
        className="mt-auto bg-accent text-bg font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
        onClick={() => setIsModalOpen(true)}
      >
        + Nova transação
      </button>
    </aside>
  );
}

export default Sidebar;
