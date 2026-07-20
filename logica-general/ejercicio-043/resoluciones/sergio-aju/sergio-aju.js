function evaluarJugador(nivel, latencia, cupos) {
    let errores = [];

    if (nivel < 10) errores.push("Nivel insuficiente");
    if (latencia >= 100) errores.push("Latencia alta");
    if (cupos <= 0) errores.push("Torneo lleno");

    if (errores.length === 0) {
        return { estado: "Aceptado", mensaje: "Jugador habilitado para el torneo." };
    } else {
        return { estado: "Rechazado", mensaje: errores.join(", ") + "." };
    }
}