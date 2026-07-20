//Ejercicio 024: Rangos y máximos en inventario de motos

function analizarInventarioMotos(stockDiario) {
    // 1. Guardrail: Validación de entrada
    if (!Array.isArray(stockDiario) || stockDiario.length === 0) {
        return { estado: "Error", mensaje: "No hay datos de inventario disponibles." };
    }

    // 2. Limpieza de datos: Asegurar que todos sean números finitos
    const dataLimpia = stockDiario
        .map(n => Number(n))
        .filter(n => Number.isFinite(n));

    if (dataLimpia.length === 0) {
        return { estado: "Error", mensaje: "No se encontraron valores numéricos válidos." };
    }

    // 3. Cálculo de extremos usando reduce para evitar errores de stack en arreglos gigantes
    const stockMaximo = dataLimpia.reduce((max, val) => (val > max ? val : max), -Infinity);
    const stockMinimo = dataLimpia.reduce((min, val) => (val < min ? val : min), Infinity);

    // 4. Cálculo del rango y estado
    const rangoFluctuacion = stockMaximo - stockMinimo;

    let estado = "";
    if (rangoFluctuacion > 20) {
        estado = "Alta volatilidad (Revisar logística)";
    } else if (rangoFluctuacion > 10) {
        estado = "Fluctuación moderada";
    } else {
        estado = "Inventario estable";
    }

    return {
        stockMaximo,
        stockMinimo,
        rangoFluctuacion,
        estado
    };
}

console.log(analizarInventarioMotos([5, 12, 8, 25, 10])); 
console.log(analizarInventarioMotos([10, 11, 10, 12]));  
console.log(analizarInventarioMotos([5, "25", null, 10]));