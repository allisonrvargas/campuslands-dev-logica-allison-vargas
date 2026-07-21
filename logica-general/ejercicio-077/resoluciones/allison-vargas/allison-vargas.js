// Función principal para decidir estados de elementos en arquitectura 3D
function decidirEstadoArquitectura(items, prioridad, regla) {
    if (!validarElementos(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay elementos de arquitectura en la lista para decidir."
        };
    }

    if (esElementoCritico(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque el modelo tiene un error de estructura."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con los elementos, podemos seguir con el modelado."
    };
}

// Funciones pequeñas para organizar la lógica
function validarElementos(items) {
    return items && items.length > 0;
}

function esElementoCritico(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}