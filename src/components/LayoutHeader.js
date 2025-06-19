import React from 'react';

const LayoutHeader = ({ currentPage, navigateTo }) => {
  return (
    <header className="bg-gradient-to-r from-green-500 to-lime-600 p-4 shadow-lg rounded-b-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-md">
          FrutiControl
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => navigateTo('dashboard')}
                className={`text-white text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  currentPage === 'dashboard' ? 'underline underline-offset-4' : ''
                }`}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('ventas')}
                className={`text-white text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  currentPage === 'ventas' ? 'underline underline-offset-4' : ''
                }`}
              >
                Ventas
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('compras')}
                className={`text-white text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  currentPage === 'compras' ? 'underline underline-offset-4' : ''
                }`}
              >
                Compras
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('productos')}
                className={`text-white text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  currentPage === 'productos' ? 'underline underline-offset-4' : ''
                }`}
              >
                Productos
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;