// Función para buscar y revisar el estado de los autos hiperdeportivos antes de la pista
function revisarHiperdeportivos(items, prioridad, regla) {
    // Caso borde: Si la lista de los autos viene vacía
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si en la búsqueda encontramos un auto bloqueado (ej. falla en el motor)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todos los autos hiperdeportivos están listos para arrancar
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}