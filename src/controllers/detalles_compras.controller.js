import { pool } from '../../db_conection.js';

// Obtener todas las compras
export const obtenerDetallesCompras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Detalles_Compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener una compra por su ID
export const obtenerCompra = async (req, res) => {
    try {
        const id_compra = req.params.id;
        const [result] = await pool.query('SELECT * FROM compra WHERE id_compra = ?', [req.params.id_compra]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${req.params.id_compra} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las compras.'
        });
    }
};