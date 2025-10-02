import { Router } from "express";
import {obtenerCompra, obtenerCompra} from '../controllers/categoria.controllers.js';
import { obtenerCompra, obtenerCompras } from "../controllers/compras.controller.js";

const router = Router();

// Ruta para obtener todos los compra
router.get('/compra', obtenerCompras);

// Ruta para obtener una compra por su ID
router.get('/compra/:id_compra', obtenerCompra);

// RUta para registrar una nueva compra
router.post('/registrarCompra', registrarCompra);

// Ruta para actualizar una compra por su ID de formca parcial
router.patch('/actualizarcomprapatch/:id_compra', actualizarCompraPatch);

export default router;