// Importamos React para poder usar JSX
import React from 'react';

// Definimos el componente funcional DashboardOverview
const DashboardOverview = () => {

  // Lista de estadísticas que se mostrarán como tarjetas
  // Cada objeto tiene un título, un valor y clases de color con Tailwind CSS
  const stats = [
    { title: 'Ventas del Día', value: '$1,250.00', color: 'bg-green-100 text-green-800' },
    { title: 'Compras Pendientes', value: '5', color: 'bg-yellow-100 text-yellow-800' },
    { title: 'Productos en Stock', value: '120', color: 'bg-blue-100 text-blue-800' },
    { title: 'Ganancia Neta', value: '$800.00', color: 'bg-purple-100 text-purple-800' },
  ];

  // Lo que renderiza el componente
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Título principal del dashboard */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Resumen del Día
      </h2>

      {/* Grid que muestra las tarjetas de estadísticas usando el array 'stats' */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index} // React necesita una clave única para cada elemento en el .map
            className={`p-6 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 ${stat.color}`}
          >
            {/* Título de la estadística */}
            <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>

            {/* Valor de la estadística, en tamaño grande */}
            <p className="text-4xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Sección de actividad reciente */}
      <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl">
        {/* Título de la sección */}
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Actividad Reciente</h3>

        {/* Lista de movimientos recientes: ventas o compras */}
        <ul className="space-y-4">
          {/* Cada elemento de actividad es una línea con su descripción y cantidad */}
          <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
            <span className="text-lg text-gray-700">Venta #00123 - Manzanas Rojas</span>
            <span className="text-lg font-semibold text-green-600">+$50.00</span>
          </li>
          <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
            <span className="text-lg text-gray-700">Compra #0045 - Plátanos</span>
            <span className="text-lg font-semibold text-red-600">-$120.00</span>
          </li>
          <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
            <span className="text-lg text-gray-700">Venta #00124 - Naranjas</span>
            <span className="text-lg font-semibold text-green-600">+$35.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Exportamos el componente para poder usarlo en otros archivos
export default DashboardOverview;
