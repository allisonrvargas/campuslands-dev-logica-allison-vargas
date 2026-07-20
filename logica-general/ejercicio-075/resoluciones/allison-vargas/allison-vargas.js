// Función principal para aplicar reglas de negocio en proyectos de dibujo digital
function aplicarReglasDibujo(items, prioridad, regla) {
    if (!validarProyectos(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay proyectos en la lista para revisar."
        };
    }

    if (esRevisionUrgente(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque el archivo de dibujo tiene un problema."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con el proyecto, podemos seguir con el arte."
    };
}

// Funciones pequeñas para organizar
function validarProyectos(items) {
    return items && items.length > 0;
}

function esRevisionUrgente(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}