// entradas

const itinerario = [
    "Llegar al aeropuerto",
    "Registrarse en el hotel",
    "Visitar el centro historico",
    "Regresar al hotel"
];

// funcion para seguir las instrucciones

function seguirItinerario(instrucciones) {

    if (!Array.isArray(instrucciones) || instrucciones.length === 0) {
        return "No hay instrucciones disponibles.";
    }

    console.log("Itinerario del viaje:\n");

    for (let i = 0; i < instrucciones.length; i++) {
        console.log(`${i + 1}. ${instrucciones[i]}`);
    }

    return "Itinerario completado.";
}

console.log(seguirItinerario(itinerario));

// pruebas

console.log("\nCaso normal");

seguirItinerario([
    "Llegar al aeropuerto",
    "Abordar el transporte",
    "Llegar al hotel"
]);

console.log("\nCaso borde");

console.log(
    seguirItinerario([])
);