// Reto Campuslands - Clasificación por Reglas
// Temática: Inventario de Motos

// Entradas
const motos = [
    {
        modelo: "Yamaha FZ 2.0",
        stock: 18
    },
    {
        modelo: "Honda CB190R",
        stock: 11
    },
    {
        modelo: "Suzuki Gixxer 150",
        stock: 7
    },
    {
        modelo: "Bajaj Pulsar NS200",
        stock: 3
    },
    {
        modelo: "KTM Duke 200",
        stock: 0
    }
];

// Función para clasificar el inventario
function clasificarInventario(stock) {
    if (stock >= 15) {
        return "Stock alto";
    } else if (stock >= 10) {
        return "Stock suficiente";
    } else if (stock >= 5) {
        return "Stock bajo";
    } else if (stock >= 1) {
        return "Stock crítico";
    } else {
        return "Sin existencias";
    }
}

// Salida
console.log("=== Clasificación del Inventario de Motos ===");

motos.forEach((moto) => {
    console.log(
        `${moto.modelo} | Stock: ${moto.stock} | Estado: ${clasificarInventario(moto.stock)}`
    );
});