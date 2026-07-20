/**
 * Función integradora para gestionar decisiones en arquitectura 3D.
 * Utiliza una lógica de tabla de decisión para evaluar elementos del diseño.
 */
function evaluarElementosArquitectura(elementos, regla) {
    // Validar entrada
    if (!validarEntrada(elementos)) {
        return {
            accion: "pausar diseño",
            motivo: "la lista de elementos arquitectónicos es inválida o está vacía."
        };
    }

    // Tabla de decisión: Evaluación de estados críticos
    const tieneBloqueados = elementos.includes("bloqueado");
    const tienePendientes = elementos.includes("pendiente");

    if (regla === "revisar bloqueados primero" && tieneBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza la corrección de errores estructurales bloqueantes en el diseño 3D."
        };
    }

    if (tienePendientes) {
        return {
            accion: "continuar con ajustes",
            motivo: "existen elementos pendientes que requieren revisión de texturas o iluminación."
        };
    }

    return {
        accion: "finalizar renderizado",
        motivo: "todos los elementos están aprobados; el modelo 3D está listo para la presentación."
    };
}

function validarEntrada(elementos) {
    return Array.isArray(elementos) && elementos.length > 0;
}