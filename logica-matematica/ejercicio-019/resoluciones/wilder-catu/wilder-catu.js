// ==========================================
// Reto: Fórmulas Químicas
// Campuslands
// ==========================================

// Función para clasificar una fórmula química según la cantidad de elementos.
function clasificarFormula(nombreCompuesto, cantidadElementos) {

    // Validación de datos
    if (cantidadElementos < 0) {
        return {
            compuesto: nombreCompuesto,
            clasificacion: "Dato inválido",
            mensaje: "La cantidad de elementos no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (cantidadElementos >= 5) {
        clasificacion = "Compuesto complejo";
    } else if (cantidadElementos >= 3) {
        clasificacion = "Compuesto intermedio";
    } else if (cantidadElementos >= 2) {
        clasificacion = "Compuesto simple";
    } else {
        clasificacion = "Elemento químico";
    }

    return {
        compuesto: nombreCompuesto,
        cantidadElementos: cantidadElementos,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarFormula("Ácido Sulfúrico", 3);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarFormula("Agua", -1);
console.log("\nPrueba 2");
console.log(prueba2);