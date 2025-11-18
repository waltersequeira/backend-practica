import { pool } from '../../db_conection.js';

// Obtener todos los empleados
export const obtenerEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Empleados');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los empleados.',
      error: error.message
    });
  }
};

// Obtener un empleado por su ID
export const obtenerEmpleado = async (req, res) => {
  try {
    const { id_empleado } = req.params;
    const [result] = await pool.query(
      'SELECT * FROM Empleados WHERE id_empleado = ?',
      [id_empleado]
    );

    if (result.length === 0) {
      return res.status(404).json({
        mensaje: `Empleado con ID ${id_empleado} no encontrado.`
      });
    }

    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Ha ocurrido un error al obtener el empleado.',
      error: error.message
    });
  }
};

// Registrar un nuevo Empleado
export const registrarempleado = async (req, res) => {
  try {
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion } = req.body;
    const [result] = await pool.query(
      'INSERT INTO empleados (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion]
    );
    res.status(201).json({ id_empleado: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el empleado.',
      error: error
    });
  }
};

// Eliminar un empleado por su ID
export const eliminarEmpleado = async (req, res) => {
  try {
    const { id_empleado } = req.params;

    const [result] = await pool.query(
      'DELETE FROM Empleados WHERE id_empleado = ?',
      [id_empleado]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado.' });
    }

    res.json({ mensaje: 'Empleado eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Error al eliminar el empleado.',
      error: error.message
    });
  }
};

// Actualizar parcialmente un empleado (PATCH)
export const actualizarEmpleadoPatch = async (req, res) => {
  try {
    const { id_empleado } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE Empleados SET ? WHERE id_empleado = ?',
      [datos, id_empleado]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado.' });
    }

    res.json({ mensaje: 'Empleado actualizado correctamente (PATCH).' });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Error al actualizar el empleado.',
      error: error.message
    });
  }
};

// Actualizar completamente un empleado (PUT)
export const actualizarEmpleadoPut = async (req, res) => {
  try {
    const { id_empleado } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE Empleados SET ? WHERE id_empleado = ?',
      [datos, id_empleado]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado.' });
    }

    res.json({ mensaje: 'Empleado actualizado correctamente (PUT).' });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Error al actualizar el empleado.',
      error: error.message
    });
  }
};
