function calcularProbabilidadVictoriaPingPong(partidas) {
  if (!Array.isArray(partidas) || partidas.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un registro de partidas."
    };
  }

  let victoriasJugadorA = 0;
  let totalPartidasValidas = 0;
  const resultados = [];

  for (const partida of partidas) {
    const {
      jugadorA,
      jugadorB,
      puntosA,
      puntosB
    } = partida;

    if (
      !jugadorA ||
      !jugadorB ||
      puntosA < 0 ||
      puntosB < 0 ||
      puntosA === puntosB
    ) {
      resultados.push({
        jugadorA,
        jugadorB,
        estado: "Datos inválidos"
      });
      continue;
    }

    totalPartidasValidas++;

    let ganador = "";

    if (puntosA > puntosB) {
      ganador = jugadorA;
      victoriasJugadorA++;
    } else {
      ganador = jugadorB;
    }

    resultados.push({
      jugadorA,
      jugadorB,
      ganador
    });
  }

  const probabilidad = totalPartidasValidas > 0
    ? (victoriasJugadorA / totalPartidasValidas) * 100
    : 0;

  return {
    partidasAnalizadas: partidas.length,
    partidasValidas: totalPartidasValidas,
    victoriasJugadorA,
    probabilidadVictoriaJugadorA: `${probabilidad.toFixed(2)}%`,
    resultados
  };
}

const partidas = [
  {
    jugadorA: "Ana",
    jugadorB: "Luis",
    puntosA: 11,
    puntosB: 7
  },
  {
    jugadorA: "Ana",
    jugadorB: "Luis",
    puntosA: 8,
    puntosB: 11
  },
  {
    jugadorA: "Ana",
    jugadorB: "Luis",
    puntosA: 11,
    puntosB: 9
  }
];

console.log(calcularProbabilidadVictoriaPingPong(partidas));