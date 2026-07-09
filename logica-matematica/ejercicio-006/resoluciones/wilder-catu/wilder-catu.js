// ==========================================
// Reto: Autos Hiperdeportivos
// Campuslands
// ==========================================

// Función para clasificar un auto según su velocidad máxima.
function clasificarAuto(modelo, velocidadMaxima) {

    // Validación de datos
    if (velocidadMaxima < 0) {
        return {
            modelo: modelo,
            clasificacion: "Dato inválido",
            mensaje: "La velocidad máxima no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (velocidadMaxima >= 400) {
        clasificacion = "Hiperdeportivo";
    } else if (velocidadMaxima >= 350) {
        clasificacion = "Superdeportivo";
    } else if (velocidadMaxima >= 300) {
        clasificacion = "Deportivo";
    } else {
        clasificacion = "Alto rendimiento";
    }

    return {
        modelo: modelo,
        velocidadMaxima: velocidadMaxima,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarAuto("Bugatti Chiron Super Sport", 440);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarAuto("Koenigsegg Jesko", -20);
console.log("\nPrueba 2");
console.log(prueba2);