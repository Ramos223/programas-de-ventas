// Importamos React y el hook useState para manejar estados
import React, { useState } from 'react';

// Componente funcional principal: ProductInventory
const ProductInventory = () => {

  // Estado inicial con algunos productos cargados
  const [products, setProducts] = useState([
    { id: 1, name: 'Manzanas Rojas', stock: 150, unit: 'kg', price: 25 },
    { id: 2, name: 'Plátanos', stock: 200, unit: 'kg', price: 18 },
    { id: 3, name: 'Naranjas', stock: 100, unit: 'kg', price: 20 },
  ]);

  // Estado para guardar el producto que el usuario va escribiendo en el formulario
  const [newProduct, setNewProduct] = useState({
    name: '',
    stock: '',
    unit: '',
    price: ''
  });

  // Función para agregar un nuevo producto al inventario
  const addProduct = () => {
    // Desestructuramos los campos del nuevo producto
    const { name, stock, unit, price } = newProduct;

    // Validamos que todos los campos estén llenos
    if (name && stock && unit && price) {
      // Creamos un nuevo objeto con ID, convirtiendo stock y precio a número
      const product = {
        id: products.length + 1,
        name,
        stock: parseFloat(stock),
        unit,
        price: parseFloat(price),
      };

      // Agregamos el nuevo producto a la lista anterior
      setProducts([...products, product]);

      // Limpiamos los campos del formulario
      setNewProduct({ name: '', stock: '', unit: '', price: '' });
    }
  };

  // Función para eliminar un producto por su ID
  const deleteProduct = (id) => {
    // Usamos filter para obtener un nuevo arreglo sin el producto con ese ID
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  };

  // Lo que se va a mostrar en pantalla
  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Título principal */}
      <h2 className="text-2xl font-bold mb-4">Inventario</h2>

      {/* FORMULARIO para agregar nuevos productos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">

        {/* Campo: Nombre del producto */}
        <input
          type="text"
          placeholder="Nombre"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="border p-2 rounded"
        />

        {/* Campo: Stock disponible */}
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, stock: e.target.value })
          }
          className="border p-2 rounded"
        />

        {/* Campo: Unidad (kg, pza, etc.) */}
        <input
          type="text"
          placeholder="Unidad"
          value={newProduct.unit}
          onChange={(e) =>
            setNewProduct({ ...newProduct, unit: e.target.value })
          }
          className="border p-2 rounded"
        />

        {/* Campo: Precio por unidad */}
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="border p-2 rounded"
        />
      </div>

      {/* Botón para agregar el nuevo producto a la lista */}
      <button
        onClick={addProduct}
        className="bg-green-600 text-white px-4 py-2 rounded mb-6"
      >
        Agregar
      </button>

      {/* TABLA para mostrar productos agregados */}
      <table className="w-full border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Unidad</th>
            <th className="p-2 border">Precio</th>
            <th className="p-2 border">Acción</th>
          </tr>
        </thead>

        <tbody>
          {/* Recorremos todos los productos para mostrarlos */}
          {products.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.id}</td>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.stock}</td>
              <td className="p-2 border">{p.unit}</td>
              <td className="p-2 border">${p.price.toFixed(2)}</td>
              <td className="p-2 border">
                {/* Botón para eliminar un producto */}
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="text-red-600 hover:underline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exportamos el componente para usarlo en otras partes de la aplicación
export default ProductInventory;
