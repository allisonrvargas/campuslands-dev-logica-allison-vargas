function organizarListasKickboxing(datosEntrada) {
    if (!datosEntrada || !Array.isArray(datosEntrada.items)) {
        return { accion: "suspender", motivo: "Lista de competidores corrupta o vacía." };
    }

    const { items, prioridad } = datosEntrada;
    let contadorBloqueados = 0;

    // evalua cada valor en el listad
    for (let i = 0; i < items.length; i++) {
        if (items[i] === "bloqueado") {
            contadorBloqueados++;
        }
    }

    // si hay bloqueados con prioridad alta, detenemos la lista
    if (prioridad === "alta" && contadorBloqueados > 0) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "generar llaves de combate",
        motivo: `Lista organizada con éxito. ${items.length} competidores validados.`
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 011: Prueba 1 (Caso Ejemplo) ---");
console.log(organizarListasKickboxing({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 011: Prueba 2 (Caso Borde - Lista sin incidencias) ---");
console.log(organizarListasKickboxing({
    items: ["aprobado", "pendiente", "aprobado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));