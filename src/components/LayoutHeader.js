// Importamos React para usar JSX
import React from 'react';

// Componente funcional que recibe dos props:
// - currentPage: nombre de la página actual (para resaltar el botón activo)
// - navigateTo: función que cambia la vista o ruta actual
const LayoutHeader = ({ currentPage, navigateTo }) => {
  return (
    // Encabezado con fondo degradado y diseño atractivo
    <header className="bg-gradient-to-r from-green-500 to-lime-600 p-4 shadow-lg rounded-b-2xl">
      
      {/* Contenedor principal centrado horizontalmente */}
      <div className="container mx-auto flex justify-between items-center">

        {/* Título de la aplicación */}
        <h1 className="text-3xl font-bold text-white drop-shadow-md">
          FrutiControl
        </h1>

        {/* Menú de navegación */}
        <nav>
          <ul className="flex space-x-6">
            
            {/* Opción: Dashboard */}
            <li>
              <button
                onClick={() => navigateTo('dashboard')} // Cambia la página a 'dashboard'
                className={`text-white text-lg font-semibold transition-all duration-300 hover:scale-105 
                  ${currentPage === 'dashboard' ? 'underline underline-offset-4' : ''}`}
              >
                Dashboard
              </button>
            </li>

            {/* Opción: Ventas */}
            <li>
              <button
                onClick={() => navigateTo('ventas')} // Cambia a la vista de ventas
                className={`text-white text-lg font-semibold transition-all duration-300 hover:scale-105 
                  ${currentPage === 'ventas' ? 'underline underline-offset-4' : ''}`}
              >
                Ventas
              </button>
            </li>

            {/* Opción: Compras */}
            <li>
              <button
                onClick={() => navigateTo('compras')} // Cambia a la vista de compras
                className={`text-white text-lg font-semibold transition-all duration-300 hover:scale-105 
                  ${currentPage === 'compras' ? 'underline underline-offset-4' : ''}`}
              >
                Compras
              </button>
            </li>

            {/* Opción: Productos */}
            <li>
              <button
                onClick={() => navigateTo('productos')} // Cambia a la vista de productos
                className={`text-white text-lg font-semibold transition-all duration-300 hover:scale-105 
                  ${currentPage === 'productos' ? 'underline underline-offset-4' : ''}`}
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

// Exportamos el componente para que pueda ser usado en la aplicación
export default LayoutHeader;