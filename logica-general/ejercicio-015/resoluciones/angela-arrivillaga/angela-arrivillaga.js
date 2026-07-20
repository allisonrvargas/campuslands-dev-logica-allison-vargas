function aplicarReglasDibujoDigital(datosEntrada) {
    if (!datosEntrada || !Array.isArray(datosEntrada.items)) {
        return { accion: "cancelar exportación", motivo: "Los datos de las capas no son válidos." };
    }

    const { items, prioridad } = datosEntrada;
    let capasBloqueadas = 0;

    // recorrido de capas para contar las bloqueadas
    for (let i = 0; i < items.length; i++) {
        if (items[i] === "bloqueado") {
            capasBloqueadas++;
        }
    }

    if (prioridad === "alta" && capasBloqueadas > 0) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "renderizar lienzo",
        motivo: `Todas las capas (${items.length}) procesadas y listas para exportación.`
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 015: Prueba 1 (Caso Ejemplo) ---");
console.log(aplicarReglasDibujoDigital({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 015: Prueba 2 (Caso Borde - Capas Vacías) ---");
console.log(aplicarReglasDibujoDigital({
    items: [],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));