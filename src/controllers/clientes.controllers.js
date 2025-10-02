import { pool } from '../../db_conection.js';

// Obtener todos los clientes
export const obtenerClientes = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM clientes');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener una cliente por su ID
export const obtenerCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente;
        const [result] = await pool.query('SELECT * FROM clientes WHERE id_cliente = ?', [id_cliente]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_cliente} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los clientes.'
        });
    }
};

// Actualizar un cliente por su ID
export const actualizarClientes = async (req, res) => {
    try {
        const id_categoria = req.params.id_categoria;
        const { nombre_clientes, descripcion_clientes } = req.body;

        const [ result ] = await pool.query(
            'UPDATE cliente SET nombre_cliente = ?, descripcion_cliente = ? WHERE id_cliente = ?',
            [nombre_clientes, descripcion_clientes, id_clientes]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Error al actualizar el clientes. El ID $(id_clientes) no fue encontrado.'
            });
        }

        res.status(200).json({
            mensaje: 'Clientes con ID $(id_clientes) actualizar exitosamente.'
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar un clientes.',
            error: error
        });
    }
};