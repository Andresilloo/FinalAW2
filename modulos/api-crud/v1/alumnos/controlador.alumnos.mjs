/*
Conecta capa de datos a respuesta clientes
*/
import * as modelo from './modelo.alumnos.mjs';

async function obtenerAlumnos(req, res) {
    try {
        const resultado = await modelo.obtenerAlumnos();
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Alumnos no encontrados' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}

async function obtenerAlumno(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { id } = req.params;
        const resultado = await modelo.obtenerAlumno(id);
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Alumno no encontrado' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}

async function crearAlumno(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { dni, nombre, apellido, email } = req.body;
        // Verificamos
        if (!dni || !nombre || !apellido || !email) {
            return res.status(400).json({ mensaje: 'Datos incompletos' });
        }
        const resultado = await modelo.crearAlumno({
            dni,
            nombre,
            apellido,
            email,
        });
        // { dni: dniCreado } -> porque dni ya está declarada en este ámbito
        // Ámbito SP4/H3 p.263 TID AW1
        const { dni: dniCreado } = resultado.rows[0];
        res.json({ mensaje: `Alumno ${dniCreado} dado de alta` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}

async function modificarAlumno(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { id } = req.params;
        const { dni, nombre, apellido, email } = req.body;
        // Verificamos
        if (!id || !dni || !nombre || !apellido || !email) {
            return res.status(400).json({ mensaje: 'Datos incompletos' });
        }
        const resultado = await modelo.modificarAlumno({
            id,
            dni,
            nombre,
            apellido,
            email,
        });
        // { dni: dniModificado } -> porque dni ya está declarada en este ámbito
        // Ámbito SP4/H3 p.263 TID AW1
        const { dni: dniModificado } = resultado.rows[0];
        res.json({ mensaje: `Alumno ${dniModificado} modificado` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}

async function eliminarAlumno(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { id } = req.params;
        const resultado = await modelo.eliminarAlumno(id);
        if (resultado.rows.length > 0) {
            const { dni: dniEliminado } = resultado.rows[0];
            res.status(200).json({ mensaje: `Alumno dni: ${dniEliminado} eliminado` });
        } else {
            res.status(404).json({ mensaje: 'Alumno no encontrado' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}
export { obtenerAlumnos, obtenerAlumno, crearAlumno, modificarAlumno, eliminarAlumno };
