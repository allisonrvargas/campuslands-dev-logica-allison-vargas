function calcularTiempoDibujo(distancia, velocidad, esDigitalTableta) {
    if (distancia <= 0 || velocidad <= 0) return { tiempo_final: 0, detalle: "Datos inválidos" };
    
    let tiempo = distancia / velocidad;
    if (esDigitalTableta) tiempo *= 0.80;
    
    return { 
        tiempo_final: parseFloat(tiempo.toFixed(2)), 
        detalle: "Cálculo optimizado completado" 
    };
}