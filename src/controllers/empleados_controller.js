import { pool } from '../../db_conection.js';

// Obtener todas las empleados
export const obtenerEmpleados = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM empleados');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Eliminar un empleado por su ID
export const eliminarEmpleados = async (req, res) => {
    try {
        const id_categoria = req.params.id_empleados;
        const [result] = await pool.query('DELETE FROM empleados WHERE id_empleado = ?', [id_empleados]);

        if (result.affectedRowa === 0) {
            return res.status(404).json({
                mensaje: 'Error al eliminar la empleado. El ID $(id_empleado) no fue encontrado.'
            });
        }
        // Respuesta sin contenido para indicar exito
        res.status(204).send();
    }   catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar la empleado.',
            error: error
        });
    }
};