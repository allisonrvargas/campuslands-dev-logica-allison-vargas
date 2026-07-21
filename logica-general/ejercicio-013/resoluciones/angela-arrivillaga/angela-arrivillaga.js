function resolverCasosParacaidismo(datosEntrada) {
    if (!datosEntrada) return { accion: "frenar", motivo: "Falta objeto de control de saltos." };

    const { items, prioridad } = datosEntrada;

    // reduce la lista con indicadores de riesgo
    const conteoRiesgos = (items || []).reduce((acumulador, item) => {
        return item === "bloqueado" ? acumulador + 1 : acumulador;
    }, 0);

    if (prioridad === "alta" && conteoRiesgos > 0) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "autorizar despegue",
        motivo: "Todos los casos de revisión de equipo pasaron el control estándar."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 013: Prueba 1 (Caso Ejemplo) ---");
console.log(resolverCasosParacaidismo({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 013: Prueba 2 (Caso Borde - Parámetros nulos o ausentes) ---");
console.log(resolverCasosParacaidismo({
    items: null,
    prioridad: "baja",
    regla: "evaluación por defecto"
}));