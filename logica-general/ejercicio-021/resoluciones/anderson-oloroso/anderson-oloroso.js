function clasificarJugadores(jugadores) {
  if (!Array.isArray(jugadores) || jugadores.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un jugador registrado."
    };
  }

  const resultados = [];
  let sumaPuntos = 0;
  let jugadorDestacado = jugadores[0];

  for (const jugador of jugadores) {
    const {
      nombre,
      victorias,
      derrotas,
      nivel
    } = jugador;

    if (
      victorias < 0 ||
      derrotas < 0 ||
      nivel < 1 ||
      nivel > 100
    ) {
      return {
        estado: "Error",
        motivo: "Los datos del jugador no cumplen las reglas establecidas."
      };
    }

    const partidasTotales = victorias + derrotas;

    const porcentajeVictoria =
      partidasTotales === 0
        ? 0
        : Number(((victorias / partidasTotales) * 100).toFixed(2));

    const puntuacion =
      (victorias * 10) +
      (nivel * 2) -
      (derrotas * 3);

    sumaPuntos += puntuacion;

    if (puntuacion > calcularPuntuacion(jugadorDestacado)) {
      jugadorDestacado = jugador;
    }

    let categoria;

    if (nivel >= 80 && porcentajeVictoria >= 75) {
      categoria = "Jugador Élite";
    } else if (nivel >= 50 && porcentajeVictoria >= 50) {
      categoria = "Jugador Competitivo";
    } else {
      categoria = "Jugador En Desarrollo";
    }

    resultados.push({
      nombre,
      porcentajeVictoria,
      puntuacion,
      categoria
    });
  }

  return {
    jugadoresEvaluados: jugadores.length,
    promedioPuntuacion: Number(
      (sumaPuntos / jugadores.length).toFixed(2)
    ),
    jugadorDestacado: jugadorDestacado.nombre,
    resultados
  };
}

function calcularPuntuacion(jugador) {
  return (
    (jugador.victorias * 10) +
    (jugador.nivel * 2) -
    (jugador.derrotas * 3)
  );
}

const jugadores = [
  {
    nombre: "Shadow",
    victorias: 80,
    derrotas: 15,
    nivel: 90
  },
  {
    nombre: "Nova",
    victorias: 40,
    derrotas: 35,
    nivel: 60
  },
  {
    nombre: "Pixel",
    victorias: 20,
    derrotas: 40,
    nivel: 30
  }
];

console.log(clasificarJugadores(jugadores));