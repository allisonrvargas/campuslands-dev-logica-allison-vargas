function procesarFlujoCienciaFiccion(datosEntrada) {
    if (!datosEntrada) return { accion: "detener", motivo: "Sin parámetros de flujo." };

    const { items, prioridad } = datosEntrada;

    // validar existencia de datos
    if (!items || items.length === 0) {
        return { accion: "abortar paso 1", motivo: "Flujo vacío." };
    }

    // evaluar bloqueos segun la prioridad
    if (prioridad === "alta" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // salida exitosa si pasa los controles anteriores
    return {
        accion: "completar flujo cinematográfico",
        motivo: "Todos los pasos validados correctamente."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 008: Prueba 1 (Caso Ejemplo) ---");
console.log(procesarFlujoCienciaFiccion({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 008: Prueba 2 (Caso Borde - Flujo normal sin trabas) ---");
console.log(procesarFlujoCienciaFiccion({
    items: ["aprobado", "pendiente"],
    prioridad: "baja",
    regla: "ejecutar secuencia estándar"
}));