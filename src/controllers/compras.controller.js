import { pool } from '../../db_conection.js';

// Obtener todas las compras
export const obtenerCompras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener una categoría por su ID
export const obtenerCompra = async (req, res) => {
    try {
        const id_compra = req.params.id_categoria;
        const [result] = await pool.query('SELECT * FROM compra WHERE id_compra = ?', [id_compra]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_compra} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las ccompras.'
        });
    }
};

// Registrar una nueva Categoría
export const registrarCategoria = async (req, res) => {
    try {
        const { nombre_categoria, descripcion_categoria } = req.body;
        const [result] = await pool.query(
            'INSERT INTO categorias (nombre_categoria, descripcion_categoria) VALUES (?, ?)',
            [nombre_categoria, descripcion_categoria]
        );
        res.status(201).json({ id_categoria: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la categoría.',
            error: error
        });
    }
};

// Actualizar una categoria por su ID
export const actualizarCompra = async (req, res) => {
    try {
        const id_compra = req.params.id_compra;
        const { nombre_compra, descripcion_compra } = req.body;

        const [ result ] = await pool.query(
            'UPDATE categoria SET nombre_categoria = ?, descripcion_categoria = ? WHERE id_categoria = ?',
            [nombre_categoria, descripcion_categoria, id_categoria]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Error al actualizar la categoria. El ID $(id_categoria) no fue encontrado.'
            });
        }

        res.status(200).json({
            mensaje: 'Categoria con ID $(id_categoria) actualizar exitosamente.'
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar la categoria.',
            error: error
        });
    }
};