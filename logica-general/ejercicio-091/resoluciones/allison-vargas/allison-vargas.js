/**
 * Función integradora para organizar el entrenamiento de kickboxing.
 * Aplica reglas de prioridad sobre una lista de estados.
 */
function organizarEntrenamiento(items, prioridad, regla) {
    if (!validarLista(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "la lista de combates/entrenamientos está vacía."
        };
    }

    // Identificación de estados críticos para priorización
    const hayBloqueados = items.includes("bloqueado");
    
    if (regla === "revisar bloqueados primero" && hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza la revisión de lesiones o bloqueos técnicos antes de continuar el entrenamiento."
        };
    }

    // Lógica para estados normales
    return {
        accion: "continuar con el combate",
        motivo: "todos los estados están bajo control; el entrenamiento puede seguir según lo planeado."
    };
}

function validarLista(items) {
    return Array.isArray(items) && items.length > 0;
}