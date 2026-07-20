/**
 * Busca un auto hiperdeportivo en el catálogo según criterios específicos de rendimiento.
 * @param {Array} catalogoHiperdeportivos - Lista de objetos con los autos disponibles.
 * @param {Object} criteriosBusqueda - Filtros de búsqueda (marcaModelo, velocidadMinimaKmH).
 * @returns {Object} - Resultado con los datos del auto hallado o reporte de ausencia.
 */
function buscarHiperdeportivo(catalogoHiperdeportivos, criteriosBusqueda) {
    // 1. Validación preventiva de las entradas
    if (!catalogoHiperdeportivos || !Array.isArray(catalogoHiperdeportivos) || catalogoHiperdeportivos.length === 0) {
        return {
            estado: "Búsqueda fallida",
            motivo: "El catálogo de autos hiperdeportivos está vacío o no es válido."
        };
    }

    if (!criteriosBusqueda || typeof criteriosBusqueda !== 'object') {
        return {
            estado: "Búsqueda fallida",
            motivo: "No se especificaron los criterios o filtros de búsqueda para el vehículo."
        };
    }

    const { marcaModelo, velocidadMinimaKmH } = criteriosBusqueda;
    let autoEncontrado = null;

    // 2. Ciclo de búsqueda con evaluación de reglas combinadas
    for (let i = 0; i < catalogoHiperdeportivos.length; i++) {
        const auto = catalogoHiperdeportivos[i];

        // Regla A: Búsqueda coincidente por nombre/marca y que supere el mínimo de velocidad exigido
        if (
            auto.nombre.toLowerCase().includes(marcaModelo.toLowerCase()) &&
            auto.velocidadMaxKmH >= velocidadMinimaKmH
        ) {
            autoEncontrado = auto;
            break; // Detener el ciclo al encontrar la primera coincidencia exacta
        }
    }

    // 3. Evaluar e indicar el resultado de la búsqueda
    if (!autoEncontrado) {
        return {
            estado: "No disponible",
            motivo: `No se encontró ningún hiperdeportivo que coincida con '${marcaModelo}' y alcance al menos ${velocidadMinimaKmH} km/h.`
        };
    }

    // Regla B: Si es una pieza única o de stock limitado, añadir una nota especial de sobrepedido
    const requiereSobrepedido = autoEncontrado.unidadesProducidas <= 10;

    return {
        estado: "Vehículo localizado",
        datos: {
            modelo: autoEncontrado.nombre,
            velocidadMaxima: `${autoEncontrado.velocidadMaxKmH} km/h`,
            precioEstimado: autoEncontrado.precioAproximado,
            disponibilidad: requiereSobrepedido ? "Sobrepedido (Edición Ultra Limitada)" : "Entrega Estándar"
        }
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Localizar un Bugatti que cumpla con la velocidad requerida
const garajeExclusivo = [
    { nombre: "Bugatti Chiron Super Sport", velocidadMaxKmH: 440, precioAproximado: "$3.9M", unidadesProducidas: 30 },
    { nombre: "Koenigsegg Jesko Absolut", velocidadMaxKmH: 530, precioAproximado: "$3.0M", unidadesProducidas: 5 }, // Ultra limitado
    { nombre: "Ferrari SF90 Stradale", velocidadMaxKmH: 340, precioAproximado: "$500k", unidadesProducidas: 500 }
];

const busquedaBugatti = { marcaModelo: "Chiron", velocidadMinimaKmH: 400 };

console.log("--- Caso Normal ---");
console.log(buscarHiperdeportivo(garajeExclusivo, busquedaBugatti));

// 2. Caso Borde: Buscar un auto existente pero exigirle una velocidad superior a sus límites técnicos
const busquedaImposible = { marcaModelo: "SF90", velocidadMinimaKmH: 450 }; // El Ferrari no llega a 450 km/h

console.log("\n--- Caso Borde ---");
console.log(buscarHiperdeportivo(garajeExclusivo, busquedaImposible));