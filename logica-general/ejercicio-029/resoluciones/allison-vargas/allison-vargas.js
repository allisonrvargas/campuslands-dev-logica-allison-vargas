/**
 * Simula el cambio de estado de los personajes en una película de miedo según el entorno.
 * @param {Array} grupoSobrevivientes - Lista de personajes con sus niveles de miedo y recursos.
 * @returns {Object} - Reporte final del estado de supervivencia del grupo.
 */
function simularEstadosTerror(grupoSobrevivientes) {
    // 1. Validación preventiva de la entrada
    if (!grupoSobrevivientes || !Array.isArray(grupoSobrevivientes) || grupoSobrevivientes.length === 0) {
        return {
            estadoGrupal: "Escena vacía",
            motivo: "No hay personajes registrados en la escena actual para simular sus estados."
        };
    }

    const reportePersonajes = [];
    let bajasTotales = 0;

    // 2. Ciclo para evaluar el estado de cada personaje según las reglas del entorno
    grupoSobrevivientes.forEach(personaje => {
        let estadoActual = "A salvo";
        let detallesRiesgo = "El entorno se mantiene en calma temporal.";

        // Regla A: Si el monstruo está cerca y no tiene batería en la linterna, cambia a estado Crítico/Atrapado
        if (personaje.monstruoCerca === true && personaje.bateriaLinterna === 0) {
            estadoActual = "Atrapado";
            detallesRiesgo = "El peligro los alcanzó en la oscuridad total sin luz para escapar.";
            bajasTotales++;
        }
        // Regla B: Si el monstruo está cerca pero aún tiene batería en la linterna
        else if (personaje.monstruoCerca === true && personaje.bateriaLinterna > 0) {
            estadoActual = "Perseguido";
            detallesRiesgo = "El peligro está al acecho, pero la linterna encendida les permite correr.";
        }
        // Regla C: Si el peligro está lejos pero se quedó completamente solo en la habitación
        else if (personaje.estaSolo === true) {
            estadoActual = "Asustado";
            detallesRiesgo = "No hay peligro directo en este momento, pero el aislamiento eleva el pánico.";
        }

        // Guardar el estado procesado del personaje
        reportePersonajes.push({
            nombre: personaje.nombre,
            estadoFinal: estadoActual,
            situacion: detallesRiesgo
        });
    });

    // 3. Emitir el reporte de la escena de terror
    return {
        estadoGrupal: bajasTotales === grupoSobrevivientes.length ? "Fin de la película (Todos atrapados)" : "Simulación completada",
        personajesProcesados: grupoSobrevivientes.length,
        sobrevivientesActivos: grupoSobrevivientes.length - bajasTotales,
        monitoreo: reportePersonajes
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un grupo con diferentes situaciones en el mapa
const escenaBosque = [
    { nombre: "Carlos", monstruoCerca: false, bateriaLinterna: 50, estaSolo: true },  // Asustado
    { nombre: "Sofía", monstruoCerca: true, bateriaLinterna: 20, estaSolo: false },  // Perseguido
    { nombre: "Luis", monstruoCerca: true, bateriaLinterna: 0, estaSolo: true }      // Atrapado
];

console.log("--- Caso Normal ---");
console.log(JSON.stringify(simularEstadosTerror(escenaBosque), null, 2));

// 2. Caso Borde: El grupo ingresa completamente vacío
console.log("\n--- Caso Borde ---");
console.log(simularEstadosTerror([]));