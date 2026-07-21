function calcularDistanciaAterrizaje(coordenadaX1, coordenadaY1, coordenadaX2, coordenadaY2) {
    const diferenciaX = coordenadaX2 - coordenadaX1;
    const diferenciaY = coordenadaY2 - coordenadaY1;
    
    const sumaCuadrados = (diferenciaX ** 2) + (diferenciaY ** 2);
    const distanciaTotal = sumaCuadrados ** 0.5;
    
    return Math.round(distanciaTotal * 100) / 100;
}

const pruebas = [
    { x1: 0, y1: 0, x2: 3, y2: 4, esperado: 5 },
    { x1: -1, y1: -1, x2: 2, y2: 3, esperado: 5 },
    { x1: -10.5, y1: -10.5, x2: -10.5, y2: -10.5, esperado: 0 },
    { x1: 10, y1: 20, x2: 10, y2: 50, esperado: 30 }
];

pruebas.forEach(({ x1, y1, x2, y2, esperado }) => {
    const resultado = calcularDistanciaAterrizaje(x1, y1, x2, y2);
    if (resultado !== esperado) {
        throw new Error(`Error en la prueba para las coordenadas dadas. Esperado: ${esperado}, Obtenido: ${resultado}`);
    }
});

console.log("Todas las pruebas se ejecutaron con éxito.");