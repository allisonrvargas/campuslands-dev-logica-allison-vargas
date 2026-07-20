const procesarTurnoSoldadura = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "apagar estación", motivo: "Error: Metadatos del turno o inspección de soldadura incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "iniciar soldadura",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "la línea de producción cumple con los protocolos de seguridad y está lista."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarTurnoSoldadura(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas o vacías) ---");
console.log(procesarTurnoSoldadura(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Estación MIG Libre y Validada) ---");
console.log(procesarTurnoSoldadura(["aprobado", "aprobado"], "media", "verificar gases"));