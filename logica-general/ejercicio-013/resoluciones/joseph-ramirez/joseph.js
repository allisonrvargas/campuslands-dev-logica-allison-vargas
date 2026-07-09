const resolverCasoParacaidismo = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "cancelar salto", motivo: "Error: Lista de chequeo técnico incompleta o nula." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "autorizar despegue",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "la revisión del equipamiento es óptima para el salto."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(resolverCasoParacaidismo(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas o vacías) ---");
console.log(resolverCasoParacaidismo(null, "baja", ""));

print("\n--- Prueba 3: Caso Propio (Plan de Vuelo y Apertura Despejado) ---");
console.log(resolverCasoParacaidismo(["aprobado", "aprobado"], "media", "verificar clima"));

