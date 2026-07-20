// entradas

const participantes = [
    {
        nombre: "Carlos",
        categoria: "principiante"
    },
    {
        nombre: "Ana",
        categoria: "avanzado"
    },
    {
        nombre: "Luis",
        categoria: "principiante"
    },
    {
        nombre: "Maria",
        categoria: "avanzado"
    }
];

// funcion para organizar la lista

function organizarParticipantes(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay participantes registrados.";
    }

    const categorias = {
        principiantes: [],
        avanzados: []
    };

    for (const participante of lista) {

        if (participante.categoria === "principiante") {
            categorias.principiantes.push(participante.nombre);
        } else if (participante.categoria === "avanzado") {
            categorias.avanzados.push(participante.nombre);
        }

    }

    return categorias;
}

console.log(organizarParticipantes(participantes));

// pruebas

console.log("\nCaso normal");

console.log(
    organizarParticipantes([
        { nombre: "Pedro", categoria: "principiante" },
        { nombre: "Sofia", categoria: "avanzado" }
    ])
);

console.log("\nCaso borde");

console.log(
    organizarParticipantes([])
);