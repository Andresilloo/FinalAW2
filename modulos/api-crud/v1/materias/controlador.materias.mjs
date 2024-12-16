/*
Conecta capa de datos a respuesta clientes
*/
import * as modelo from './modelo.materias.mjs';

async function obtenerMaterias(req, res) {
    try {
        const resultado = await modelo.obtenerMaterias();
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Materias no encontradas' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}

async function obtenerMateria(req, res) {
    try {
        const { id } = req.params;
        const resultado = await modelo.obtenerMateria(id);
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Materia no encontrada' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}

async function crearMateria(req, res) {
    try {
        const { nombre, modulos_por_semana } = req.body;
        if (!nombre || !modulos_por_semana) {
            return res.status(400).json({ mensaje: 'Datos incompletos' });
        }
        const resultado = await modelo.crearMateria({ nombre, modulos_por_semana });
        const { id } = resultado.rows[0];
        res.json({ mensaje: `Materia ${nombre} creada correctamente` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}

async function modificarMateria(req, res) {
    try {
        const { id } = req.params;
        const { nombre, modulos_por_semana } = req.body;
        if (!id || !nombre || !modulos_por_semana) {
            return res.status(400).json({ mensaje: 'Datos incompletos' });
        }
        const resultado = await modelo.modificarMateria({ id, nombre, modulos_por_semana });
        const { id: idModificado } = resultado.rows[0];
        res.json({ mensaje: `Materia ${nombre} modificada correctamente` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}

async function eliminarMateria(req, res) {
    try {
        const { id } = req.params;
        const resultado = await modelo.eliminarMateria(id);
        if (resultado.rowCount > 0) {
            res.status(200).json({ mensaje: `Materia ${id} eliminada correctamente` });
        } else {
            res.status(404).json({ mensaje: 'Materia no encontrada' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}
export { obtenerMaterias, obtenerMateria, crearMateria, modificarMateria, eliminarMateria };
