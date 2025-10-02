import { Router } from 'express';
import {obtenerDetallesCompras} from '../controllers/detalles_compras.controllers.js';

const router = Router();

//Ruta para obtener todos los Detalles Compras
router.get('/detallecompras', obtenerDetallesCompras);

export default router;