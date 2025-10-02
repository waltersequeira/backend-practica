import { Router } from "express";
import {obtenerClientes} from '../controllers/clientes.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/cliente', obtenerClientes);

// Ruta para obtener una cliente por su ID
router.get('/cliente/:id_cliente', obtenerClientes);

// Ruta para registrar una nueva cliente
router.post('/cliente', registrarClientes);

// Ruta para eliminar una cliente por su ID
router.delete('/eliminarcliente/:id_cliente', eliminarClientes);

// Ruta para actualizar un cliente por su ID de forma parcial
router.patch('/actualizarclientepatch/:id_cliente', actualizarClientePatch);

export default router;