import { renderizarListadoMaterias } from './funcionesMaterias.js';
import { obtenerRegistros } from '../../../recursos/js/utilidades.js';
const respuesta = await obtenerRegistros('/api/v1/materias');
renderizarListadoMaterias(respuesta);
