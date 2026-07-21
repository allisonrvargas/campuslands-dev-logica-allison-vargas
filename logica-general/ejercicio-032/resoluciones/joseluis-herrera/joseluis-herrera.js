const opcionesPalas = [
  { modelo: "Carbon Attack", estilo: "Ataque", precio: 85, nivel: "Avanzado" },
  { modelo: "Classic Control", estilo: "Control", precio: 45, nivel: "Principiante" },
  { modelo: "Pro Defensive", estilo: "Defensivo", precio: 60, nivel: "Intermedio" },
  { modelo: "Speed Master", estilo: "Ataque", precio: 120, nivel: "Avanzado" },
  { modelo: "Soft Touch", estilo: "Control", precio: 30, nivel: "Principiante" }
];

const perfilJugador = { estiloBuscado: "Ataque", presupuestoMaximo: 100 };
let mejorOpcion = null;

for (let i = 0; i < opcionesPalas.length; i++) {
  let pala = opcionesPalas[i];

  if (pala.estilo === perfilJugador.styleBuscado || pala.estilo === perfilJugador.estiloBuscado) {
    if (pala.precio <= perfilJugador.presupuestoMaximo) {
      if (mejorOpcion === null || pala.precio > mejorOpcion.precio) {
        mejorOpcion = pala;
      }
    }
  }
}

console.log("=== RECOMENDACIÓN DE EQUIPAMIENTO ===");
if (mejorOpcion) {
  console.log(`La mejor opción para tu estilo es: ${mejorOpcion.modelo} ($${mejorOpcion.precio})`);
} else {
  console.log("No se encontró ninguna pala que se ajuste a tu estilo y presupuesto.");
}