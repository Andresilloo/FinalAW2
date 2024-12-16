import express from 'express'
// Alumnos
// v1
import rutasAlumnosV1  from './api-crud/v1/alumnos/rutas.alumnos.mjs'
import rutasMateriasV1 from './api-crud/v1/materias/rutas.materias.mjs'
// v2 ...

const modulosApi = express.Router()

modulosApi.use(rutasAlumnosV1)
modulosApi.use(rutasMateriasV1);

export default modulosApi;
