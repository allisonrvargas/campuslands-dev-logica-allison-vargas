function evaluarPlaylist(canciones) {
    if (!canciones || canciones.length === 0) {
        return { duracion_total: 0, promedio: 0, secuencia_valida: false };
    }

    const duraciones = canciones.map(c => c.duracion);
    const total = duraciones.reduce((a, b) => a + b, 0);
    const promedio = total / duraciones.length;

    let esSecuenciaCreciente = true;
    for (let i = 0; i < duraciones.length - 1; i++) {
        if (duraciones[i] > duraciones[i + 1]) {
            esSecuenciaCreciente = false;
            break;
        }
    }

    return {
        duracion_total: total,
        promedio: parseFloat(promedio.toFixed(2)),
        secuencia_valida: esSecuenciaCreciente
    };
}