import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1 className="bg-surface">DashBoard</h1>
      <Outlet />
    </div>
  );
}
