/**
 * Función integradora para comparar opciones en el torneo de pingpong.
 * Compara estados de juego y aplica reglas de prioridad.
 */
function compararOpcionesPingpong(items, prioridad, regla) {
    if (!validarEntrada(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "la lista de partidos o estados está vacía."
        };
    }

    // Lógica de comparación de opciones basada en reglas
    const hayBloqueados = items.includes("bloqueado");
    
    if (regla === "revisar bloqueados primero" && hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos en el equipamiento o arbitraje antes de continuar los partidos."
        };
    }

    return {
        accion: "continuar torneo",
        motivo: "no se encontraron bloqueos; el torneo de pingpong puede continuar con normalidad."
    };
}

function validarEntrada(items) {
    return Array.isArray(items) && items.length > 0;
}