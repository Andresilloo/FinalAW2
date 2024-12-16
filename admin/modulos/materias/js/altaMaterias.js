import {
    procesarFormulario,
    altaRegistro,
} from '../../../recursos/js/utilidades.js';

// ----------------------------------------------
const formulario = document.getElementById('form-editar');
const mensajes = document.getElementById('mensajes');
// ----------------------------------------------
formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    const datosFormulario = procesarFormulario(formulario);
    try {
        const respuesta = await altaRegistro(
            '/api/v1/materias/',
            'POST',
            datosFormulario
        );
        const datos = await respuesta.json();
        const { mensaje } = datos;
        mensajes.innerHTML = mensaje;
    } catch (error) {
        console.log(error);
        mensajes.innerHTML = 'No se pudo dar de alta el registro';
    }
});
