// Ejercicio 024 - Filtros por condiciones
// Temática: Inventario de motos

const motos = [
    { modelo: "Yamaha MT-07", disponible: true, precio: 7500 },
    { modelo: "Honda CB500F", disponible: false, precio: 6800 },
    { modelo: "KTM Duke 390", disponible: true, precio: 6200 },
    { modelo: "Suzuki GSX-S750", disponible: true, precio: 9100 }
];

function filtrarMotos(lista, precioMaximo) {
    let resultado = [];

    for (let moto of lista) {
        if (moto.disponible && moto.precio <= precioMaximo) {
            resultado.push(moto);
        }
    }

    return resultado;
}

// Prueba normal
console.log("Prueba normal:");
console.log(filtrarMotos(motos, 8000));

// Caso borde
console.log("\nCaso borde:");
console.log(filtrarMotos([], 8000));