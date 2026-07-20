const procesarInventarioQuimico = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "congelar inventario", motivo: "Error: Datos de la inspección de reactivos o fórmulas incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "autorizar formula",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "los compuestos del inventario cumplen con las reglas de negocio y están listos."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarInventarioQuimico(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas o vacías) ---");
console.log(procesarInventarioQuimico(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Compuestos Estables y Listos para Mezcla) ---");
console.log(procesarInventarioQuimico(["aprobado", "aprobado"], "media", "analizar reactivos"));