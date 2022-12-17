import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <nav className="m-4 flex">
        <Link className="p-3 text-white font-extrabold text-xl hover:text-gray-600" to='/'>Home</Link>
        <Link className="p-3 text-white font-extrabold text-xl hover:text-gray-600" to='/previsao-aleatoria'>Aleatório</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default MainLayout;