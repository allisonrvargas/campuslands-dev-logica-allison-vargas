function calcularPresupuestoTatuaje(figura, dimensiones) {
    const PRECIO_POR_CM2 = 5000; 

    let area = 0;
    let perimetro = 0;

    switch (figura.toLowerCase()) {
        case 'rectangulo':
            area = dimensiones.base * dimensiones.altura;
            perimetro = 2 * (dimensiones.base + dimensiones.altura);
            break;
        case 'circulo':
            area = Math.PI * Math.pow(dimensiones.radio, 2);
            perimetro = 2 * Math.PI * dimensiones.radio;
            break;
    }

    return {
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2),
        costoEstimado: (area * PRECIO_POR_CM2).toLocaleString('es-CO') + " COP"
    };
}

console.log(calcularPresupuestoTatuaje('circulo', { radio: 5 }));