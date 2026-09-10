import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-56 bg-surface flex flex-col p-4 h-screen">
      <nav className="flex flex-col gap-2">
        <span className="text-t2">Fintrack</span>
        <NavLink to="/" className="text-t2">
          Dashboard
        </NavLink>
        <NavLink to="/history" className="text-t2">
          History
        </NavLink>
      </nav>
      <button className="text-accent mt-auto">+</button>
    </aside>
  );
}

export default Sidebar;
