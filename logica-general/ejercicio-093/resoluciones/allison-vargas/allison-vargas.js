/**
 * Función integradora para la resolución de casos en paracaidismo.
 * Evalúa el estado de los equipos y autoriza o bloquea saltos.
 */
function resolverCasoParacaidismo(items, prioridad, regla) {
    if (!validarEquipo(items)) {
        return {
            accion: "prohibido saltar",
            motivo: "los datos del equipo de paracaidismo no son válidos."
        };
    }

    const hayBloqueados = items.includes("bloqueado");
    
    if (regla === "revisar bloqueados primero" && hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza la revisión de fallos en el paracaídas antes de permitir cualquier salto."
        };
    }

    return {
        accion: "autorizado para saltar",
        motivo: "todo el equipo está aprobado y en condiciones óptimas para el salto."
    };
}

function validarEquipo(items) {
    return Array.isArray(items) && items.length > 0;
}