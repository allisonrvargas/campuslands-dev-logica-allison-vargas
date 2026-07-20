function gestionarTurnosSoldadura(datosEntrada) {
    if (!datosEntrada) return { accion: "bloquear línea", motivo: "Falta payload de control." };

    const { items, prioridad } = datosEntrada;
    let hayFallaTurno = false;

    // escanea las estaciones asignadas
    let index = 0;
    while (index < (items || []).length) {
        if (items[index] === "bloqueado") {
            hayFallaTurno = true;
            break;
        }
        index++;
    }

    if (prioridad === "alta" && hayFallaTurno) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "asignar siguiente turno",
        motivo: "Estaciones de soldadura operando dentro de los rangos seguros."
    };
}

// pruebas de la funcion
console.log("\n--- Ejercicio 018: Prueba 1 (Caso Ejemplo) ---");
console.log(gestionarTurnosSoldadura({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log("\n--- Ejercicio 018: Prueba 2 (Caso Borde - Lote indefinido) ---");
console.log(gestionarTurnosSoldadura({
    items: undefined,
    prioridad: "baja",
    regla: "estándar"
}));