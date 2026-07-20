function procesarInstruccionesTurismo(datosEntrada) {
    if (!datosEntrada) return { accion: "error", motivo: "Faltan instrucciones base." };

    const { items, prioridad, regla } = datosEntrada;

    if (prioridad === "alta" && regla.includes("bloqueados primero")) {
        if (items && items.includes("bloqueado")) {
            return {
                accion: "revisar bloqueado",
                motivo: "la regla prioriza riesgos antes de tareas normales."
            };
        }
    }

    return {
        accion: "proceder con el itinerario",
        motivo: "Instrucciones de viaje procesadas sin registrar incidencias prioritarias."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 010: Prueba 1 (Caso Ejemplo) ---");
console.log(procesarInstruccionesTurismo({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 010: Prueba 2 (Caso Borde - Datos no definidos) ---");
console.log(procesarInstruccionesTurismo({
    items: undefined,
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));