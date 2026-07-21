// Función principal para gestionar estados de renderizado en animación 3D
function revisarEstadoRender(matrizEstados, regla) {
    if (!validarMatriz(matrizEstados)) {
        return {
            accion: "sin accion inmediata",
            motivo: "la lista de estados está vacía."
        };
    }

    if (esRenderBloqueado(matrizEstados, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque el frame tiene un problema de render."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con los frames, podemos seguir con la animación."
    };
}

// Funciones pequeñas para organizar mejor
function validarMatriz(matriz) {
    return matriz && matriz.length > 0;
}

function esRenderBloqueado(matriz, regla) {
    // Simulamos la verificación en una estructura de lista
    return regla === "revisar bloqueados primero" && matriz.includes("bloqueado");
}