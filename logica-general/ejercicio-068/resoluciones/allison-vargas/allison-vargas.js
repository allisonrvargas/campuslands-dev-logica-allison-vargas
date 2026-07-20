// Función para gestionar el flujo de selección en películas de ciencia ficción
function revisarPeliculasSciFi(items, prioridad, regla) {
    // Si no hay películas, no hay flujo
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay películas en la lista para revisar."
        };
    }

    // Si hay algo bloqueado (ej. error en datos o restricción), va primero
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque hay un problema con la peli."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con el flujo, podemos seguir con el resto de la lista."
    };
}