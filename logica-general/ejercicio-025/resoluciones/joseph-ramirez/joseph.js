const ordenarPrioridadesTaller = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "detener bahías", motivo: "Error: Metadatos de la regla o lista de estados de la orden mecánicas incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "asignar a técnico",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el vehículo cumple con las condiciones operativas y está listo para reparación."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(ordenarPrioridadesTaller(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(ordenarPrioridadesTaller(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Vehículo Inspeccionado y Listo para Mantenimiento) ---");
console.log(ordenarPrioridadesTaller(["aprobado", "aprobado"], "media", "verificar orden de trabajo"));