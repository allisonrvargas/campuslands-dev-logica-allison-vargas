// Ejercicio 026 - Búsqueda de elementos
// Autor: Stefani Sánchez

function buscarAuto(listaAutos, modeloBuscado) {
  if (!Array.isArray(listaAutos) || listaAutos.length === 0) {
    return "No hay autos registrados.";
  }

  const auto = listaAutos.find(
    (item) => item.modelo.toLowerCase() === modeloBuscado.toLowerCase()
  );

  if (auto) {
    return `Auto encontrado: ${auto.modelo} - ${auto.marca}`;
  }

  return "El auto no fue encontrado.";
}

// Caso de prueba normal
const autos = [
  { marca: "Bugatti", modelo: "Chiron" },
  { marca: "Koenigsegg", modelo: "Jesko" },
  { marca: "Pagani", modelo: "Huayra" },
];

console.log(buscarAuto(autos, "Jesko"));

// Caso borde
console.log(buscarAuto([], "Chiron"));