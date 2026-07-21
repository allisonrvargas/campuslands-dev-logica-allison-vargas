function procesarInscripcionEsports(jugadorInscripcion) {
    // Caso borde: Datos nulos, vacíos o estructuras de datos corruptas
    if (!jugadorInscripcion || typeof jugadorInscripcion !== "object") {
        return {
            estadoInscripcion: "rechazado",
            bracketAsignado: "ninguno",
            motivo: "Error de sistema: El formulario de inscripción se encuentra vacío o es inválido."
        };
    }

    const { nickname, rangoPuntos, edad, tienePenalizaciones } = jugadorInscripcion;

    // Proceso: Evaluar regla de Fair Play (Penalizaciones de conducta)
    if (tienePenalizaciones === true) {
        return {
            estadoInscripcion: "rechazado",
            bracketAsignado: "ninguno",
            motivo: "Inscripción cancelada. El jugador cuenta con sanciones de comportamiento activas en el sistema."
        };
    }

    // Evaluar reglas para menor de edad sin los requisitos mínimos de liga
    if (edad < 16) {
        return {
            estadoInscripcion: "rechazado",
            bracketAsignado: "ninguno",
            motivo: "El aspirante no cumple con la edad mínima reglamentaria (16 años) para torneos oficiales."
        };
    }

    // Clasificación por Rango / Elo competitivo
    if (rangoPuntos >= 2500) {
        return {
            estadoInscripcion: "aprobado",
            bracketAsignado: "profesional",
            motivo: `El jugador ${nickname} cumple con la edad mínima, supera el elo requerido y mantiene un historial limpio de penalizaciones.`
        };
    }

    return {
        estadoInscripcion: "aprobado",
        bracketAsignado: "aspirantes",
        motivo: `Inscripción aceptada para la liga de desarrollo debido a un nivel de rango menor a 2500 puntos.`
    };
}

// Ejecución de pruebas para verificar consola
const postulanteValido = {
    nickname: "XenonGamer",
    rangoPuntos: 2800,
    edad: 19,
    tienePenalizaciones: false
};

const postulanteSancionado = {
    nickname: "ToxicPlayer",
    rangoPuntos: 3100,
    edad: 22,
    tienePenalizaciones: true
};

console.log(procesarInscripcionEsports(postulanteValido));   // Caso Normal
console.log(procesarInscripcionEsports(postulanteSancionado)); // Caso Borde