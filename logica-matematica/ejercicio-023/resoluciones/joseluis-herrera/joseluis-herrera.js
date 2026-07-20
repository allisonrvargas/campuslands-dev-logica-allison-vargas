function analizarPuntajesTorneo(puntajes) {
    if (!puntajes || puntajes.length === 0) {
        return "Error: No hay registros de puntajes";
    }

    let suma = 0;
    for (let i = 0; i < puntajes.length; i++) {
        suma += puntajes[i];
    }
    let promedio = suma / puntajes.length;

    let copiaPuntajes = [...puntajes];
    copiaPuntajes.sort((a, b) => a - b);
    
    let mitad = Math.floor(copiaPuntajes.length / 2);
    let mediana;

    if (copiaPuntajes.length % 2 === 0) {
        mediana = (copiaPuntajes[mitad - 1] + copiaPuntajes[mitad]) / 2;
    } else {
        mediana = copiaPuntajes[mitad];
    }

    let categoria;
    if (promedio >= 80 && mediana >= 75) {
        categoria = "Nivel: Liga de Honor Pro";
    } else if (promedio >= 50) {
        categoria = "Nivel: División de Ascenso";
    } else {
        categoria = "Nivel: Clasificatoria Abierta";
    }

    return {
        promedio: Math.round(promedio),
        mediana: mediana,
        clasificacion: categoria
    };
}

let puntajesPartidas = [90, 85, 40, 95, 80];
let reporte = analizarPuntajesTorneo(puntajesPartidas);

console.log("Puntajes analizados:", puntajesPartidas);
console.log("Promedio obtenido:", reporte.promedio);
console.log("Mediana obtenida:", reporte.mediana);
console.log("Resultado final:", reporte.clasificacion);