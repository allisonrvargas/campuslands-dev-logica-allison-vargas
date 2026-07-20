// entradas

const motos = [
    {
        modelo: "FXR150",
        estado: "disponible"
    },
    {
        modelo: "GN125",
        estado: "vendida"
    },
    {
        modelo: "FZ25",
        estado: "disponible"
    },
    {
        modelo: "XTZ150",
        estado: "mantenimiento"
    }
];

// funcion para filtrar motos disponibles

function filtrarDisponibles(listaMotos) {

    if (!Array.isArray(listaMotos) || listaMotos.length === 0) {
        return [];
    }

    const disponibles = [];

    for (const moto of listaMotos) {
        if (moto.estado === "disponible") {
            disponibles.push(moto);
        }
    }

    return disponibles;
}

const resultado = filtrarDisponibles(motos);

console.log("Motos disponibles");
console.log(resultado);

// pruebas

console.log("\nCaso normal");

console.log(
    filtrarDisponibles([
        { modelo: "FXR150", estado: "disponible" },
        { modelo: "FZ25", estado: "mantenimiento" },
        { modelo: "GN125", estado: "disponible" }
    ])
);

console.log("\nCaso borde");

console.log(
    filtrarDisponibles([])
);