import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, registrarempleado, eliminarEmpleado, actualizarEmpleadoPatch } from '../controllers/empleados.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener un cliente por su id
router.get('/empleado/:id_empleados', obtenerEmpleado);

// Rutas para registrar un empleado
router.post('/registrarEmpleado', registrarempleado);

// Ruta para eliminar un empleado por su ID
router.delete('/eliminarempleado/:id_empleado', eliminarEmpleado);

// Ruta para actualizar parcialmente un empleado por su ID
router.patch('/actualizarEmpleado/:id_empleado', actualizarEmpleadoPatch);

// Ruta para buscar un empleado
router.patch('/empleados/:id_empleado', actualizarEmpleadoPatch);

export default router;