// Importamos React y useState para manejar estados locales
import React, { useState } from 'react';

// Importamos los componentes de la aplicación
import LayoutHeader from './components/LayoutHeader';            // Barra de navegación superior
import DashboardOverview from './components/DashboardOverview';  // Vista de resumen general
import SalesManagement from './components/SalesManagement';      // Vista de ventas
import PurchaseManagement from './components/PurchaseManagement';// Vista de compras
import ProductInventory from './components/ProductInventory';    // Vista de inventario de productos

// Componente principal de la aplicación
const App = () => {

  // Estado que guarda qué página se está mostrando actualmente (por defecto, el "dashboard")
  const [currentPage, setCurrentPage] = useState('dashboard');

  /**
   * Función que actualiza el estado con la nueva página seleccionada.
   * Se llama desde el componente LayoutHeader cuando el usuario hace clic en alguna opción del menú.
   * @param {string} page - nombre de la página a mostrar
   */
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  /**
   * Función que devuelve el componente correspondiente a la página actual.
   * Sirve como un enrutador simple sin necesidad de usar React Router.
   */
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'ventas':
        return <SalesManagement />;
      case 'compras':
        return <PurchaseManagement />;
      case 'productos':
        return <ProductInventory />;
      default:
        return <DashboardOverview />; // Si la página no existe, carga el dashboard por defecto
    }
  };

  /**
   * Estructura visual principal de la aplicación
   * Incluye el encabezado de navegación y el contenido dinámico según la sección seleccionada
   */
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      
      {/* Encabezado con navegación, recibe props para saber qué página está activa y cómo cambiarla */}
      <LayoutHeader currentPage={currentPage} navigateTo={navigateTo} />
      
      {/* Contenido principal que cambia dinámicamente según el valor de currentPage */}
      <main className="container mx-auto py-8">
        {renderPage()}
      </main>
    </div>
  );
};

// Exportamos el componente para que pueda usarse en index.js o donde sea necesario
export default App;

// DONE ✔️
