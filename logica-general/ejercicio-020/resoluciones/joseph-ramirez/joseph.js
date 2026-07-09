const procesarSeleccionComida = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "detener cocina", motivo: "Error: Metadatos de selección o estado de la orden incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "despachar pedido",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "la orden cumple con las reglas de negocio y está lista para el cliente."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarSeleccionComida(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas o vacías) ---");
console.log(procesarSeleccionComida(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Orden Despejada lista para Despacho) ---");
console.log(procesarSeleccionComida(["aprobado", "aprobado"], "media", "verificar ingredientes"));