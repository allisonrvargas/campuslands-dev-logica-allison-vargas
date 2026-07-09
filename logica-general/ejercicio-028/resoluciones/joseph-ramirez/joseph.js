const procesarFlujoCienciaFiccion = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "pausar produccion", motivo: "Error: Metadatos del flujo o lista de estados de las tomas incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "renderizar escena",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "las tomas cumplen con los criterios del pipeline y estan listas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarFlujoCienciaFiccion(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(procesarFlujoCienciaFiccion(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Toma de CGI Aprobada y Lista para Postproducción) ---");
console.log(procesarFlujoCienciaFiccion(["aprobado", "aprobado"], "media", "verificar tracking de camara"));