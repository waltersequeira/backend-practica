import { Router } from "express";
import {obtenerDetallesVenta, obtenerDetallesVenta} from '../controllers/categoria.controllers.js';
import { obtenerDetallesVenta } from "../controllers/detalles_ventas.controller.js";

const router = Router();

// Ruta para obtener todos los venta
router.get('/detalle_venta', obtenerDetallesVenta);

// Ruta para obtener una venta por su ID
router.get('/detallesventa/:id_detalle_venta', obtenerDetallesVenta);

export default router;