import React, { useState } from 'react';

const SalesManagement = () => {
  const [sales, setSales] = useState([
    { id: 1, product: 'Manzanas', quantity: 2, price: 25.00, date: '2023-10-26' },
    { id: 2, product: 'Peras', quantity: 3, price: 30.00, date: '2023-10-26' },
    { id: 3, product: 'Uvas', quantity: 1, price: 50.00, date: '2023-10-25' },
  ]);
  const [newSale, setNewSale] = useState({ product: '', quantity: '', price: '' });

  const handleAddSale = () => {
    if (newSale.product && newSale.quantity && newSale.price) {
      setSales([
        ...sales,
        {
          id: sales.length + 1,
          product: newSale.product,
          quantity: parseFloat(newSale.quantity),
          price: parseFloat(newSale.price),
          date: new Date().toISOString().slice(0, 10),
        },
      ]);
      setNewSale({ product: '', quantity: '', price: '' });
    }
  };

  const handleDeleteSale = (id) => {
    setSales(sales.filter((sale) => sale.id !== id));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Gestión de Ventas
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Registrar Nueva Venta</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Producto"
            value={newSale.product}
            onChange={(e) => setNewSale({ ...newSale, product: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
            type="number"
            placeholder="Cantidad"
            value={newSale.quantity}
            onChange={(e) => setNewSale({ ...newSale, quantity: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
            type="number"
            placeholder="Precio Unitario"
            value={newSale.price}
            onChange={(e) => setNewSale({ ...newSale, price: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>
        <button
          onClick={handleAddSale}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg shadow-md"
        >
          Agregar Venta
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Historial de Ventas</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cantidad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sales.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sale.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sale.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sale.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${sale.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sale.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
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

export default SalesManagement;