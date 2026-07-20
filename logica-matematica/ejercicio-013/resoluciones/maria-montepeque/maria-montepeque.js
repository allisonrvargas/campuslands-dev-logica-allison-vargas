//Ejercicio 013: Coordenadas y Distancia Tridimensional - Paracaidismo

function analizarTelemetriaParacaidismo(puntosControl) {
    // 1. Guardrail Estructural Perimetral de la Trayectoria
    if (!Array.isArray(puntosControl) || puntosControl.length < 2) {
        return {
            estado: "Error",
            motivo: "Se requieren al menos dos puntos de control (Origen y Destino) para calcular una trayectoria."
        };
    }

    let distanciaTotalAcumulada = 0;
    const bitacoraSegmentos = [];
    let puntosProcesadosExitosamente = 0;

    // 2. Recorrido Lineal O(N) secuencial acoplado
    for (let i = 0; i < puntosControl.length - 1; i++) {
        const puntoA = puntosControl[i];
        const puntoB = puntosControl[i + 1];

        if (!Array.isArray(puntoA) || !Array.isArray(puntoB) || puntoA.length !== 3 || puntoB.length !== 3) {
            return {
                estado: "Error",
                motivo: `Error en la telemetría: El segmento entre el índice ${i} y ${i + 1} no cuenta con coordenadas tridimensionales válidas [X, Y, Z].`
            };
        }

        const x1 = Number(puntoA[0]), y1 = Number(puntoA[1]), z1 = Number(puntoA[2]);
        const x2 = Number(puntoB[0]), y2 = Number(puntoB[1]), z2 = Number(puntoB[2]);

        if ([x1, y1, z1, x2, y2, z2].some(isNaN)) {
            return {
                estado: "Error",
                motivo: `Error de consistencia matemática en el tramo ${i + 1}: Se detectaron valores no numéricos.`
            };
        }

        const dx = x2 - x1;
        const dy = y2 - y1;
        const dz = z2 - z1;

        const distanciaSegmento = Math.sqrt(dx**2 + dy**2 + dz**2);

        distanciaTotalAcumulada += distanciaSegmento;
        if (i === 0) puntosProcesadosExitosamente++; 
        puntosProcesadosExitosamente++;

        bitacoraSegmentos.push(
            `Tramo ${i + 1}: De (${x1}, ${y1}, ${z1}) a (${x2}, ${y2}, ${z2}) -> ${distanciaSegmento.toFixed(2)} metros.`
        );
    }

    // 3. Redondeo aritmético puro predecible para evitar imprecisiones de flotantes
    const resultadoFinal = Math.round(distanciaTotalAcumulada * 100) / 100;
    
    let evaluacionVuelo;
    if (resultadoFinal >= 2000) {
        evaluacionVuelo = "Despliegue Táctico de Alta Altitud (HALO/HAHO)";
    } else if (resultadoFinal >= 800) {
        evaluacionVuelo = "Salto de Apertura Estándar";
    } else {
        evaluacionVuelo = "Salto de Baja Cota / Salto de Exhibición";
    }

    // 4. Retorno del reporte analítico de telemetría final unificado
    return {
        telemetria: {
            puntosRegistrados: puntosProcesadosExitosamente,
            desgloseTramos: bitacoraSegmentos
        },
        analisCientifico: {
            distanciaLinealTotal: `${resultadoFinal} metros`,
            tipoDeMision: evaluacionVuelo
        }
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 013 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Caída libre con desvío por viento",
        ruta: [
            [0, 0, 2000],
            [150, 200, 1000],
            [300, 400, 0]
        ]
    },
    {
        tipo: "Caso Tolerancia a Fallos - Coordenadas Numéricas como Strings",
        ruta: [
            ["0", "0", "1500"],
            ["50", "50", "800"],
            ["100", "100", "0"]
        ]
    },
    {
        tipo: "Caso Crítico Detectado - Datos Corruptos Internos (Inyección NaN)",
        ruta: [
            [0, 0, 1000],
            [50, "FALLA_SENSOR", 500],
            [100, 100, 0]
        ]
    },
    {
        tipo: "Caso Borde 1 (Guía) - Faltan puntos mínimos de trayectoria",
        ruta: [[0, 0, 1500]]
    },
    {
        tipo: "Caso Borde 2 (Guía) - Coordenadas incompletas (Falta eje Z)",
        ruta: [
            [0, 0, 1000],
            [10, 20]
        ]
    }
];

pruebas.forEach(({ tipo, ruta }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarTelemetriaParacaidismo(ruta), null, 2));
});