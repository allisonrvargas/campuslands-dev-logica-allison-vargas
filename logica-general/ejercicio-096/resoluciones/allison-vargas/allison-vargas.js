/**
 * Función integradora para gestionar estados de frames en animación 3D.
 * Evalúa una matriz (lista de listas) de estados de renderizado.
 */
function gestionarFramesAnimacion(matrizFrames, regla) {
    // Aplanamos la matriz para facilitar la búsqueda
    const todosLosEstados = matrizFrames.flat();

    if (!validarMatriz(matrizFrames)) {
        return {
            accion: "pausar render",
            motivo: "la estructura de la matriz de frames es inválida o está vacía."
        };
    }

    const hayBloqueados = todosLosEstados.includes("bloqueado");

    if (regla === "revisar bloqueados primero" && hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza la corrección de frames corruptos en la matriz antes de continuar el renderizado 3D."
        };
    }

    return {
        accion: "continuar renderizado",
        motivo: "la matriz de frames está limpia y lista para la generación final de la animación."
    };
}

function validarMatriz(matriz) {
    return Array.isArray(matriz) && matriz.length > 0 && matriz.every(fila => Array.isArray(fila));
}