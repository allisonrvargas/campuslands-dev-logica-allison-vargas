function compararOpcionesPingPong(criteriosJugador, opcionesRaquetas) {
    // Caso borde primario: El catálogo de opciones está vacío o es inválido
    if (!opcionesRaquetas || !Array.isArray(opcionesRaquetas) || opcionesRaquetas.length === 0) {
        return {
            recomendacion: "Ninguna",
            precio: 0,
            motivo: "El catálogo de raquetas de pingpong está vacío o no se cargó correctamente."
        };
    }

    let mejorRaqueta = null;
    let mejorPuntaje = -1; // Acumulador para guardar el puntaje más alto encontrado

    // Proceso: Iterar sobre las opciones usando un ciclo
    for (let i = 0; i < opcionesRaquetas.length; i++) {
        const raqueta = opcionesRaquetas[i];

        // Regla 1: Descartar si supera el presupuesto
        if (raqueta.precio > criteriosJugador.presupuesto) {
            continue; 
        }

        // Regla 2: Seleccionar el atributo a comparar según el estilo de juego
        let puntajeActual = 0;
        if (criteriosJugador.estilo === "ofensivo") {
            puntajeActual = raqueta.velocidad;
        } else if (criteriosJugador.estilo === "defensivo") {
            puntajeActual = raqueta.control;
        }

        // Comparación y acumulación del valor máximo
        if (puntajeActual > mejorPuntaje) {
            mejorPuntaje = puntajeActual;
            mejorRaqueta = raqueta; // Actualizamos la mejor opción retenida
        }
    }

    // Caso borde secundario: Ninguna raqueta cumplió el filtro de presupuesto
    if (!mejorRaqueta) {
        return {
            recomendacion: "Ninguna",
            precio: 0,
            motivo: `Ninguna opción en el catálogo se ajusta al presupuesto de $${criteriosJugador.presupuesto}.`
        };
    }

    // Éxito: Se encontró la mejor opción
    return {
        recomendacion: mejorRaqueta.modelo,
        precio: mejorRaqueta.precio,
        motivo: `Se compararon las opciones y '${mejorRaqueta.modelo}' es la mejor elección para el estilo '${criteriosJugador.estilo}' respetando el presupuesto de $${criteriosJugador.presupuesto}.`
    };
}

// Ejecución de pruebas para verificar consola
const criteriosOfensivo = { presupuesto: 100, estilo: "ofensivo" };
const catalogoCompleto = [
    { modelo: "Basic Wood", precio: 30, velocidad: 5, control: 7 },
    { modelo: "Pro Carbon", precio: 95, velocidad: 9, control: 6 },
    { modelo: "Elite Spin", precio: 120, velocidad: 10, control: 5 } // Supera presupuesto
];

const criteriosPobre = { presupuesto: 20, estilo: "defensivo" };

console.log(compararOpcionesPingPong(criteriosOfensivo, catalogoCompleto)); // Caso Normal
console.log(compararOpcionesPingPong(criteriosPobre, catalogoCompleto));    // Caso Borde