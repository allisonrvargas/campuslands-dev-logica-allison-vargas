const procesarMatrizAnimacion = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "suspender render", motivo: "Error: Datos de la matriz de animación incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "procesar fotogramas",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "la matriz de fotogramas cumple con las reglas de negocio y está lista."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(procesarMatrizAnimacion(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas o vacías) ---");
console.log(procesarMatrizAnimacion(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Cola de Renderizado Despejada) ---");
console.log(procesarMatrizAnimacion(["aprobado", "aprobado"], "media", "compilar escena"));