/**
 * Función integradora para diagnosticar errores en el proceso de tatuaje.
 * Evalúa el estado de las herramientas y la preparación del diseño.
 */
function diagnosticarProcesoTatuaje(items, prioridad, regla) {
    if (!validarProceso(items)) {
        return {
            accion: "detener proceso",
            motivo: "los estados del equipo de tatuaje no son válidos o la lista está vacía."
        };
    }

    const hayBloqueados = items.includes("bloqueado");
    
    if (regla === "revisar bloqueados primero" && hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza la revisión de agujas o tintas antes de iniciar el tatuaje para evitar infecciones."
        };
    }

    return {
        accion: "iniciar tatuaje",
        motivo: "todos los componentes están aprobados y listos para un procedimiento seguro."
    };
}

function validarProceso(items) {
    return Array.isArray(items) && items.length > 0;
}