function validarSenalSensor(sensor) {
    // Caso borde: Datos nulos o voltajes negativos físicamente inválidos para el ADC
    if (!sensor || sensor.voltajeLectura < 0 || sensor.limiteMaximo < 0) {
        return {
            estadoSenal: "error_voltaje_negativo",
            voltajeExcedido: 0,
            activarProteccion: false
        };
    }

    const { voltajeLectura, limiteMaximo } = sensor;

    // Proceso: Evaluar regla de negocio para sobretensión
    if (voltajeLectura >= limiteMaximo) {
        // Calcular la diferencia exacta del exceso
        const voltajeExcedido = Number((voltajeLectura - limiteMaximo).toFixed(2));
        
        return {
            estadoSenal: "sobrecarga",
            voltajeExcedido: voltajeExcedido,
            activarProteccion: true
        };
    }

    return {
        estadoSenal: "lectura_nominal",
        voltajeExcedido: 0,
        activarProteccion: false
    };
}

// Ejecución de pruebas para verificar consola
console.log(validarSenalSensor({
    tipo: "Infrarrojo TCRT5000",
    voltajeLectura: 4.8,
    limiteMaximo: 3.3
})); // Caso Normal

console.log(validarSenalSensor({
    tipo: "Ultrasonico HC-SR04",
    voltajeLectura: -1.2,
    limiteMaximo: 5.0
})); // Caso Borde