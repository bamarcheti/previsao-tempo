import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="menu">
      <nav className="painel">
        <Link className="navigation" to='/'>Home</Link>
        <Link className="navigation" to='/previsao-aleatoria'>Aleatório</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default MainLayout;