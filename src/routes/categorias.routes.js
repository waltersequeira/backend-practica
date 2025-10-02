import { Router } from "express";
import {obtenerCategorias, obtenerCategoria, registrarCatgeoria, } from '../controllers/categoria.controllers.js';
import { actualizarCategoria, eliminarCategoria } from "../controllers/categoria.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoria por su ID
router.get('/categoria/:id_categoria', obtenerCategoria);

// Ruta para registrar una nueva categoria
router.post('/catgeoria', registrarCatgeoria);

// Ruta para eliminar una categoria por su ID
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);

// Ruta para actualizar una categoria por su ID de forma parcial
router.patch('/actualizarcategoriapatch/:id_categoria', actualizarCategoriaPatch);

export default router;