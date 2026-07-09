const diagnosticarErroresTatuajes = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "cancelar procedimiento", motivo: "Error: Datos de la orden o inventario incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "autorizar sesión",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el diagnóstico del estado no reporta anomalías críticas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(diagnosticarErroresTatuajes(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas o vacías) ---");
console.log(diagnosticarErroresTatuajes(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Estudio Listo y Sanitizado) ---");
console.log(diagnosticarErroresTatuajes(["aprobado", "aprobado"], "media", "verificar tintas"));