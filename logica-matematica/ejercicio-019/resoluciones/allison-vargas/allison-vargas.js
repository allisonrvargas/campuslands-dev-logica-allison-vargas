function validarFormulaQuimica(componentes) {
    // 1. Validar que la entrada sea un arreglo
    if (!Array.isArray(componentes) || componentes.length === 0) {
        return {
            componentes_validos: [],
            suma_total: 0,
            clasificacion: "inválido",
            explicacion: "La entrada debe ser un arreglo no vacío."
        };
    }

    const componentesValidos = [];
    let sumaTotal = 0;
    let elementosInvalidosCount = 0;

    // 2. Filtrar y validar cada componente
    for (let i = 0; i < componentes.length; i++) {
        const val = componentes[i];
        
        // Regla: Número entero positivo estricto (> 0)
        if (typeof val === 'number' && Number.isInteger(val) && val > 0) {
            componentesValidos.push(val);
            sumaTotal += val;
        } else {
            elementosInvalidosCount++;
        }
    }

    // Caso Borde: Ningún componente válido
    if (componentesValidos.length === 0) {
        return {
            componentes_validos: [],
            suma_total: 0,
            clasificacion: "inválido",
            explicacion: "No se encontraron coeficientes o subíndices válidos (deben ser enteros mayores a 0)."
        };
    }

    // 3. Clasificar reactividad/estabilidad química
    let clasificacion = "";
    if (sumaTotal <= 100) {
        clasificacion = "estable";
    } else if (sumaTotal <= 250) {
        clasificacion = "reactivo";
    } else {
        clasificacion = "inestable";
    }

    return {
        componentes_validos: componentesValidos,
        suma_total: sumaTotal,
        clasificacion: clasificacion,
        explicacion: `Se procesaron ${componentesValidos.length} componentes válidos (${elementosInvalidosCount} descartados). Suma total: ${sumaTotal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = validarFormulaQuimica([12, 18, 25, 30, -5, 2.5, "H2O"]);
console.log(caso1);

console.log("\n=== Caso Borde (Sin datos válidos) ===");
const caso2 = validarFormulaQuimica([0, -10, 1.5, null, "3"]);
console.log(caso2);