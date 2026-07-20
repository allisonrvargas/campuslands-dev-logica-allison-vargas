function evaluarTablaDecisionArquitectura(datosEntrada) {
    if (!datosEntrada || !Array.isArray(datosEntrada.items)) {
        return { accion: "suspender", motivo: "Estructura de datos incompleta." };
    }

    const { items, prioridad } = datosEntrada;

    // busca el estado
    const tieneBloqueos = items.includes("bloqueado");

    if (prioridad === "alta" && tieneBloqueos) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "aprobar diseño estructural",
        motivo: "No se identificaron planos retenidos o con bloqueos críticos."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 017: Prueba 1 (Caso Ejemplo) ---");
console.log(evaluarTablaDecisionArquitectura({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 017: Prueba 2 (Caso Borde - Sin prioridad) ---");
console.log(evaluarTablaDecisionArquitectura({
    items: ["aprobado", "bloqueado"],
    prioridad: "baja",
    regla: "omitir alertas"
}));