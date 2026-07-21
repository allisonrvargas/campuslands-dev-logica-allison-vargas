// Ejercicio 039: Validaciones Numéricas - Fórmulas Químicas

function validarSolucionQuimica(ph, temperaturaC, concentracionPorcentaje) {
    // El rango numperico del pH debe existir entre 0 y 14
    if (ph < 0 || ph > 14) {
        return {
            estado_validacion: false,
            clasificacion: "error de validacion",
            explicacion: `El valor de pH (${ph}) es invalido. Debe estar entre 0 y 14.`
        };
    }

    // Nada puede ser más frío que el cero absoluto
    if (temperaturaC < -273.15) {
        return {
            estado_validacion: false,
            clasificacion: "error termodinamico",
            explicacion: `La temperatura (${temperaturaC}°C) es imposible. No puede ser menor al cero absoluto (-273.15°C).`
        };
    }

    if (concentracionPorcentaje <= 0 || concentracionPorcentaje > 100) {
        return {
            estado_validacion: false,
            clasificacion: "error de concentracion",
            explicacion: `La concentracion (${concentracionPorcentaje}%) es ilogica. Debe estar entre 1% y 100%.`
        };
    }

    let clasificacionQuimica = "";
    if (ph < 7) {
        clasificacionQuimica = "solucion acida";
    } else if (ph === 7) {
        clasificacionQuimica = "solucion neutra";
    } else {
        clasificacionQuimica = "solucion alcalina";
    }

    return {
        estado_validacion: true,
        clasificacion: clasificacionQuimica,
        explicacion: `Solucion validada correctamente a ${temperaturaC}°C con un ${concentracionPorcentaje}% de concentracion. Se clasifica como '${clasificacionQuimica}'.`
    };
}

// Pruebas

console.log("=== Caso Normal ===");
const resultadoNormal = validarSolucionQuimica(2.5, 25, 15);
console.log(resultadoNormal);

console.log("\n=== Casos Borde (Errores) ===");
const resultadoBorde1 = validarSolucionQuimica(16, 20, 50);
console.log(resultadoBorde1);

// Error científico
const resultadoBorde2 = validarSolucionQuimica(7, -300, 100);
console.log(resultadoBorde2);