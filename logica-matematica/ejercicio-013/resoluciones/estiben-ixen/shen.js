function calcularDistanciaAlObjetivo(posicionActual, zonaAterrizaje) {
    const dx = zonaAterrizaje.x - posicionActual.x;
    const dy = zonaAterrizaje.y - posicionActual.y;
    
    const distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    
    return {
        distancia: parseFloat(distancia.toFixed(2)),
        requiereCorreccion: distancia > 50 
    };
}

const paracaidista = { x: 10, y: 20 };
const zonaSalto = { x: 100, y: 150 };

console.log(calcularDistanciaAlObjetivo(paracaidista, zonaSalto));