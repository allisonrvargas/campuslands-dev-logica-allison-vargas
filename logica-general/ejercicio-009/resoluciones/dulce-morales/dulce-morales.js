function simularEstadoTerror(simulacionPersonaje) {
    // Caso borde primario: Objeto vacío o tipos de datos erróneos
    if (!simulacionPersonaje || typeof simulacionPersonaje !== "object") {
        return {
            estadoPersonaje: "error_simulacion",
            accionInmediata: "reiniciar_sistema",
            motivo: "Error: No se proporcionaron datos de simulación válidos."
        };
    }

    const { nombre, nivelMiedo, tieneLinterna, estadoAmbiente } = simulacionPersonaje;

    // Caso borde secundario: Normalización de rangos de miedo
    if (nivelMiedo < 0 || nivelMiedo > 100) {
        return {
            estadoPersonaje: "error_simulacion",
            accionInmediata: "auditar_datos",
            motivo: "El nivel de miedo proporcionado está fuera del rango matemático permitido (0-100)."
        };
    }

    // Proceso - Regla 1: Pánico Crítico (Prioridad absoluta de peligro)
    if (nivelMiedo >= 80 || estadoAmbiente === "persecucion") {
        return {
            estadoPersonaje: "panico",
            accionInmediata: "huir_o_esconderse",
            motivo: "El nivel de miedo es critico (mayor o igual a 80). El personaje ha entrado en panico total a pesar de las condiciones externas o herramientas."
        };
    }

    // Proceso - Regla 2: Evaluación en entorno de Alerta
    if (estadoAmbiente === "alerta") {
        if (tieneLinterna) {
            return {
                estadoPersonaje: "alerta_controlada",
                accionInmediata: "mantener_posicion",
                motivo: `El personaje ${nombre} mantiene el control en un entorno de alerta gracias a contar con una linterna funcional.`
            };
        } else {
            return {
                estadoPersonaje: "vulnerable",
                accionInmediata: "buscar_refugio_oscuro",
                motivo: `El entorno es inestable y ${nombre} no posee linterna para explorar de forma segura. Estado vulnerable.`
            };
        }
    }

    // Estado por defecto: Entorno Seguro y miedo bajo-moderado
    return {
        estadoPersonaje: "estable",
        accionInmediata: "explorar_entorno",
        motivo: `El personaje ${nombre} se encuentra en un área estable y con signos vitales dentro del parámetro normal.`
    };
}

// Ejecución de pruebas para verificar consola
const personajeControlado = {
    nombre: "Carlos",
    nivelMiedo: 45,
    tieneLinterna: true,
    estadoAmbiente: "alerta"
};

const personajeAterrorizado = {
    nombre: "Ana",
    nivelMiedo: 85,
    tieneLinterna: true,
    estadoAmbiente: "seguro"
};

console.log(simularEstadoTerror(personajeControlado));   // Caso Normal
console.log(simularEstadoTerror(personajeAterrorizado)); // Caso Borde