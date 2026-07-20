function ordenarPrioridadesTaller(datosEntrada) {
    if (!datosEntrada || !datosEntrada.items) {
        return { accion: "no_ordenar", motivo: "Faltan datos de origen." };
    }

    const { items, prioridad, regla } = datosEntrada;

    if (prioridad === "alta" && regla.includes("bloqueado")) {
        if (items.includes("bloqueado")) {
            return {
                accion: "revisar bloqueado",
                motivo: "la regla prioriza riesgos antes de tareas normales."
            };
        }
    }

    // si no es prioritario lo ordenamos alfabeticamente
    const itemsOrdenados = [...items].sort();
    return {
        accion: "ordenar por nombre",
        motivo: `Lista organizada de forma estándar: ${itemsOrdenados.join(", ")}`
    };
}

// pruebas de la funcion
console.log("\n--- Prueba 1 (Caso Ejemplo) ---");
console.log(ordenarPrioridadesTaller({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Prueba 2 (Caso Borde - Flujo normal sin riesgos) ---");
console.log(ordenarPrioridadesTaller({
    items: ["pendiente", "aprobado"],
    prioridad: "baja",
    regla: "procesar de forma estándar"
}));