// Función para gestionar estados en un pipeline de animación 3D
function revisarAnimacion3D(items, prioridad, regla) {
    // Caso borde: Si la lista de chequeo de frames o assets está vacía
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si se detecta un asset bloqueado (ej. modelo sin texturizar o fallo en rig)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para proceder al renderizado
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}