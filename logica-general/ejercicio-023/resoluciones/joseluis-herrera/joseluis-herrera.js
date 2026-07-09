const obtenerPromedio = lista => lista.reduce((acc, val) => acc + val, 0) / lista.length;

const obtenerMediana = lista => {
    const ordenados = [...lista].sort((a, b) => a - b);
    const posicionCentral = Math.floor(ordenados.length / 2);
    
    return ordenados.length % 2 !== 0 
        ? ordenados[posicionCentral] 
        : (ordenados[posicionCentral - 1] + ordenados[posicionCentral]) / 2;
};

function evaluarDesempeñoEsports(listaPuntajes) {
    if (!Array.isArray(listaPuntajes) || listaPuntajes.length === 0) {
        return "Error: Estructura de datos inválida";
    }

    const promedioVal = obtenerPromedio(listaPuntajes);
    const medianaVal = obtenerMediana(listaPuntajes);

    const esLigaHonor = promedioVal >= 80 && medianaVal >= 75;
    const esAscenso = promedioVal >= 50;

    switch (true) {
        case esLigaHonor:
            return `Promedio: ${Math.round(promedioVal)} | Mediana: ${medianaVal} -> Nivel: Liga de Honor Pro`;
        case esAscenso:
            return `Promedio: ${Math.round(promedioVal)} | Mediana: ${medianaVal} -> Nivel: División de Ascenso`;
        default:
            return `Promedio: ${Math.round(promedioVal)} | Mediana: ${medianaVal} -> Nivel: Clasificatoria Abierta`;
    }
}

let puntajesTorneo = [80, 82, 78, 85];
let diagnostico = evaluarDesempeñoEsports(puntajesTorneo);

console.log(diagnóstico);