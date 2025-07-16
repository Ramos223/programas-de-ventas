from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Inicializar la base de datos
def init_db():
    conn = sqlite3.connect('fruteria.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS productos 
                 (id INTEGER PRIMARY KEY, nombre TEXT, precio REAL, stock INTEGER)''')
    c.execute('''CREATE TABLE IF NOT EXISTS ventas 
                 (id INTEGER PRIMARY KEY, producto_id INTEGER, cantidad INTEGER, total REAL, fecha TEXT)''')
    conn.commit()
    conn.close()

# Ruta para la página principal
@app.route('/')
def index():
    return render_template('index.html')

# Ruta para obtener todos los productos
@app.route('/api/productos', methods=['GET'])
def get_productos():
    conn = sqlite3.connect('fruteria.db')
    c = conn.cursor()
    c.execute('SELECT * FROM productos')
    productos = [{'id': row[0], 'nombre': row[1], 'precio': row[2], 'stock': row[3]} for row in c.fetchall()]
    conn.close()
    return jsonify(productos)

# Ruta para agregar un producto
@app.route('/api/productos', methods=['POST'])
def add_producto():
    data = request.json
    conn = sqlite3.connect('fruteria.db')
    c = conn.cursor()
    c.execute('INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)', 
              (data['nombre'], data['precio'], data['stock']))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Producto agregado'})

# Ruta para registrar una venta
@app.route('/api/ventas', methods=['POST'])
def add_venta():
    data = request.json
    producto_id = data['producto_id']
    cantidad = data['cantidad']
    
    conn = sqlite3.connect('fruteria.db')
    c = conn.cursor()
    c.execute('SELECT precio, stock FROM productos WHERE id = ?', (producto_id,))
    result = c.fetchone()
    if result and result[1] >= cantidad:
        precio = result[0]
        total = precio * cantidad
        fecha = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        c.execute('INSERT INTO ventas (producto_id, cantidad, total, fecha) VALUES (?, ?, ?, ?)', 
                  (producto_id, cantidad, total, fecha))
        c.execute('UPDATE productos SET stock = stock - ? WHERE id = ?', (cantidad, producto_id))
        conn.commit()
        conn.close()
        return jsonify({'message': 'Venta registrada'})
    conn.close()
    return jsonify({'error': 'Stock insuficiente o producto no encontrado'}), 400

# Ruta para obtener todas las ventas
@app.route('/api/ventas', methods=['GET'])
def get_ventas():
    conn = sqlite3.connect('fruteria.db')
    c = conn.cursor()
    c.execute('''SELECT v.id, p.nombre, v.cantidad, v.total, v.fecha 
                 FROM ventas v JOIN productos p ON v.producto_id = p.id''')
    ventas = [{'id': row[0], 'producto': row[1], 'cantidad': row[2], 'total': row[3], 'fecha': row[4]} 
              for row in c.fetchall()]
    conn.close()
    return jsonify(ventas)

if __name__ == '__main__':
    init_db()
    app.run(debug=True)