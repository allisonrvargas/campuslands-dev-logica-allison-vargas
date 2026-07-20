/**
 * Función integradora para gestionar el flujo de trabajo en dibujo digital.
 * Aplica reglas de negocio sobre los estados de las capas/archivos.
 */
function procesarFlujoDibujo(items, prioridad, regla) {
    if (!validarCapas(items)) {
        return {
            accion: "pausar exportacion",
            motivo: "la lista de capas o archivos está vacía o es inválida."
        };
    }

    const hayBloqueados = items.includes("bloqueado");
    
    // Regla de negocio: Prioridad absoluta a archivos bloqueados/corruptos
    if (regla === "revisar bloqueados primero" && hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza la corrección de archivos corruptos antes de proceder con el renderizado."
        };
    }

    return {
        accion: "continuar exportación",
        motivo: "el archivo está limpio y listo para exportar a alta resolución."
    };
}

function validarCapas(items) {
    return Array.isArray(items) && items.length > 0;
}