// entradas

const reparaciones = [
    {
        moto: "FXR150",
        prioridad: 2
    },
    {
        moto: "GN125",
        prioridad: 1
    },
    {
        moto: "FZ25",
        prioridad: 3
    }
];

// funcion para ordenar por prioridad

function ordenarPrioridades(listaReparaciones) {

    if (!Array.isArray(listaReparaciones) || listaReparaciones.length === 0) {
        return [];
    }

    const copia = [...listaReparaciones];

    copia.sort(function (a, b) {
        return a.prioridad - b.prioridad;
    });

    return copia;
}

const resultado = ordenarPrioridades(reparaciones);

console.log("Orden de reparacion");
console.log(resultado);

// pruebas

console.log("\nCaso normal");

console.log(
    ordenarPrioridades([
        { moto: "Honda XR", prioridad: 3 },
        { moto: "Yamaha FZ", prioridad: 1 },
        { moto: "Suzuki GN", prioridad: 2 }
    ])
);

console.log("\nCaso borde");

console.log(
    ordenarPrioridades([])
);