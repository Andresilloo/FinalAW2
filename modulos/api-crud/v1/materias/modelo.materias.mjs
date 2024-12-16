/*
Acceso a la capa de datos
*/

import pool from '../../../../conexion/conexion.bd.mjs';

async function obtenerMaterias() {
    try {
        const resultado = await pool.query('SELECT * FROM materias');
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function obtenerMateria(id) {
    try {
        const resultado = await pool.query(
            'SELECT * FROM materias WHERE id = $1',
            [id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function crearMateria(materia) {
    try {
        const { nombre, modulos_por_semana } = materia;
        const resultado = await pool.query(
            `
            INSERT INTO materias 
                (nombre, modulos_por_semana) 
            VALUES 
                ($1, $2) 
            RETURNING id, nombre
            `,
            [nombre, modulos_por_semana]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function modificarMateria(materia) {
    try {
        const { id, nombre, modulos_por_semana } = materia;
        const resultado = await pool.query(
            `
            UPDATE materias 
                SET 
                    nombre = $1,
                    modulos_por_semana = $2 
                WHERE id = $3 
            RETURNING id, nombre
            `,
            [nombre, modulos_por_semana, id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function eliminarMateria(id) {
    try {
        const resultado = await pool.query(
            `DELETE FROM materias 
                WHERE id=$1
                RETURNING id, nombre
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
    obtenerMaterias,
    obtenerMateria,
    crearMateria,
    modificarMateria,
    eliminarMateria,
};
