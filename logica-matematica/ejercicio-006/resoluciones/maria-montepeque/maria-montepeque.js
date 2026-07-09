//Ejercicio 006: Conversión de Unidades - Autos Hiperdeportivos

function convertirRendimientoHiperdeportivo(auto) {
    // 1. Validación defensiva inicial de tipos
    if (!auto || typeof auto !== "object") {
        return {
            estado: "Error",
            motivo: "Se requiere un objeto de vehículo válido."
        };
    }

    const velocidadMph = Number(auto.velocidadMph);
    const potenciaHp = Number(auto.potenciaHp);

    if (isNaN(velocidadMph) || velocidadMph < 0 || isNaN(potenciaHp) || potenciaHp < 0) {
        return {
            estado: "Error",
            motivo: "Los datos de rendimiento del vehículo deben ser números válidos y positivos."
        };
    }

    const FACTOR_MPH_A_KMH = 1.60934;
    const FACTOR_HP_A_KW = 0.7457;

    // 2. Conversión de unidades con operaciones aritméticas puras y redondeo matemático exacto
    const velocidadKmh = Math.round((velocidadMph * FACTOR_MPH_A_KMH) * 100) / 100;
    const potenciaKw = Math.round((potenciaHp * FACTOR_HP_A_KW) * 100) / 100;

    // 3. Estructura condicional con reglas de negocio automotrices reales
    let clasificacion = "";
    
    if (potenciaKw >= 1000 || velocidadKmh >= 400) {
        clasificacion = "Hypercar - Leyenda (Megacar)";
    } else if (velocidadKmh >= 300) {
        clasificacion = "Hiperdeportivo de Élite";
    } else {
        clasificacion = "Deportivo de Alto Rendimiento";
    }

    // 4. Retorno del contrato de datos unificado
    return {
        modelo: String(auto.modelo || "Prototipo Desconocido").trim(),
        especificacionesMetricas: {
            velocidadKmh: `${velocidadKmh} km/h`,
            potenciaKw: `${potenciaKw} kW`
        },
        clasificacionRendimiento: clasificacion
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 006 ---");

const pruebas = [
    {
        tipo: "Caso Normal 1 - Bugatti Chiron (Élite por Velocidad)",
        auto: { modelo: "Bugatti Chiron", velocidadMph: 261, potenciaHp: 1500 } 
    },
    {
        tipo: "Caso Normal 2 - Ferrari LaFerrari (Alto Rendimiento)",
        auto: { modelo: "Ferrari LaFerrari", velocidadMph: 217, potenciaHp: 950 } 
    },
    {
        tipo: "Caso de Negocio Crítico - Koenigsegg One:1 (Megacar Puro por Potencia)",
        auto: { modelo: "Koenigsegg One:1", velocidadMph: 273, potenciaHp: 1360 } 
    },
    {
        tipo: "Caso Borde - Datos Corruptos o Negativos Interceptados",
        auto: { modelo: "Dark Matter X", velocidadMph: -100, potenciaHp: 800 }
    }
];

pruebas.forEach(({ tipo, auto }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(convertirRendimientoHiperdeportivo(auto), null, 2));
});