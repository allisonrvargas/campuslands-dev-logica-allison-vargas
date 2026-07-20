// Ejercicio 027 - Secuencias numéricas
// Autor: Stefani Sánchez

function generarSecuencia(inicio, cantidad) {
  if (cantidad <= 0) {
    return "La cantidad debe ser mayor que cero.";
  }

  const secuencia = [];

  for (let i = 0; i < cantidad; i++) {
    secuencia.push(inicio + i);
  }

  return secuencia;
}

// Caso de prueba normal
console.log("Caso normal:");
console.log(generarSecuencia(5, 6));

// Caso borde
console.log("\nCaso borde:");
console.log(generarSecuencia(10, 0));