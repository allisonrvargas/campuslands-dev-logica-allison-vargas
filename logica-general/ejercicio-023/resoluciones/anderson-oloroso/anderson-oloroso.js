function evaluarTorneoEsports(jugadores) {
  if (!Array.isArray(jugadores) || jugadores.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un jugador registrado."
    };
  }

  const resultados = [];
  let puntosTotales = 0;
  let mejorJugador = null;

  for (const jugador of jugadores) {
    const {
      nombre,
      victorias,
      derrotas,
      asistencias,
      nivel
    } = jugador;

    if (
      victorias < 0 ||
      derrotas < 0 ||
      asistencias < 0 ||
      nivel < 1 ||
      nivel > 100
    ) {
      return {
        estado: "Error",
        motivo: "Los datos del jugador contienen valores inválidos."
      };
    }

    const partidas = victorias + derrotas;

    if (partidas === 0) {
      return {
        estado: "Error",
        motivo: `El jugador ${nombre} no tiene partidas registradas.`
      };
    }

    const porcentajeVictoria = Number(
      ((victorias / partidas) * 100).toFixed(2)
    );

    const puntos =
      (victorias * 5) +
      (asistencias * 2) +
      (nivel * 3) -
      (derrotas * 2);

    puntosTotales += puntos;

    if (
      mejorJugador === null ||
      puntos > mejorJugador.puntos
    ) {
      mejorJugador = {
        nombre,
        puntos
      };
    }

    let decision;

    if (nivel >= 90 && porcentajeVictoria >= 80) {
      decision = "Clasificado a final";
    } else if (nivel >= 60 && porcentajeVictoria >= 60) {
      decision = "Clasificado a semifinal";
    } else if (porcentajeVictoria >= 50) {
      decision = "Clasificado a eliminatoria";
    } else {
      decision = "Eliminado";
    }

    resultados.push({
      nombre,
      porcentajeVictoria,
      puntos,
      decision
    });
  }

  return {
    jugadoresEvaluados: jugadores.length,
    promedioPuntos: Number(
      (puntosTotales / jugadores.length).toFixed(2)
    ),
    jugadorDestacado: mejorJugador.nombre,
    resultados
  };
}

const jugadores = [
  {
    nombre: "CyberWolf",
    victorias: 15,
    derrotas: 2,
    asistencias: 30,
    nivel: 95
  },
  {
    nombre: "DarkByte",
    victorias: 10,
    derrotas: 5,
    asistencias: 20,
    nivel: 70
  },
  {
    nombre: "NeoPlayer",
    victorias: 4,
    derrotas: 6,
    asistencias: 8,
    nivel: 40
  }
];

console.log(evaluarTorneoEsports(jugadores));