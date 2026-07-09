function calcularTiempoTrazo(longitudPx, velocidadPxPorSeg) {
    if (velocidadPxPorSeg <= 0) return "Error: La velocidad debe ser mayor a 0";
    
    const tiempo = longitudPx / velocidadPxPorSeg;
    
    return {
        tiempoSegundos: tiempo.toFixed(2),
        velocidadAplicada: `${velocidadPxPorSeg} px/s`
    };
}

const trazo = { longitud: 500, velocidad: 150 };
console.log(calcularTiempoTrazo(trazo.longitud, trazo.velocidad));