function calcularDistanciaAterrizaje(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    let estado = "";
    if (distancia <= 5) {
        estado = "Zona de aterrizaje perfecta";
    } else if (distancia <= 20) {
        estado = "Aterrizaje seguro, pero fuera de rango";
    } else {
        estado = "Fuera de curso, requiere ajuste urgente";
    }
    return {
        distancia: distancia.toFixed(2),
        estado: estado,
        explicacion: `Distancia calculada desde (${x1}, ${y1}) hasta (${x2}, ${y2}).`
    };
}
console.log("Caso Normal:", calcularDistanciaAterrizaje(0, 0, 3, 4)); 
console.log("Caso Borde:", calcularDistanciaAterrizaje(10, 10, 10, 10)); 