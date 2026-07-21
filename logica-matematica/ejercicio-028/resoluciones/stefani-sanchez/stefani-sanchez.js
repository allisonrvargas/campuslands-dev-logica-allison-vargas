// Ejercicio 028 - Patrones de puntuación
// Autor: Stefani Sánchez

function calcularPuntaje(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return "No hay participantes.";
  }

  const puntajesFinales = participantes.map(
    (puntaje) => puntaje + bono - penalizacion
  );

  return puntajesFinales;
}

// Caso de prueba normal
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

console.log("Caso normal:");
console.log(calcularPuntaje(participantes, bono, penalizacion));

// Caso borde
console.log("\nCaso borde:");
console.log(calcularPuntaje([], bono, penalizacion));