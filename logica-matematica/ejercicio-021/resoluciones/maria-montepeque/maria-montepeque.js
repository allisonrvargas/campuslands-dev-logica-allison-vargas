//Ejercicio 021: Operaciones Aritméticas Controladas - Videojuegos Competitivos

function calcularPuntajeEsports(estadisticasEscuadra, multiplicadorDificultad) {
    // 1. Guardrail Estructural Perimetral del Factor de Torneo
    const multiplicador = Number(multiplicadorDificultad);
    
    if (!estadisticasEscuadra || typeof estadisticasEscuadra !== "object" || !Number.isFinite(multiplicador) || multiplicador <= 0) {
        return {
            estado: "Error",
            motivo: "Las estadísticas provistas no son válidas o el multiplicador es erróneo."
        };
    }

    // 2. Casteo Defensivo e Inmunización de Atributos del Match con fallback (?? 0)
    const bajas = Number(estadisticasEscuadra.bajas ?? 0);
    const asistencias = Number(estadisticasEscuadra.asistencias ?? 0);
    const muertes = Number(estadisticasEscuadra.muertes ?? 0);
    const objetivos = Number(estadisticasEscuadra.objetivosCapturados ?? 0);
    const advertencias = Number(estadisticasEscuadra.advertenciasArbitro ?? 0);

    if (!Number.isFinite(bajas) || !Number.isFinite(asistencias) || 
        !Number.isFinite(muertes) || !Number.isFinite(objetivos) || !Number.isFinite(advertencias)) {
        return {
            estado: "Error",
            motivo: "Los registros estadísticos deben ser valores numéricos reales."
        };
    }

    if (bajas < 0 || asistencias < 0 || muertes < 0 || objetivos < 0 || advertencias < 0) {
        return {
            estado: "Error",
            motivo: "Los registros estadísticos no pueden contener valores aritméticos negativos."
        };
    }

    // 3. Operaciones Aritméticas Controladas con Reglas de Negocio
    const puntosOfensivos = (bajas * 15) + (asistencias * 5);

    const puntosObjetivosBrutos = objetivos * 30;
    const puntosObjetivosControlados = Math.min(puntosObjetivosBrutos, 120);

    const penalizacionMuertes = muertes * 8;
    const penalizacionArbitro = advertencias * 25;
    const totalDeducciones = penalizacionMuertes + penalizacionArbitro;

    let puntajeSubtotal = (puntosOfensivos + puntosObjetivosControlados) - totalDeducciones;
    puntajeSubtotal = Math.max(0, puntajeSubtotal);

    const puntajeFinalEfectivo = Math.round(puntajeSubtotal * multiplicador);

    // 4. Clasificación Jerárquica de Rangos
    let clasificacionRendimiento;
    if (puntajeFinalEfectivo >= 250) {
        clasificacionRendimiento = "Rango Leyenda (Escuadra Élite)";
    } else if (puntajeFinalEfectivo >= 120) {
        clasificacionRendimiento = "Rango Maestro (Escuadra Competitiva)";
    } else {
        clasificacionRendimiento = "Rango Aspirante (Falta Coordinación)";
    }

    // 5. Retorno del Reporte Analítico de Clasificación
    return {
        resultadoCalculo: {
            puntosOfensivos,
            puntosObjetivos: puntosObjetivosControlados,
            puntosPerdidos: totalDeducciones,
            puntajeFinal: puntajeFinalEfectivo
        },
        evaluacion: {
            clasificacion: clasificacionRendimiento,
            explicacion: `Puntaje escalado por un factor x${multiplicador} tras mitigar excesos y penalizaciones.`
        }
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 021 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Desempeño Sólido del Equipo",
        escuadra: { bajas: 12, asistencias: 8, muertes: 4, objetivosCapturados: 3, advertenciasArbitro: 0 },
        mult: 1.2
    },
    {
        tipo: "Caso Borde (Guía) - Superación del Tope de Objetivos (Truncado a 120)",
        escuadra: { bajas: 5, asistencias: 10, muertes: 15, objetivosCapturados: 6, advertenciasArbitro: 1 },
        mult: 1.0
    },
    {
        tipo: "Caso Borde (Guía) - Control de Suelo (Evita puntajes negativos)",
        escuadra: { bajas: 1, asistencias: 0, muertes: 20, objetivosCapturados: 0, advertenciasArbitro: 2 },
        mult: 1.5
    },
    {
        tipo: "Caso Tolerancia a Fallos - Propiedades Faltantes e Inyecciones String",
        escuadra: { bajas: "15", asistencias: "5", muertes: 2 },
        mult: "1.1"
    }
];

pruebas.forEach(({ tipo, escuadra, mult }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(calcularPuntajeEsports(escuadra, mult), null, 2));
});