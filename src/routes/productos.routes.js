import { Router } from 'express';
import { eliminarProducto, obtenerProductos, obtenerProducto, registrarProducto, actualizarProductoPatch } from '../controllers/productos.controllers.js';

const router = Router();

router.get('/productos', obtenerProductos);

// Ruta para orbtener una categoria por su ID
router.get('/producto/:id_producto', obtenerProducto);

// Rutas para registrar un producto
router.post('/registrarProducto', registrarProducto);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarproducto/:id_producto', eliminarProducto);

router.patch("/actualizarProductoPatch/:id_producto", actualizarProductoPatch);

// Rutas
export default router;