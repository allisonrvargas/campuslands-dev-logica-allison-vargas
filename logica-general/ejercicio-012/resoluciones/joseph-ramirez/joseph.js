const compararOpcionesPingPong = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "cancelar emparejamiento", motivo: "Error: Metadatos del torneo incompletos o nulos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "iniciar partido",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "las opciones de la mesa de juego son válidas y están listas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(compararOpcionesPingPong(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Entradas nulas o vacías) ---");
console.log(compararOpcionesPingPong(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Mesa de Pingpong Despejada) ---");
console.log(compararOpcionesPingPong(["aprobado", "aprobado"], "media", "asignar mesa libre"));