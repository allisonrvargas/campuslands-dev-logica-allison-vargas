function evaluarEficienciaEnergetica(dispositivo) {
    // Caso borde: Datos nulos, horas negativas o superiores a un día real (24h)
    if (!dispositivo || dispositivo.horasEncendido < 0 || dispositivo.horasEncendido > 24 || dispositivo.consumoWatts < 0) {
        return {
            consumoDiarioWh: 0,
            eficienciaNivel: "error_telemetria",
            requiereOptimizacion: false
        };
    }

    const { consumoWatts, horasEncendido } = dispositivo;

    // Proceso: Calcular consumo diario acumulado
    const consumoDiarioWh = consumoWatts * horasEncendido;

    // Evaluar regla de negocio para consumo crítico
    if (consumoDiarioWh > 1200) {
        return {
            consumoDiarioWh: consumoDiarioWh,
            eficienciaNivel: "alta_demanda",
            requiereOptimizacion: true
        };
    }

    return {
        consumoDiarioWh: consumoDiarioWh,
        eficienciaNivel: "eficiente",
        requiereOptimizacion: false
    };
}

// Ejecución de pruebas para verificar consola
console.log(evaluarEficienciaEnergetica({
    nombre: "Servidor IoT ESP32",
    consumoWatts: 60,
    horasEncendido: 24
})); // Caso Normal

console.log(evaluarEficienciaEnergetica({
    nombre: "Foco Inteligente",
    consumoWatts: 12,
    horasEncendido: -5
})); // Caso Borde