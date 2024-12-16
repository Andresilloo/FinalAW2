export async function renderizarFormularioMaterias(registros, formulario) {
    try {
        const datos = await registros.json();
        if (registros.ok) {
            formulario.nombre.value = datos[0].nombre;
            formulario.modulos_por_semana.value = datos[0].modulos_por_semana;
        } else {
            console.log('Materia no encontrada');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function renderizarListadoMaterias(respuesta) {
    try {
        const datosMaterias = await respuesta.json();
        if (respuesta.ok) {
            const contenedorMaterias =
                document.getElementById('contenedor-materias');
            let filas = '';
            datosMaterias.forEach((materia) => {
                filas += `
                    <tr>
                        <td>${materia.nombre}</td>
                        <td>${materia.modulos_por_semana}</td>
                        <td><a href="./editarMateria.html?id=${materia.id}">Editar</a></td>
                    </tr>
                `;
            });
            contenedorMaterias.innerHTML = filas;
        } else {
            console.log(datosMaterias.mensaje);
        }
    } catch (error) {
        console.log(error);
    }
}
