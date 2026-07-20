function compararOpcionesPingpong(datosEntrada) {
    if (!datosEntrada || !datosEntrada.items) {
        return { accion: "rebotar", motivo: "No se enviaron opciones válidas de comparación." };
    }

    const { items, prioridad } = datosEntrada;

    // buscamos opciones inviables
    let tieneBloqueo = false;
    let index = 0;
    
    while (index < items.length) {
        if (items[index] === "bloqueado") {
            tieneBloqueo = true;
            break;
        }
        index++;
    }

    if (prioridad === "alta" && tieneBloqueo) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "seleccionar mejor opción",
        motivo: "Opciones comparadas sin encontrar riesgos estructurales."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 012: Prueba 1 (Caso Ejemplo) ---");
console.log(compararOpcionesPingpong({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 012: Prueba 2 (Caso Borde - Lista vacía de opciones) ---");
console.log(compararOpcionesPingpong({
    items: [],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));
