// Función principal para buscar estados en el inventario de autos hiperdeportivos
function buscarEstadoAutos(items, prioridad, regla) {
    if (!validarInventario(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "el inventario de hiperdeportivos está vacío."
        };
    }

    if (esAutosBloqueados(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este auto primero porque presenta una anomalía técnica en el sistema."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con los autos, podemos continuar con las pruebas de rendimiento."
    };
}

// Funciones pequeñas para organizar mejor
function validarInventario(items) {
    return items && Array.isArray(items) && items.length > 0;
}

function esAutosBloqueados(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}