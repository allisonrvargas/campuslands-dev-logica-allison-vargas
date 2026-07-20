// entradas

const dibujo = {
    titulo: "Paisaje al atardecer",
    resolucion: 300,
    formato: "png",
    contenidoOriginal: true
};

// funcion para aplicar las reglas

function revisarPublicacion(datos) {

    if (!datos) {
        return "No hay informacion del dibujo.";
    }

    if (datos.resolucion < 300) {
        return "El dibujo no cumple la resolucion minima.";
    }

    if (datos.formato !== "png") {
        return "El formato permitido es png.";
    }

    if (!datos.contenidoOriginal) {
        return "Solo se aceptan dibujos originales.";
    }

    return "El dibujo puede publicarse.";
}

console.log(revisarPublicacion(dibujo));

// pruebas

console.log("\nCaso normal");

console.log(
    revisarPublicacion({
        titulo: "Ilustracion",
        resolucion: 300,
        formato: "png",
        contenidoOriginal: true
    })
);

console.log("\nCaso borde");

console.log(
    revisarPublicacion({
        titulo: "Boceto",
        resolucion: 150,
        formato: "jpg",
        contenidoOriginal: true
    })
);