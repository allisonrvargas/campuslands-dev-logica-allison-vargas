const detectarInconsistenciasPlaylist = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "congelar reproductor", motivo: "Error: Metadatos de auditoría o lista de estados de la playlist incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "reproducir pista",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "la pista de audio cumple con las directrices de integridad y metadatos."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(detectarInconsistenciasPlaylist(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(detectarInconsistenciasPlaylist(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Escaner de Playlist Limpio e Íntegro) ---");
console.log(detectarInconsistenciasPlaylist(["aprobado", "aprobado"], "media", "analizar archivos duplicados"));