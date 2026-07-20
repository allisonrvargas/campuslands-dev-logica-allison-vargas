function buscarHiperdeportivo(garajeHiperdeportivos, modeloBuscar) {
    // Caso borde: Garaje vacío, datos nulos o término de búsqueda no definido
    if (!garajeHiperdeportivos || garajeHiperdeportivos.length === 0 || !modeloBuscar) {
        return {
            autoEncontrado: false,
            estadoPista: "garaje_vacio_o_no_encontrado",
            motivo: "No se registran hiperdeportivos en el lote de inventario para iniciar el escaneo."
        };
    }

    // Normalizar la cadena de búsqueda para evitar problemas de mayúsculas/minúsculas
    const termino = modeloBuscar.toLowerCase().trim();

    // Proceso: Búsqueda del elemento específico dentro de la lista
    const auto = garajeHiperdeportivos.find(coche => coche.modelo.toLowerCase().trim() === termino);

    // Evaluar reglas de negocio en base al resultado de la búsqueda
    if (!auto) {
        return {
            autoEncontrado: false,
            estadoPista: "no_disponible",
            motivo: `El modelo '${modeloBuscar}' no se encuentra registrado en el inventario actual del garaje.`
        };
    }

    if (auto.disponible === true) {
        return {
            autoEncontrado: true,
            estadoPista: "autorizado_salida",
            motivo: `El ${auto.marca} ${auto.modelo} se encuentra listo en el garaje y disponible para pruebas de alta velocidad.`
        };
    }

    return {
        autoEncontrado: true,
        estadoPista: "mantenimiento_critico",
        motivo: `El ${auto.marca} ${auto.modelo} fue localizado, pero está bloqueado por telemetría o cambio de neumáticos.`
    };
}

// Ejecución de pruebas para verificar consola
const lotePista = [
    { modelo: "Chiron", marca: "Bugatti", disponible: true },
    { modelo: "Jesko", marca: "Koenigsegg", disponible: false }
];

console.log(buscarHiperdeportivo(lotePista, "Chiron")); // Caso Normal
console.log(buscarHiperdeportivo([], "Huayra"));       // Caso Borde