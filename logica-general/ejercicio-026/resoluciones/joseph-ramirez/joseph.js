const buscarElementosHiperdeportivos = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "suspender telemetría", motivo: "Error: Metadatos de búsqueda o estados del hiperdeportivo incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "liberar a pista",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el hiperdeportivo ha pasado todas las pruebas de seguridad y telemetría."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(buscarElementosHiperdeportivos(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(buscarElementosHiperdeportivos(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Escaner Limpio en Monoplaza / Hiperdeportivo) ---");
console.log(buscarElementosHiperdeportivos(["aprobado", "aprobado"], "media", "analizar suspension activa"));