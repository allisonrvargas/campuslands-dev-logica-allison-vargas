function diagnosticarErroresTatuajes(datosEntrada) {
    if (!datosEntrada || !datosEntrada.items) {
        return { accion: "abortar", motivo: "Reporte de diagnóstico sin datos legibles." };
    }

    const { items, prioridad } = datosEntrada;
    let indicadorAlerta = false;

    // validacion
    for (const estado of items) {
        if (estado === "bloqueado") {
            indicadorAlerta = true;
            break;
        }
    }

    if (prioridad === "alta" && indicadorAlerta) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "proceder con la sesión",
        motivo: "Diagnóstico completado sin errores críticos detectados."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 014: Prueba 1 (Caso Ejemplo) ---");
console.log(diagnosticarErroresTatuajes({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 014: Prueba 2 (Caso Borde - Datos limpios y estables) ---");
console.log(diagnosticarErroresTatuajes({
    items: ["aprobado", "aprobado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));