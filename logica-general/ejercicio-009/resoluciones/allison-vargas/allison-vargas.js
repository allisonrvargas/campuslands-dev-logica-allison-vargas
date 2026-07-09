/**
 * Simula el cambio de estado de un personaje en una película de miedo según un evento.
 * @param {String} estadoActual - Estado inicial ("A salvo", "Alerta", "En peligro").
 * @param {String} evento - Acción que ocurre ("Escucha un ruido", "Entra al sotano", "Encuentra refugio").
 * @returns {Object} - Objeto con el nuevo estado y la acción/motivo correspondiente.
 */
function simularEstadoPelicula(estadoActual, evento) {
    // 1. Validación de entradas básicas
    if (!estadoActual || !evento || typeof estadoActual !== 'string' || typeof evento !== 'string') {
        return {
            nuevoEstado: "Desconocido",
            accion: "detener simulacion",
            motivo: "Los parámetros de entrada deben ser cadenas de texto válidas."
        };
    }

    // Normalizar los textos para evitar fallos por mayúsculas o tildes básicas
    const estado = estadoActual.trim().toLowerCase();
    const accionEvento = evento.trim().toLowerCase();

    // 2. Regla global: Encontrar refugio siempre salva al personaje
    if (accionEvento === "encuentra refugio") {
        return {
            nuevoEstado: "A salvo",
            accion: "reproducir musica tranquila",
            motivo: "El personaje ha encontrado un lugar seguro temporalmente."
        };
    }

    // 3. Máquina de estados según el contexto de la película
    if (estado === "a salvo") {
        if (accionEvento === "escucha un ruido") {
            return {
                nuevoEstado: "Alerta",
                accion: "cambiar iluminacion a penumbra",
                motivo: "Un ruido extraño despierta la sospecha del personaje."
            };
        }
        if (accionEvento === "entra al sotano") {
            return {
                nuevoEstado: "En peligro",
                accion: "reproducir musica de tension",
                motivo: "Entrar al sótano en una película de miedo siempre escala el nivel de riesgo."
            };
        }
    }

    if (estado === "alerta") {
        if (accionEvento === "entra al sotano") {
            return {
                nuevoEstado: "En peligro",
                accion: "reproducir musica de tension",
                motivo: "Entrar al sótano en una película de miedo siempre escala el nivel de riesgo."
            };
        }
        if (accionEvento === "escucha un ruido") {
            return {
                nuevoEstado: "Alerta",
                accion: "mantener suspenso",
                motivo: "El personaje ya está bajo aviso y el ruido confirma sus sospechas."
            };
        }
    }

    if (estado === "en peligro") {
        if (accionEvento === "escucha un ruido" || accionEvento === "entra al sotano") {
            return {
                nuevoEstado: "En peligro",
                accion: "activar susto en pantalla (jumpscare)",
                motivo: "El personaje se expuso demasiado en una zona de alto riesgo."
            };
        }
    }

    // 4. Caso de control si el evento o estado no coincide con ninguna regla lógica
    return {
        nuevoEstado: "Desconocido",
        accion: "detener simulacion",
        motivo: "El evento ingresado no corresponde a ninguna regla de la pelicula."
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: El personaje está alerta y decide cometer el error de ir al sótano
console.log("--- Caso Normal ---");
console.log(simularEstadoPelicula("Alerta", "Entra al sotano"));

// 2. Caso Borde: Se ingresa un evento completamente inválido que el sistema no sabe procesar
console.log("\n--- Caso Borde ---");
console.log(simularEstadoPelicula("En peligro", "Evento inexistente o invalido"));