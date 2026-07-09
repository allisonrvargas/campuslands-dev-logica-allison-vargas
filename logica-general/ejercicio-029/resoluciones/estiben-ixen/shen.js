function calcularEstadoPersonaje(personaje, evento) {
    if (personaje.estado === "eliminado") return "eliminado";

    switch (evento) {
        case "ruido":
            return personaje.estaEscondido ? "en peligro" : "en peligro";
        case "ataque":
            return "eliminado";
        case "luz":
            return "a salvo";
        case "tiempo":
            return personaje.estado === "en peligro" ? "eliminado" : personaje.estado;
        default:
            return personaje.estado;
    }
}

const personaje = { nombre: "Protagonista", estado: "a salvo", estaEscondido: false };
console.log(calcularEstadoPersonaje(personaje, "ruido"));
console.log(calcularEstadoPersonaje({ ...personaje, estado: "en peligro" }, "tiempo"));