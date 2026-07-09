const filtrarInventarioMotos = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "congelar inventario", motivo: "Error: Metadatos de la regla o lista de estados del stock incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "autorizar despacho",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "las unidades del inventario cumplen con las condiciones y están listas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(filtrarInventarioMotos(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(filtrarInventarioMotos(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Unidades Verificadas Listas para Distribución) ---");
console.log(filtrarInventarioMotos(["aprobado", "aprobado"], "alta", "verificar numero chasis"));