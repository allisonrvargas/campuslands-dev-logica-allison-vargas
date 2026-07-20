/**
 * Función integradora para gestionar el sistema de turnos en soldadura.
 * Evalúa los estados de las piezas y asigna el turno de revisión.
 */
function gestionarTurnoSoldadura(items, prioridad, regla) {
    if (!validarTurnos(items)) {
        return {
            accion: "pausar taller",
            motivo: "la lista de piezas a soldar es inválida o no hay turnos pendientes."
        };
    }

    const hayBloqueados = items.includes("bloqueado");
    
    // Regla de negocio: Prioridad en seguridad y defectos de soldadura
    if (regla === "revisar bloqueados primero" && hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza la inspección de soldaduras críticas antes de avanzar al siguiente turno."
        };
    }

    return {
        accion: "continuar con el turno",
        motivo: "las piezas están listas y aprobadas; podemos proceder con la soldadura según el turno."
    };
}

function validarTurnos(items) {
    return Array.isArray(items) && items.length > 0;
}