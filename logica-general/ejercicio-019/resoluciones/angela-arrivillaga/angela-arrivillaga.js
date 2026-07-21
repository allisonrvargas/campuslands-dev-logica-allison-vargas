function verificarInventarioQuimico(datosEntrada) {
    if (!datosEntrada || !datosEntrada.items) {
        return { accion: "cerrar válvulas", motivo: "Datos de reactivos no disponibles." };
    }

    const { items, prioridad } = datosEntrada;

    // acumulador logico
    const totalBloqueados = items.reduce((acc, estado) => {
        return estado === "bloqueado" ? acc + 1 : acc;
    }, 0);

    if (prioridad === "alta" && totalBloqueados > 0) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "autorizar preparación de fórmula",
        motivo: "Todos los reactivos se encuentran estables y aprobados."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 019: Prueba 1 (Caso Ejemplo) ---");
console.log(verificarInventarioQuimico({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 019: Prueba 2 (Caso Borde - Reactivos limpios) ---");
console.log(verificarInventarioQuimico({
    items: ["aprobado", "aprobado", "pendiente"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));