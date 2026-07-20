function detectarInconsistenciasPlaylist(datosEntrada) {
    if (!datosEntrada || !Array.isArray(datosEntrada.items)) {
        return { accion: "ignorar", motivo: "Estructura de playlist rota." };
    }

    const { items, prioridad } = datosEntrada;

    // si hay un bloqueo, se levanta la bandeera de revision
    if (prioridad === "alta" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // si no hay canciones, es una inconsistencia
    if (items.length === 0) {
        return {
            accion: "reparar playlist",
            motivo: "La playlist no contiene ninguna pista cargada."
        };
    }

    return { accion: "reproducir", motivo: "Playlist consistente y lista." };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 007: Prueba 1 (Caso Ejemplo) ---");
console.log(detectarInconsistenciasPlaylist({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 007: Prueba 2 (Caso Borde - Playlist Vacía) ---");
console.log(detectarInconsistenciasPlaylist({
    items: [],
    prioridad: "baja",
    regla: "verificar integridad"
}));