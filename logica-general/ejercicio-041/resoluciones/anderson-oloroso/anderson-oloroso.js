function clasificarJugadores(jugadores) {
  if (!Array.isArray(jugadores) || jugadores.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen jugadores para clasificar."
    };
  }

  const resultados = [];
  let elite = 0;
  let competitivo = 0;
  let principiante = 0;

  for (const jugador of jugadores) {
    const {
      nombre,
      victorias,
      derrotas,
      horasJuego
    } = jugador;

    if (
      !nombre ||
      victorias < 0 ||
      derrotas < 0 ||
      horasJuego < 0
    ) {
      resultados.push({
        nombre,
        estado: "Datos inválidos"
      });
      continue;
    }

    const partidas = victorias + derrotas;
    const porcentajeVictoria = partidas > 0
      ? (victorias / partidas) * 100
      : 0;

    let categoria = "";

    if (
      porcentajeVictoria >= 80 &&
      horasJuego >= 500
    ) {
      categoria = "Jugador Elite";
      elite++;
    } else if (
      porcentajeVictoria >= 50 &&
      horasJuego >= 100
    ) {
      categoria = "Jugador Competitivo";
      competitivo++;
    } else {
      categoria = "Jugador Principiante";
      principiante++;
    }

    resultados.push({
      nombre,
      porcentajeVictoria: porcentajeVictoria.toFixed(2) + "%",
      categoria
    });
  }

  return {
    jugadoresEvaluados: jugadores.length,
    elite,
    competitivo,
    principiante,
    resultados
  };
}

const jugadores = [
  {
    nombre: "ShadowX",
    victorias: 90,
    derrotas: 10,
    horasJuego: 800
  },
  {
    nombre: "CyberWolf",
    victorias: 40,
    derrotas: 30,
    horasJuego: 250
  },
  {
    nombre: "NewPlayer",
    victorias: 5,
    derrotas: 20,
    horasJuego: 30
  }
];

console.log(clasificarJugadores(jugadores));