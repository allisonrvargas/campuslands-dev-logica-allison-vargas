const organizarListaKickboxing = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "suspender cartelera", motivo: "Error: Faltan metadatos esenciales en la lista de peleadores." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUgly = esPendienteUrgente ? "atender pendiente urgente" : "autorizar combate",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el atleta cumple con todos los requerimientos de la lista."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(organizarListaKickboxing(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Parámetros vacíos) ---");
console.log(organizarListaKickboxing(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Peleador Listo para el Ring) ---");
console.log(organizarListaKickboxing(["aprobado", "aprobado"], "media", "verificar pesaje"));