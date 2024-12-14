import {
    procesarFormulario,
    altaRegistro,
  } from '../../../recursos/js/utilidades.js';
  
  // Referencias al formulario y a los mensajes
  const formulario = document.getElementById('form-alta-materias');
  const mensajes = document.getElementById('mensajes');
  
  // Escuchador del evento submit del formulario
  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault(); // Evitar recarga del formulario
  
    // Procesar los datos del formulario
    const datosFormulario = procesarFormulario(formulario);
  
    // Enviar los datos al backend
    try {
      const respuesta = await altaRegistro(
        '/api/v1/materias/', // Endpoint del backend para alta de materias
        'POST', // Método HTTP
        datosFormulario // Datos del formulario
      );
  
      const datos = await respuesta.json();
      const { mensaje } = datos;
      mensajes.innerHTML = `<p class="success">${mensaje}</p>`;
    } catch (error) {
      console.error(error);
      mensajes.innerHTML = '<p class="error">No se pudo dar de alta la materia</p>';
    }
  });
  