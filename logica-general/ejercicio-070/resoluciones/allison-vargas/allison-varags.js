// Función para gestionar itinerarios de viaje
function revisarItinerarioViaje(items, prioridad, regla) {
    // Si no hay nada registrado en el itinerario
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay nada en el itinerario para revisar."
        };
    }

    // Si detectamos algo bloqueado (ej. vuelo cancelado o reserva sin confirmar)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque hay un problema con el viaje."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con el itinerario, podemos seguir con el resto."
    };
}