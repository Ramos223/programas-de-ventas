// Importamos React y useState para manejar estados
import React, { useState } from 'react';

// Componente funcional principal: Gestión de Compras
const PurchaseManagement = () => {

  // Estado inicial que contiene una lista de compras
  const [purchases, setPurchases] = useState([
    { id: 1, product: 'Plátanos', quantity: 10, cost: 150.00, date: '2023-10-25' },
    { id: 2, product: 'Naranjas', quantity: 20, cost: 200.00, date: '2023-10-24' },
  ]);

  // Estado para capturar los datos de una nueva compra desde el formulario
  const [newPurchase, setNewPurchase] = useState({
    product: '',
    quantity: '',
    cost: ''
  });

  // Función para agregar una nueva compra al historial
  const handleAddPurchase = () => {
    // Verificamos que todos los campos estén completos
    if (newPurchase.product && newPurchase.quantity && newPurchase.cost) {
      // Creamos el nuevo objeto de compra
      const purchase = {
        id: purchases.length + 1,  // ID autoincremental
        product: newPurchase.product,
        quantity: parseFloat(newPurchase.quantity), // Convertimos a número
        cost: parseFloat(newPurchase.cost),         // Convertimos a número
        date: new Date().toISOString().slice(0, 10) // Fecha actual en formato yyyy-mm-dd
      };

      // Agregamos la nueva compra al arreglo de compras
      setPurchases([...purchases, purchase]);

      // Limpiamos los campos del formulario
      setNewPurchase({ product: '', quantity: '', cost: '' });
    }
  };

  // Función para eliminar una compra según su ID
  const handleDeletePurchase = (id) => {
    // Filtramos todas las compras excepto la que tiene el ID que queremos eliminar
    const updatedPurchases = purchases.filter((purchase) => purchase.id !== id);
    setPurchases(updatedPurchases);
  };

  // Renderizado del componente
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      
      {/* Título principal */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Gestión de Compras
      </h2>

      {/* FORMULARIO para registrar nueva compra */}
      <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Registrar Nueva Compra</h3>

        {/* Campos del formulario en forma de grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Campo: Producto */}
          <input
            type="text"
            placeholder="Producto"
            value={newPurchase.product}
            onChange={(e) => setNewPurchase({ ...newPurchase, product: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
          />

          {/* Campo: Cantidad */}
          <input
            type="number"
            placeholder="Cantidad"
            value={newPurchase.quantity}
            onChange={(e) => setNewPurchase({ ...newPurchase, quantity: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
          />

          {/* Campo: Costo Total */}
          <input
            type="number"
            placeholder="Costo Total"
            value={newPurchase.cost}
            onChange={(e) => setNewPurchase({ ...newPurchase, cost: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
          />
        </div>

        {/* Botón para agregar compra */}
        <button
          onClick={handleAddPurchase}
          className="w-full bg-lime-600 text-white py-3 rounded-lg hover:bg-lime-700 
                     transition-colors font-semibold text-lg shadow-md"
        >
          Agregar Compra
        </button>
      </div>

      {/* TABLA de historial de compras */}
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Historial de Compras</h3>

        {/* Tabla responsiva con scroll horizontal */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Costo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {/* Iteramos sobre cada compra para mostrarla en la tabla */}
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{purchase.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{purchase.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{purchase.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${purchase.cost.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{purchase.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {/* Botón para eliminar la compra */}
                    <button
                      onClick={() => handleDeletePurchase(purchase.id)}
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

// Exportamos el componente para usarlo en otras partes de la app
export default PurchaseManagement;
