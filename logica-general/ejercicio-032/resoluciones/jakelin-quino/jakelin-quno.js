let estrategiaRival = "agresivo";

function elegirRaqueta(estrategia) {
    if (estrategia === "defensivo") {
        return "Raqueta de control: para colocar la bola lejos del rival.";
    } else if (estrategia === "agresivo") {
        return "Raqueta de velocidad: para responder con ataques rápidos.";
    } else {
        return "Raqueta polivalente: para un juego versátil.";
    }
}

let eleccion = elegirRaqueta(estrategiaRival);
console.log("Estrategia rival:", estrategiaRival);
console.log("Acción:", eleccion);