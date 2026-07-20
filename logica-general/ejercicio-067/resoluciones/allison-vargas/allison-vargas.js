// Función para detectar inconsistencias en una playlist musical
function revisarPlaylist(items, prioridad, regla) {
    // Caso borde: Si no hay canciones o elementos en la playlist
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos un archivo bloqueado (ej. canción no disponible o corrupta)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para continuar la reproducción
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}