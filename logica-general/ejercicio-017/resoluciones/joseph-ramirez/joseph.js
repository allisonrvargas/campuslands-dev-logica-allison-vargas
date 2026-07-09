const procesarDecisionArquitectura = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "detener modelo", motivo: "Error: Metadatos de la tabla de decisión o plano incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "aprobar plano",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el plano estructural cumple con las reglas de negocio y está despejado."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarDecisionArquitectura(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas o vacías) ---");
console.log(procesarDecisionArquitectura(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Plano BIM Listo para Renderizado) ---");
console.log(procesarDecisionArquitectura(["aprobado", "aprobado"], "media", "verificar cimientos"));