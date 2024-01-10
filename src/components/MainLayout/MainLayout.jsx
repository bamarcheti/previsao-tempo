import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col w-screen h-screen gap-14">
      <nav className="flex justify-center">
        <Link className="p-3 text-white font-extrabold text-xl hover:text-gray-600" to='/'>Home</Link>
        <Link className="p-3 text-white font-extrabold text-xl hover:text-gray-600" to='/previsao-aleatoria'>Aleatório</Link>
      </nav>
      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;