
import express from 'express';
import * as controlador from './controlador.alumnos.mjs';

const rutasAlumnos = express.Router();
rutasAlumnos.use(express.json());

rutasAlumnos.get('/api/v1/alumnos', controlador.obtenerAlumnos);
rutasAlumnos.get('/api/v1/alumnos/:id', controlador.obtenerAlumno);
rutasAlumnos.post('/api/v1/alumnos', controlador.crearAlumno);
rutasAlumnos.put('/api/v1/alumnos/:id', controlador.modificarAlumno);
rutasAlumnos.delete('/api/v1/alumnos/:id', controlador.eliminarAlumno);

export default rutasAlumnos;
