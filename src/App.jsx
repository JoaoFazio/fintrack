import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

function App() {
  return (
    <BrowserRouter>
      <Modal />
      <div className="flex bg-bg min-h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-bg">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
