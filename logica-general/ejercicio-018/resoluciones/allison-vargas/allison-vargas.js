/**
 * Gestiona un sistema de turnos para un taller de soldadura según la prioridad del trabajo.
 * @param {Array} colaTrabajos - Lista de objetos que representan los trabajos en espera.
 * @returns {Array|Object} - Lista ordenada por turnos de atención o reporte de error.
 */
function gestionarTurnosSoldadura(colaTrabajos) {
    // 1. Validación preventiva de la entrada
    if (!colaTrabajos || !Array.isArray(colaTrabajos) || colaTrabajos.length === 0) {
        return {
            accion: "Taller inactivo",
            motivo: "No hay trabajos de soldadura programados en la lista de espera."
        };
    }

    // 2. Inicialización de listas por niveles de urgencia
    const urgentes = [];
    const regulares = [];

    // 3. Ciclo para clasificar y organizar los turnos según las reglas de negocio
    colaTrabajos.forEach(trabajo => {
        // Regla A: Clasificación por urgencia o tipo de estructura crítica
        if (trabajo.prioridadAlta === true || trabajo.tipoSoldadura === "TIG Industrial") {
            urgentes.push({
                cliente: trabajo.cliente,
                tarea: trabajo.descripcion,
                tipo: trabajo.tipoSoldadura
            });
        } else {
            regulares.push({
                cliente: trabajo.cliente,
                tarea: trabajo.descripcion,
                tipo: trabajo.tipoSoldadura
            });
        }
    });

    // 4. Combinar las listas poniendo los trabajos urgentes primero en la fila de turnos
    return [...urgentes, ...regulares];
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Lista con trabajos normales y uno industrial urgente que debe ir primero
const trabajosDelDia = [
    { cliente: "Talleres Unidos", descripcion: "Rejas estándar", tipoSoldadura: "MIG", prioridadAlta: false },
    { cliente: "Constructora Alfa", descripcion: "Tubería de alta presión", tipoSoldadura: "TIG Industrial", prioridadAlta: true },
    { cliente: "Particular", descripcion: "Reparación chasis", tipoSoldadura: "Electrodo", prioridadAlta: false }
];

console.log("--- Caso Normal ---");
console.log(gestionarTurnosSoldadura(trabajosDelDia));

// 2. Caso Borde: No llegó ningún trabajo al taller
console.log("\n--- Caso Borde ---");
console.log(gestionarTurnosSoldadura([]));