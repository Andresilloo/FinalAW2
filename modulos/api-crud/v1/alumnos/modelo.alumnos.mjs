/*
Acceso a la capa de datos
*/

import pool from '../../../../conexion/conexion.bd.mjs';

async function obtenerAlumnos() {
    try {
        const resultado = await pool.query('SELECT * FROM alumnos');
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function obtenerAlumno(id) {
    try {
        const resultado = await pool.query(
            'SELECT * FROM alumnos WHERE id=$1',
            [id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function crearAlumno(alumno) {
    try {
        const { dni, nombre, apellido, email } = alumno;
        const resultado = await pool.query(
            `
            INSERT INTO alumnos
                (dni, nombre, apellido, email)
            VALUES
                ($1,$2,$3,$4)
            RETURNING id, dni
        `,
            [dni, nombre, apellido, email]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function modificarAlumno(alumno) {
    try {
        const { id, dni, nombre, apellido, email } = alumno;
        const resultado = await pool.query(
            `UPDATE alumnos 
                SET 
                    dni=$1,
                    nombre=$2,
                    apellido=$3,
                    email=$4 
                    WHERE id=$5
                RETURNING id, dni
            `,
            [dni, nombre, apellido, email, id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function eliminarAlumno(id) {
    try {
        const resultado = await pool.query(
            `DELETE FROM alumnos 
                WHERE id=$1
                RETURNING id, dni
            `,
            [id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export {
    obtenerAlumnos,
    obtenerAlumno,
    crearAlumno,
    modificarAlumno,
    eliminarAlumno,
};
