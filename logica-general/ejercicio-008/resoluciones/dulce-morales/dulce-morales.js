function evaluarFlujoPelicula(peliculaFlujo) {
    // Caso borde primario: Objeto vacío o datos inválidos
    if (!peliculaFlujo || typeof peliculaFlujo !== "object") {
        return {
            flujoAprobado: false,
            siguienteAccion: "error_sistema",
            motivo: "No se proporcionaron metadatos o registros del flujo de postproducción."
        };
    }

    const { titulo, faseActual, requiereEfectosEspeciales, aprobacionDirector } = peliculaFlujo;

    // Caso borde secundario: Fases fuera del rango del estudio (1: Edición, 2: VFX, 3: Distribución)
    if (faseActual < 1 || faseActual > 3) {
        return {
            flujoAprobado: false,
            siguienteAccion: "auditar_fase",
            motivo: "La fase de producción indicada no corresponde a una etapa válida del pipeline del estudio."
        };
    }

    // Proceso - Regla de corte: Si el director no aprueba, el flujo se detiene por completo
    if (aprobacionDirector === false) {
        return {
            flujoAprobado: false,
            siguienteAccion: faseActual === 1 ? "congelar_en_edicion" : "congelar_en_vfx",
            motivo: "El flujo está bloqueado. El director no ha firmado la aprobación de edición o se intentó omitir el renderizado de VFX."
        };
    }

    // Proceso - Regla de Flujo Secuencial paso a paso
    if (faseActual === 1) {
        if (requiereEfectosEspeciales) {
            return {
                flujoAprobado: true,
                siguienteAccion: "enviar_a_render_vfx",
                motivo: `La edición base de '${titulo}' está lista. El flujo requiere enviarse al departamento de CGI debido a su alta carga de ciencia ficción.`
            };
        }
        return {
            flujoAprobado: true,
            siguienteAccion: "pasar_a_distribucion",
            motivo: `Al no requerir CGI complejo, la película '${titulo}' puede saltar directo al empaquetamiento de distribución.`
        };
    }

    if (faseActual === 2) {
        return {
            flujoAprobado: true,
            siguienteAccion: "pasar_a_distribucion",
            motivo: `El largometraje '${titulo}' completó exitosamente el renderizado de CGI y cuenta con el visto bueno del director para iniciar la distribución.`
        };
    }

    // Fase 3 de distribución
    return {
        flujoAprobado: true,
        siguienteAccion: "preparar_estreno_cines",
        motivo: `El flujo de '${titulo}' ha finalizado por completo. El máster digital está listo para salas de cine.`
    };
}

// Ejecución de pruebas para verificar consola
const peliculaCorrecta = {
    titulo: "Interestelar 2",
    faseActual: 2,
    requiereEfectosEspeciales: true,
    aprobacionDirector: true
};

const peliculaBloqueada = {
    titulo: "Cyberpunk 2099",
    faseActual: 1,
    requiereEfectosEspeciales: true,
    aprobacionDirector: false
};

console.log(evaluarFlujoPelicula(peliculaCorrecta)); // Caso Normal
console.log(evaluarFlujoPelicula(peliculaBloqueada)); // Caso Borde