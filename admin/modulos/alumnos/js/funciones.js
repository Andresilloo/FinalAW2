export async function renderizarFormularioAlumnos(registros, formulario) {
    try {
        const datos = await registros.json()
        if (registros.ok) {
            // Llenar form
            formulario.dni.value = datos[0].dni;
            formulario.nombre.value = datos[0].nombre;
            formulario.apellido.value = datos[0].apellido;
            formulario.email.value = datos[0].email;
        } else {
            console.log('Alumno no encontrado');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function renderizarListadoAlumnos(respuesta) {
    try {
        const datosAlumnos = await respuesta.json()
        if (respuesta.ok) {
            const contenedorAlumnos =
                document.getElementById('contenedor-alumnos');
            let filas = '';
            datosAlumnos.forEach((alumno) => {
                filas += `
                    <tr>
                        <td>${alumno.dni}</td>
                        <td>${alumno.nombre}</td>
                        <td>${alumno.apellido}</td>
                        <td>${alumno.email}</td>
                        <td><a href="./editar.html?id=${alumno.id}">Editar</a></td>
                    </tr>
                `;
            });
            contenedorAlumnos.innerHTML = filas;
        } else {
            console.log(datosAlumnos.mensaje);
        }
    } catch (error) {
        console.log(error);
    }
}
