function calcularMetricasTatuaje(anchoCentimetros, altoCentimetros) {
    if (anchoCentimetros <= 0 || altoCentimetros <= 0) {
        return { area: 0.0, perimetro: 0.0 };
    }
    
    const areaCalculada = anchoCentimetros * altoCentimetros;
    const perimetroCalculado = (anchoCentimetros * 2) + (altoCentimetros * 2);
    
    return {
        area: Math.round(areaCalculada * 100) / 100,
        perimetro: Math.round(perimetroCalculado * 100) / 100
    };
}

const pruebas = [
    { ancho: 10.5, alto: 5.0, esperadoArea: 52.5, esperadoPerimetro: 31.0 },
    { ancho: 0.0, alto: 12.0, esperadoArea: 0.0, esperadoPerimetro: 0.0 },
    { ancho: 8.0, alto: 8.0, esperadoArea: 64.0, esperadoPerimetro: 32.0 },
    { ancho: -3.0, alto: 4.0, esperadoArea: 0.0, esperadoPerimetro: 0.0 }
];

pruebas.forEach(({ ancho, alto, esperadoArea, esperadoPerimetro }) => {
    const resultado = calcularMetricasTatuaje(ancho, alto);
    if (resultado.area !== esperadoArea || resultado.perimetro !== esperadoPerimetro) {
        throw new Error(`Error en la prueba para tamaño ${ancho}x${alto}`);
    }
});

console.log("Todas las pruebas se ejecutaron con éxito.");