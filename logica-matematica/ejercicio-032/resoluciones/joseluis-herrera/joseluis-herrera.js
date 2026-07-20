const estadisticasJugadores = [
  { nombre: "Mateo", efectividadSaque: 80, experiencia: 5, esZurdo: true },
  { nombre: "Daniel", efectividadSaque: 65, experiencia: 3, esZurdo: false },
  { nombre: "Lucas", efectividadSaque: 75, experiencia: 2, esZurdo: false },
  { nombre: "Diego", efectividadSaque: 90, experiencia: 6, esZurdo: true }
];

for (let i = 0; i < estadisticasJugadores.length; i++) {
  let jugador = estadisticasJugadores[i];
  let probabilidadVictoria = jugador.efectividadSaque;

  if (jugador.experiencia > 4) {
    probabilidadVictoria += 5;
  } else {
    probabilidadVictoria -= 3;
  }

  if (jugador.esZurdo) {
    probabilidadVictoria += 3;
  }

  if (probabilidadVictoria > 100) probabilidadVictoria = 100;

  console.log(`Jugador: ${jugador.nombre} -> Probabilidad de ganar: ${probabilidadVictoria}%`);
}