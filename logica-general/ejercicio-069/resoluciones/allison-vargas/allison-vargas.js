// Función para simular estados en catálogo de películas de terror
function revisarCatalogoTerror(items, prioridad, regla) {
    // Si no hay películas en la lista
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay pelis en la lista para revisar."
        };
    }

    // Si detectamos algo bloqueado (ej. título con restricción de edad o error de archivo)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque hay un problema con la peli de terror."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con la lista, podemos seguir con el resto."
    };
}