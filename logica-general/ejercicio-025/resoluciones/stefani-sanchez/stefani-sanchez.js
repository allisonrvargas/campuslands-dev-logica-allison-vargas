// Ejercicio 025 - Ordenamiento de prioridades
// Autor: Stefani Sánchez

function ordenarTrabajos(trabajos) {
  if (!Array.isArray(trabajos) || trabajos.length === 0) {
    return "No hay trabajos para ordenar.";
  }

  const prioridad = {
    alta: 1,
    media: 2,
    baja: 3,
  };

  trabajos.sort((a, b) => prioridad[a.prioridad] - prioridad[b.prioridad]);

  return trabajos;
}

// Caso de prueba normal
const trabajos = [
  { trabajo: "Cambio de aceite", prioridad: "media" },
  { trabajo: "Reparación de frenos", prioridad: "alta" },
  { trabajo: "Lavado", prioridad: "baja" },
  { trabajo: "Cambio de batería", prioridad: "alta" },
];

console.log("Orden de atención:");
console.log(ordenarTrabajos(trabajos));

// Caso borde
console.log("\nCaso borde:");
console.log(ordenarTrabajos([]));