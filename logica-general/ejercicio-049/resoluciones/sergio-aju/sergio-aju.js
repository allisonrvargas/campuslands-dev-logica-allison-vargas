function simularReaccion(personaje, habitacion, evento) {
    let estado = "explorando";
    if (evento === "ruido" && habitacion === "pasillo") {
        estado = "esconderse";
    } else if (evento === "sombra" && habitacion === "habitacion") {
        estado = "correr";
    } else if (evento === "silencio") {
        estado = "explorando";
    }
    const acciones = {
        "esconderse": "El personaje se oculta tras una pared.",
        "correr": "El personaje sale huyendo despavorido.",
        "explorando": "El personaje continua explorando."
    };
    return { estado, accion: acciones[estado] };
}