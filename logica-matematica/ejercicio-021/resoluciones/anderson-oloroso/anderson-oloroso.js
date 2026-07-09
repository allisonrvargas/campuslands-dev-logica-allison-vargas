function calcularResultadoPartida(partida) {
  const {
    jugador,
    victorias,
    derrotas,
    asistencias,
    penalizaciones
  } = partida;

  const valores = [
    victorias,
    derrotas,
    asistencias,
    penalizaciones
  ];

  if (valores.some(valor => valor < 0)) {
    return {
      estado: "Error",
      motivo: "Las estadísticas no pueden contener valores negativos."
    };
  }

  let puntaje = 0;

  // Sistema de puntuación
  puntaje += victorias * 10;
  puntaje += asistencias * 3;
  puntaje -= derrotas * 5;
  puntaje -= penalizaciones * 8;

  let rango;

  if (puntaje >= 100) {
    rango = "Jugador Elite";
  } else if (puntaje >= 50) {
    rango = "Jugador Avanzado";
  } else if (puntaje >= 0) {
    rango = "Jugador Intermedio";
  } else {
    rango = "Jugador Novato";
  }

  return {
    jugador,
    puntajeFinal: puntaje,
    rango
  };
}

const partida = {
  jugador: "ShadowX",
  victorias: 8,
  derrotas: 2,
  asistencias: 12,
  penalizaciones: 1
};

console.log(calcularResultadoPartida(partida));