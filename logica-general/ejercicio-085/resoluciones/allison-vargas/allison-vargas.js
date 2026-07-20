// Función principal para ordenar prioridades en el taller mecánico
function ordenarPrioridadesTaller(items, prioridad, regla) {
    if (!validarTrabajos(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay trabajos pendientes en el taller."
        };
    }

    if (esTrabajoCritico(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este vehículo primero porque tiene una falla crítica de seguridad."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con los trabajos, podemos seguir con el mantenimiento rutinario."
    };
}

// Funciones pequeñas para organizar mejor
function validarTrabajos(items) {
    return items && Array.isArray(items) && items.length > 0;
}

function esTrabajoCritico(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}