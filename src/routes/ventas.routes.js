import { Router } from "express";
import {obtenerVentas, obtenerVenta} from '../controllers/categoria.controllers.js';
import { eliminarVenta } from "../controllers/ventas_controller.js";

const router = Router();

// Ruta para obtener todos las ventas
router.get('/venta', obtenerVentas);

// Ruta para obtener una venta por su ID
router.get('/venta/:id_venta', obtenerVenta);

// Ruta para eliminar una venta por su ID
router.delete('/eliminarventa/:id_venta', eliminarVenta);

export default router;