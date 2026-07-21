// entradas

const pelicula = {
    titulo: "Interstellar",
    tieneEntradas: true,
    salaDisponible: true,
    proyectorListo: true
};

// funcion para seguir el flujo

function iniciarFuncion(datos) {

    if (!datos.tieneEntradas) {
        return "No se puede iniciar la funcion porque no hay entradas disponibles.";
    }

    if (!datos.salaDisponible) {
        return "No se puede iniciar la funcion porque la sala no esta disponible.";
    }

    if (!datos.proyectorListo) {
        return "No se puede iniciar la funcion porque el proyector no esta listo.";
    }

    return "La pelicula puede comenzar.";
}

console.log(iniciarFuncion(pelicula));

// pruebas

console.log("\nCaso normal");

console.log(
    iniciarFuncion({
        titulo: "Interstellar",
        tieneEntradas: true,
        salaDisponible: true,
        proyectorListo: true
    })
);

console.log("\nCaso borde");

console.log(
    iniciarFuncion({
        titulo: "Interstellar",
        tieneEntradas: true,
        salaDisponible: false,
        proyectorListo: true
    })
);