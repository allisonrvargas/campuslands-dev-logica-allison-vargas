// Sistema Anti-Trampas para Call of Duty

function revisarPartida(listaReportes, tipoPartida) {
    // Regla 1: Si la lista esta vacia, no hacemos nada
    if (listaReportes.length === 0) {
        return {
            accion: "Ninguna acción",
            motivo: "Lobby sin reportes"
        };
    }

    // Buscamos si hay algun tramposo confirmado en la lista
    const hayTramposo = listaReportes.includes("trampa_confirmada");

    // Regla 2: Tramposo en torneo oficial
    if (hayTramposo && tipoPartida === "torneo_oficial") {
        return {
            accion: "Expulsión inmediata y pausa de torneo",
            motivo: "Se detectó un tramposo en plena competencia oficial"
        };
    }

    // Regla 3: Cualquier otro caso con reportes
    return {
        accion: "Enviar a revisión manual",
        motivo: "Hay reportes pendientes por evaluar en segundo plano"
    };
}

// --- PRUEBAS ---

// 1. Torneo bajo ataque
const prueba1 = revisarPartida(["limpio", "trampa_confirmada"], "torneo_oficial");
console.log("Prueba 1 (Torneo):", prueba1);

// 2. Partida clasificatoria estandar
const prueba2 = revisarPartida(["sospechoso", "limpio"], "clasificatoria");
console.log("Prueba 2 (Clasificatoria):", prueba2);

// 3. Lista vacia / Partida limpia
const prueba3 = revisarPartida([], "publica");
console.log("Prueba 3 (Vacía):", prueba3);