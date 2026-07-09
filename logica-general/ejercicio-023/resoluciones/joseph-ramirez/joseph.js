const tomarDecisionEsports = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "pausar torneo", motivo: "Error: Metadatos de arbitraje o lista de estados de las salas incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "reanudar partida",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "las salas de juego cumplen con el reglamento oficial y están listas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(tomarDecisionEsports(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(tomarDecisionEsports(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Sala de Torneo Limpia sin Reportes Activos) ---");
console.log(tomarDecisionEsports(["aprobado", "aprobado"], "alta", "verificar latencia"));