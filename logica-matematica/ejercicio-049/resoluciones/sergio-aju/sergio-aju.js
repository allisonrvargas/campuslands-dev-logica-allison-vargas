function organizarSalas(duraciones, capacidad) {
    const totalTiempo = duraciones.reduce((a, b) => a + b, 0);
    const peliculasPorBloque = Math.floor(totalTiempo / capacidad);
    const sobrante = totalTiempo % capacidad;
    
    let estado = "Eficiente";
    if (sobrante === 0) estado = "Perfecto";
    else if (sobrante > (capacidad * 0.5)) estado = "Desperdiciada";

    return { peliculasPorBloque, sobrante, estado };
}