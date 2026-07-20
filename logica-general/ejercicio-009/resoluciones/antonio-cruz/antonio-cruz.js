// entradas

const pelicula = {
    titulo: "El Conjuro",
    estado: "pendiente"
};

// funcion para cambiar el estado

function simularEstado(datos) {

    if (!datos || !datos.estado) {
        return "Estado no valido.";
    }

    switch (datos.estado) {

        case "pendiente":
            datos.estado = "reproduciendo";
            break;

        case "reproduciendo":
            datos.estado = "finalizada";
            break;

        case "finalizada":
            return "La pelicula ya termino.";

        default:
            return "Estado desconocido.";
    }

    return datos;
}

console.log("Estado inicial");
console.log(pelicula);

console.log("\nPrimer cambio");
console.log(simularEstado(pelicula));

console.log("\nSegundo cambio");
console.log(simularEstado(pelicula));

// pruebas

console.log("\nCaso normal");

const prueba = {
    titulo: "La Monja",
    estado: "pendiente"
};

console.log(simularEstado(prueba));

console.log("\nCaso borde");

console.log(
    simularEstado({})
);