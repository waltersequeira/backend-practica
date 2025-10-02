import { Router } from 'express';
import {obtenerEmpleados} from '../controllers/empleados.controllers.js';
import { eliminarEmpleados } from '../controllers/empleados_controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener una empleado por su ID
router.get('/empleado/:id_empleado', obtenerEmpleados);

// Ruta para registrar una nuevo empleado
router.post('/empleado', registrarEmpleados);

// Ruta para eliminar una empleado por su ID
router.delete('/eliminarempleado/:id_empleado', eliminarEmpleados);

export default router;