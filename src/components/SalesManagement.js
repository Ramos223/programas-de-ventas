// Importamos React y useState para trabajar con componentes y estados locales
import React, { useState } from 'react';

// Componente principal que gestiona las ventas
const SalesManagement = () => {

  // Estado inicial: lista de ventas ya registradas
  const [sales, setSales] = useState([
    { id: 1, product: 'Manzanas', quantity: 2, price: 25.00, date: '2023-10-26' },
    { id: 2, product: 'Peras', quantity: 3, price: 30.00, date: '2023-10-26' },
    { id: 3, product: 'Uvas', quantity: 1, price: 50.00, date: '2023-10-25' },
  ]);

  // Estado para capturar los datos de una nueva venta desde el formulario
  const [newSale, setNewSale] = useState({
    product: '',
    quantity: '',
    price: ''
  });

  // Función para agregar una nueva venta a la lista
  const handleAddSale = () => {
    // Validamos que todos los campos estén completos
    if (newSale.product && newSale.quantity && newSale.price) {
      // Creamos el objeto de la nueva venta
      const sale = {
        id: sales.length + 1, // ID autogenerado
        product: newSale.product,
        quantity: parseFloat(newSale.quantity), // Convertimos a número
        price: parseFloat(newSale.price),       // Convertimos a número
        date: new Date().toISOString().slice(0, 10) // Fecha actual en formato 'YYYY-MM-DD'
      };

      // Agregamos la nueva venta al estado
      setSales([...sales, sale]);

      // Limpiamos el formulario
      setNewSale({ product: '', quantity: '', price: '' });
    }
  };

  // Función para eliminar una venta por su ID
  const handleDeleteSale = (id) => {
    // Filtramos todas las ventas, excluyendo la que tenga el ID indicado
    const updatedSales = sales.filter((sale) => sale.id !== id);
    setSales(updatedSales);
  };

  // Renderizado del componente
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      
      {/* Título principal */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Gestión de Ventas
      </h2>

      {/* FORMULARIO para registrar nueva venta */}
      <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Registrar Nueva Venta</h3>

        {/* Campos del formulario en grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Campo: Producto */}
          <input
            type="text"
            placeholder="Producto"
            value={newSale.product}
            onChange={(e) => setNewSale({ ...newSale, product: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          {/* Campo: Cantidad */}
          <input
            type="number"
            placeholder="Cantidad"
            value={newSale.quantity}
            onChange={(e) => setNewSale({ ...newSale, quantity: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          {/* Campo: Precio Unitario */}
          <input
            type="number"
            placeholder="Precio Unitario"
            value={newSale.price}
            onChange={(e) => setNewSale({ ...newSale, price: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* Botón para agregar la venta */}
        <button
          onClick={handleAddSale}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 
                     transition-colors font-semibold text-lg shadow-md"
        >
          Agregar Venta
        </button>
      </div>

      {/* TABLA del historial de ventas */}
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Historial de Ventas</h3>

        {/* Tabla responsiva */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>

            {/* Cuerpo de la tabla */}
            <tbody className="divide-y divide-gray-200">
              {sales.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${sale.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {/* Botón para eliminar la venta */}
                    <button
                      onClick={() => handleDeleteSale(sale.id)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente para su uso en otras partes de la aplicación
export default SalesManagement;
