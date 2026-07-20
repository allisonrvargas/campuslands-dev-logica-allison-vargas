// entradas

const salto = {
    clima: "soleado",
    equipoCompleto: true,
    instructorDisponible: true
};

// funcion para resolver el caso

function evaluarSalto(datos) {

    if (!datos) {
        return "No hay informacion del salto.";
    }

    if (datos.clima !== "soleado") {
        return "El salto fue cancelado por el clima.";
    }

    if (!datos.equipoCompleto) {
        return "El salto fue cancelado porque falta equipo.";
    }

    if (!datos.instructorDisponible) {
        return "El salto fue cancelado porque no hay instructor.";
    }

    return "El salto puede realizarse.";
}

console.log(evaluarSalto(salto));

// pruebas

console.log("\nCaso normal");

console.log(
    evaluarSalto({
        clima: "soleado",
        equipoCompleto: true,
        instructorDisponible: true
    })
);

console.log("\nCaso borde");

console.log(
    evaluarSalto({
        clima: "lluvioso",
        equipoCompleto: true,
        instructorDisponible: true
    })
);