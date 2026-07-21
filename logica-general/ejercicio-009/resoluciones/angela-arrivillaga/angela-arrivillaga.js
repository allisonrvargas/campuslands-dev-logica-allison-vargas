function simularEstadosTerror(datosEntrada) {
    if (!datosEntrada || !datosEntrada.items) {
        return { estado_actual: "desconocido", motivo: "Entrada inválida." };
    }

    const { items, prioridad } = datosEntrada;

    // Simulación del cambio de estado basado en prioridades de riesgo
    if (prioridad === "alta" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "renderizar cartelera",
        motivo: "Estado estable detectado en el lote de películas."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 009: Prueba 1 (Caso Ejemplo) ---");
console.log(simularEstadosTerror({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 009: Prueba 2 (Caso Borde - Sin datos críticos) ---");
console.log(simularEstadosTerror({
    items: ["pendiente"],
    prioridad: "baja",
    regla: "revisar bloqueados primero"
}));