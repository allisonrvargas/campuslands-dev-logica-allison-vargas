const procesarReglasDibujo = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "congelar lienzo", motivo: "Error: Metadatos del archivo de dibujo digital incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "renderizar ilustración",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el lienzo cumple con las reglas de negocio y está listo para exportar."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarReglasDibujo(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas o vacías) ---");
console.log(procesarReglasDibujo(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Mesa de Trabajo Despejada) ---");
console.log(procesarReglasDibujo(["aprobado", "aprobado"], "media", "exportar capas"));