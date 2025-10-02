import { pool } from '../../db_conection.js';

// Obtener todas las categroias
export const obtenerCategorias = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM categorias');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener una categoría por su ID
export const obtenerCategoria = async (req, res) => {
    try {
        const id_categoria = req.params.id;
        const [result] = await pool.query('SELECT * FROM categorias WHERE id_categoria = ?', [req.params.id_categoria]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${req.params.id_categoria} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las categorias.'
        });
    }
};

// Eliminar una categoria por su ID
export const eliminarCategoria = async (req, res) => {
    try {
        const id_categoria = req.params.id_categoria;
        const [result] = await pool.query('DELETE FROM catgorias WHERE id_categoria = ?', [id_categoria]);

        if (result.affectedRowa === 0) {
            return res.status(404).json({
                mensaje: 'Error al eliminar la categoria. El ID $(id_categoria) no fue encontrado.'
            });
        }
        // Respuesta sin contenido para indicar exito
        res.status(204).send();
    }   catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar la categoria.',
            error: error
        });
    }
};

// Actualizar una categoria por su ID
export const actualizarCategoria = async (req, res) => {
    try {
        const id_categoria = req.params.id_categoria;
        const { nombre_categoria, descripcion_categoria } = req.body;

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