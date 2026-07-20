function buscarHiperdeportivo(datosEntrada) {
    if (!datosEntrada || !datosEntrada.items) {
        return { accion: "cancelar", motivo: "No hay catálogo de autos para evaluar." };
    }

    const { items, prioridad, regla } = datosEntrada;

    // busca si la regla exige revisar bloqueados y si la prioridad es alta
    if (prioridad === "alta" && regla.toLowerCase().includes("bloqueado")) {
        const encontrado = items.find(auto => auto === "bloqueado");
        if (encontrado) {
            return {
                accion: "revisar bloqueado",
                motivo: "la regla prioriza riesgos antes de tareas normales."
            };
        }
    }

    return {
        accion: "listar autos disponibles",
        motivo: "No se encontraron alertas o bloqueos críticos en la búsqueda."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 006: Prueba 1 (Caso Ejemplo) ---");
console.log(buscarHiperdeportivo({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 006: Prueba 2 (Caso Borde - Todo limpio) ---");
console.log(buscarHiperdeportivo({
    items: ["bugatti", "koenigsegg"],
    prioridad: "baja",
    regla: "revisar bloqueados primero"
}));