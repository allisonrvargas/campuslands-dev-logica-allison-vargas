// Función para clasificar un auto hiperdeportivo
function clasificarAuto(modelo, velocidadMaxima) {

    if (velocidadMaxima < 0) {
        return {
            modelo: modelo,
            clasificacion: "Dato inválido",
            mensaje: "La velocidad no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (velocidadMaxima >= 400) {
        clasificacion = "Élite";
    } else if (velocidadMaxima >= 350) {
        clasificacion = "Premium";
    } else if (velocidadMaxima >= 300) {
        clasificacion = "Deportivo";
    } else {
        clasificacion = "Estándar";
    }

    return {
        modelo: modelo,
        velocidadMaxima: velocidadMaxima,
        clasificacion: clasificacion
    };
}

// --------------------
// Prueba normal
// --------------------
const prueba1 = clasificarAuto("Bugatti Chiron", 420);

console.log("Prueba Normal");
console.log(prueba1);

// --------------------
// Caso borde
// --------------------
const prueba2 = clasificarAuto("Porsche 911 GT3", 300);

console.log("\nCaso Borde");
console.log(prueba2);