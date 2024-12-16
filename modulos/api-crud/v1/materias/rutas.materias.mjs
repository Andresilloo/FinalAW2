
import express from 'express';
import * as controlador from './controlador.materias.mjs';

const rutasMaterias = express.Router();
rutasMaterias.use(express.json());

rutasMaterias.get('/api/v1/materias', controlador.obtenerMaterias);
rutasMaterias.get('/api/v1/materias/:id', controlador.obtenerMaterias); //
rutasMaterias.post('/api/v1/materias', controlador.crearMateria);
rutasMaterias.put('/api/v1/materias/:id', controlador.modificarMateria);
rutasMaterias.delete('/api/v1/materias/:id', controlador.eliminarMateria);

export default rutasMaterias;
