function compararJugadoresPingPong(jugadores) {
  if (!Array.isArray(jugadores) || jugadores.length < 2) {
    return {
      estado: "Error",
      motivo: "Se requieren al menos dos jugadores para realizar la comparación."
    };
  }

  let mejorJugador = null;
  const resultados = [];

  for (const jugador of jugadores) {
    const {
      nombre,
      victorias,
      derrotas,
      precision
    } = jugador;

    if (
      !nombre ||
      victorias < 0 ||
      derrotas < 0 ||
      precision < 0 ||
      precision > 100
    ) {
      resultados.push({
        nombre,
        estado: "Datos inválidos"
      });
      continue;
    }

    const puntaje =
      (victorias * 5) -
      (derrotas * 2) +
      (precision * 0.5);

    resultados.push({
      nombre,
      puntaje: Number(puntaje.toFixed(2))
    });

    if (
      mejorJugador === null ||
      puntaje > mejorJugador.puntaje
    ) {
      mejorJugador = {
        nombre,
        puntaje
      };
    }
  }

  return {
    jugadoresAnalizados: jugadores.length,
    mejorJugador: mejorJugador?.nombre || "Ninguno",
    resultados
  };
}

const jugadores = [
  {
    nombre: "Laura",
    victorias: 18,
    derrotas: 4,
    precision: 92
  },
  {
    nombre: "Daniel",
    victorias: 20,
    derrotas: 7,
    precision: 85
  },
  {
    nombre: "Camilo",
    victorias: 15,
    derrotas: 2,
    precision: 95
  }
];

console.log(compararJugadoresPingPong(jugadores));