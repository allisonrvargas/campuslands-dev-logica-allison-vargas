//Ejercicio 011: Conteo Combinatorio Simple - Kickboxing

function calcularCombinacionesKickboxing(tecnicasDisponibles, longitudSerie) {
    // 1. Casteo defensivo y normalización de tipos
    const tecnicas = Number(tecnicasDisponibles);
    const serie = Number(longitudSerie);

    if (isNaN(tecnicas) || tecnicas <= 0 || !Number.isInteger(tecnicas) ||
        isNaN(serie) || serie <= 0 || !Number.isInteger(serie)) {
        return {
            estado: "Error",
            motivo: "Ambas entradas deben ser números enteros mayores a cero para poder configurar una serie."
        };
    }

    // 2. Control preventivo de desbordamiento exponencial
    const combinacionesTeoricas = Math.pow(tecnicas, serie);
    if (!Number.isSafeInteger(combinacionesTeoricas) || combinacionesTeoricas === Infinity) {
        return {
            estado: "Error",
            motivo: "El volumen de combinaciones calculado supera los límites de precisión del sistema."
        };
    }

    let totalCombinaciones = 1;
    const pasosProcesamiento = [];

    // 3. Recorrido Lineal O(N) para la auditoría de casillas combinatorias
    for (let i = 1; i <= serie; i++) {
        let valorAnterior = totalCombinaciones;
        totalCombinaciones *= tecnicas;
        
        pasosProcesamiento.push(`Paso ${i} (Golpe #${i}): ${valorAnterior} x ${tecnicas} opciones = ${totalCombinaciones}`);
    }

    // 4. Retorno del reporte analítico táctico
    return {
        configuracion: {
            variedadDeTecnicas: tecnicas,
            golpesPorSerie: serie
        },
        auditoriaMatematica: {
            iteracionesEjecutadas: pasosProcesamiento,
            resultadoFinalCombinaciones: totalCombinaciones
        }
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 011 ---");

const pruebas = [
    {
        tipo: "Caso Normal 1 (Guía) - 4 técnicas básicas, 3 ráfagas",
        tecnicas: 4, serie: 3
    },
    {
        tipo: "Caso Normal 2 (Guía) - Escenario pequeño manual",
        tecnicas: 3, serie: 2
    },
    {
        tipo: "Caso Tolerancia a Fallos - Cadenas de texto numéricas desde UI",
        tecnicas: "5", serie: "3"
    },
    {
        tipo: "Caso Crítico - Intento de inyección masiva (Desbordamiento)",
        tecnicas: 6, serie: 500
    },
    {
        tipo: "Caso Borde (Guía) - Datos Inválidos / Cero Técnicas",
        tecnicas: 0, serie: 3
    }
];

pruebas.forEach(({ tipo, tecnicas, serie }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(calcularCombinacionesKickboxing(tecnicas, serie), null, 2));
});