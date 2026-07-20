//Ejercicio 014: Áreas y Perímetros - Tatuajes 

function cotizarTatuaje(componentesTatuaje) {
    // 1. Guardrail Estructural Perimetral
    if (!Array.isArray(componentesTatuaje) || componentesTatuaje.length === 0) {
        return {
            estado: "Error",
            motivo: "El diseño del tatuaje debe contener al menos una figura geométrica para calcular el presupuesto."
        };
    }

    const COSTO_CM_DELINEADO = 5.0; 
    const COSTO_CM2_RELLENO = 3.5;  

    let areaTotalRelleno = 0;
    let perimetroTotalDelineado = 0;

    for (let i = 0; i < componentesTatuaje.length; i++) {
        const figura = componentesTatuaje[i];

        if (!figura || typeof figura !== "object" || typeof figura.tipo !== "string") {
            return {
                estado: "Error",
                motivo: `El componente en el índice ${i} no está bien definido o carece de la propiedad 'tipo'.`
            };
        }

        const tipoFigura = figura.tipo.toLowerCase().trim();

        // 3. Switch-Case polimórfico con aislamiento anti-NaN y casteo numérico
        switch (tipoFigura) {
            case "rectangulo": {
                const base = Number(figura.base);
                const altura = Number(figura.altura);

                if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
                    return { estado: "Error", motivo: `Dimensiones inválidas o no numéricas para el rectángulo en el índice ${i}.` };
                }
                
                areaTotalRelleno += base * altura;
                perimetroTotalDelineado += 2 * (base + altura);
                break;
            }

            case "circulo": {
                const radio = Number(figura.radio);

                if (isNaN(radio) || radio <= 0) {
                    return { estado: "Error", motivo: `Radio inválido o no numérico para el círculo en el índice ${i}.` };
                }

                areaTotalRelleno += Math.PI * (radio ** 2);
                perimetroTotalDelineado += 2 * Math.PI * radio;
                break;
            }

            case "triangulo_rectangulo": {
                const base = Number(figura.base);
                const altura = Number(figura.altura);

                if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
                    return { estado: "Error", motivo: `Dimensiones inválidas o no numéricas para el triángulo en el índice ${i}.` };
                }

                const hipotenusa = Math.sqrt(base**2 + altura**2);
                areaTotalRelleno += (base * altura) / 2;
                perimetroTotalDelineado += base + altura + hipotenusa;
                break;
            }

            default:
                return {
                    estado: "Error",
                    motivo: `Tipo de figura desconocido: "${figura.tipo}" en el índice ${i}.`
                };
        }
    }

    // 4. Operaciones financieras con redondeo matemático exacto precavido
    const costoDelineado = perimetroTotalDelineado * COSTO_CM_DELINEADO;
    const costoRelleno = areaTotalRelleno * COSTO_CM2_RELLENO;
    const presupuestoTotal = costoDelineado + costoRelleno;

    return {
        analisGeometrico: {
            totalFigurasProcesadas: componentesTatuaje.length,
            perimetroTotalCm: Math.round(perimetroTotalDelineado * 100) / 100,
            areaTotalCm2: Math.round(areaTotalRelleno * 100) / 100
        },
        cotizacionEconomica: {
            costoDelineadoLinea: `$${costoDelineado.toFixed(2)}`,
            costoRellenoTinta: `$${costoRelleno.toFixed(2)}`,
            totalEstimado: `$${presupuestoTotal.toFixed(2)}`
        }
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 014 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Tatuaje Geométrico Compuesto",
        componentes: [
            { tipo: "circulo", radio: 4 },
            { tipo: "rectangulo", base: 6, altura: 8 }
        ]
    },
    {
        tipo: "Caso Tolerancia a Fallos - Dimensiones enviadas como Strings",
        componentes: [
            { tipo: "triangulo_rectangulo", base: "3", altura: "4" } 
        ]
    },
    {
        tipo: "Caso Crítico - Inyección de Propiedad Invalida (Anti-NaN Guardrail)",
        componentes: [
            { tipo: "circulo", radio: "MUY_GRANDE" }
        ]
    },
    {
        tipo: "Caso Borde 1 (Guía) - Diseño Estructural Vacío",
        componentes: []
    },
    {
        tipo: "Caso Borde 2 (Guía) - Dimensiones en Cero",
        componentes: [
            { tipo: "rectangulo", base: 0, altura: 10 }
        ]
    }
];

pruebas.forEach(({ tipo, componentes }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(cotizarTatuaje(componentes), null, 2));
});