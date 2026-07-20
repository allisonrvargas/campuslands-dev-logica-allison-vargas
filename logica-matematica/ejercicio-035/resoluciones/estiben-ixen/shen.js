function calcularTiempoRender(pixeles, capas, potencia) {
    let tiempo = (pixeles / 1000000) * 2;

    if (pixeles > 20000000) {
        tiempo += 10;
    }

    tiempo += tiempo * (capas * 0.05);

    let tiempoFinal = tiempo / potencia;

    return {
        tiempo_estimado: `${tiempoFinal.toFixed(2)} minutos`,
        estado: tiempoFinal < 30 ? "Render rápido" : "Render pesado"
    };
}

console.log("Render Estándar:", calcularTiempoRender(10000000, 5, 5));
console.log("Render Borde (Alta resolución):", calcularTiempoRender(25000000, 10, 8));