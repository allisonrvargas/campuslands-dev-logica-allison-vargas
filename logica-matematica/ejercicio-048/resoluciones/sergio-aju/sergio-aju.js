function analizarPatron(puntuaciones) {
    if (puntuaciones.length < 2) return "Datos insuficientes";

    let subiendo = true;
    let bajando = true;

    for (let i = 0; i < puntuaciones.length - 1; i++) {
        if (puntuaciones[i] < puntuaciones[i + 1]) bajando = false;
        if (puntuaciones[i] > puntuaciones[i + 1]) subiendo = false;
    }

    const promedio = puntuaciones.reduce((a, b) => a + b, 0) / puntuaciones.length;

    return {
        patron: subiendo ? "Patrón de éxito" : (bajando ? "Patrón de fracaso" : "Sin patrón claro"),
        promedio: promedio.toFixed(2)
    };
}