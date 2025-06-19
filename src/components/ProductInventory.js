import React, { useState } from 'react';

const ProductInventory = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Manzanas Rojas', stock: 150, unit: 'kg', price: 25.00 },
    { id: 2, name: 'Plátanos', stock: 200, unit: 'kg', price: 18.00 },
    { id: 3, name: 'Naranjas', stock: 100, unit: 'kg', price: 20.00 },
    { id: 4, name: 'tomate', stock: 88, unit: 'kg',price: 44 },
  
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', stock: '', unit: '', price: '' });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.stock && newProduct.unit && newProduct.price) {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          name: newProduct.name,
          stock: parseFloat(newProduct.stock),
          unit: newProduct.unit,
          price: parseFloat(newProduct.price),
        },
      ]);
      setNewProduct({ name: '', stock: '', unit: '', price: '' });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Inventario de Productos
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Agregar Nuevo Producto</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            placeholder="Nombre del Producto"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
            type="text"
            placeholder="Unidad (kg, pza)"
            value={newProduct.unit}
            onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
            type="number"
            placeholder="Precio por Unidad"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg shadow-md"
        >
          Agregar Producto
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Lista de Productos</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unidad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
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

export default ProductInventory;