function procesarMatrizAnimacion(datosEntrada) {
    if (!datosEntrada || !datosEntrada.items) {
        return { accion: "abortar", motivo: "Matriz de animación no inicializada." };
    }

    const { items, prioridad } = datosEntrada;
    let flagBloqueo = false;

    // simulacion
    for (let i = 0; i < items.length; i++) {
        if (items[i] === "bloqueado") {
            flagBloqueo = true;
            break;
        }
    }

    if (prioridad === "alta" && flagBloqueo) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "compilar fotogramas",
        motivo: "Matriz limpia. Todos los canales y huesos de animación están libres."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 016: Prueba 1 (Caso Ejemplo) ---");
console.log(procesarMatrizAnimacion({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 016: Prueba 2 (Caso Borde - Elementos nulos) ---");
console.log(procesarMatrizAnimacion({
    items: [],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));