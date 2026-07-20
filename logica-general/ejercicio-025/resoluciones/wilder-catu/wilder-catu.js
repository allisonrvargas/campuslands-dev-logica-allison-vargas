// Reto Campuslands - Clasificación por Reglas
// Temática: Taller Mecánico

// Entradas
const vehiculos = [
    {
        placa: "P123ABC",
        diasEnTaller: 1
    },
    {
        placa: "P456DEF",
        diasEnTaller: 3
    },
    {
        placa: "P789GHI",
        diasEnTaller: 6
    },
    {
        placa: "P321JKL",
        diasEnTaller: 9
    },
    {
        placa: "P654MNO",
        diasEnTaller: 12
    }
];

// Función para clasificar la prioridad de entrega
function clasificarEstado(dias) {
    if (dias <= 2) {
        return "Reparación rápida";
    } else if (dias <= 5) {
        return "Reparación programada";
    } else if (dias <= 8) {
        return "Reparación compleja";
    } else if (dias <= 10) {
        return "Entrega prioritaria";
    } else {
        return "Requiere seguimiento";
    }
}

// Salida
console.log("=== Estado de Vehículos en el Taller Mecánico ===");

vehiculos.forEach((vehiculo) => {
    console.log(
        `Placa: ${vehiculo.placa} | Días en taller: ${vehiculo.diasEnTaller} | Estado: ${clasificarEstado(vehiculo.diasEnTaller)}`
    );
});