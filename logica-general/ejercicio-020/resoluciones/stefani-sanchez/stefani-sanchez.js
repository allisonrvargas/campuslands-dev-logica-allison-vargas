// Logica General 020 - Estrategias de seleccion
// Autor: Stefani Sanchez

const comidas = [
  { nombre: "Hamburguesa", precio: 35, popularidad: 8 },
  { nombre: "Tacos", precio: 20, popularidad: 9 },
  { nombre: "Pizza", precio: 50, popularidad: 7 },
  { nombre: "Hot Dog", precio: 15, popularidad: 6 }
];

function seleccionarComida(lista, presupuesto) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return "No hay comidas disponibles.";
  }

  const opciones = lista.filter(comida => comida.precio <= presupuesto);

  if (opciones.length === 0) {
    return "No existen opciones dentro del presupuesto.";
  }

  opciones.sort((a, b) => b.popularidad - a.popularidad);

  return opciones[0];
}

const seleccion = seleccionarComida(comidas, 30);

console.log("Mejor opcion seleccionada:");
console.log(seleccion);


// Caso borde
console.log("\nCaso borde:");
console.log(seleccionarComida([], 20));