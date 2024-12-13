import { renderizarListadoAlumnos } from './funciones.js';
import { obtenerRegistros } from '../../../recursos/js/utilidades.js';
const respuesta = await obtenerRegistros('/api/v1/alumnos');
renderizarListadoAlumnos(respuesta);
