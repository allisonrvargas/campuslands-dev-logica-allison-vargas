// Función principal para gestionar flujos en una base de datos de cine sci-fi
function procesarFlujoPelicula(items, prioridad, regla) {
    if (!validarLista(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "la lista de archivos de películas está vacía."
        };
    }

    if (esErrorEnFlujo(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este archivo de película primero porque el flujo de render está bloqueado."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con los archivos, podemos continuar con la postproducción."
    };
}

// Funciones pequeñas para organizar mejor
function validarLista(items) {
    return items && Array.isArray(items) && items.length > 0;
}

function esErrorEnFlujo(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}