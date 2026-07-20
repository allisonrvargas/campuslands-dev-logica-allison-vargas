function calcularRankingFutbolSala(equipos) {
  if (!Array.isArray(equipos) || equipos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un equipo registrado."
    };
  }

  const ranking = [];

  for (const equipo of equipos) {
    const {
      nombre,
      partidosJugados,
      partidosGanados,
      golesAFavor,
      golesEnContra
    } = equipo;

    if (
      partidosJugados <= 0 ||
      partidosGanados < 0 ||
      partidosGanados > partidosJugados ||
      golesAFavor < 0 ||
      golesEnContra < 0
    ) {
      return {
        estado: "Error",
        motivo: "Las estadísticas del equipo son inválidas."
      };
    }

    const porcentajeVictorias = Number(
      ((partidosGanados / partidosJugados) * 100).toFixed(2)
    );

    const diferenciaGoles = golesAFavor - golesEnContra;

    let categoria;

    if (porcentajeVictorias >= 80 && diferenciaGoles >= 20) {
      categoria = "Candidato al título";
    } else if (porcentajeVictorias >= 60 && diferenciaGoles >= 10) {
      categoria = "Competidor fuerte";
    } else if (porcentajeVictorias >= 40) {
      categoria = "Equipo competitivo";
    } else {
      categoria = "En desarrollo";
    }

    ranking.push({
      nombre,
      porcentajeVictorias: `${porcentajeVictorias}%`,
      diferenciaGoles,
      categoria
    });
  }

  return ranking;
}

const equipos = [
  {
    nombre: "Tigres FS",
    partidosJugados: 20,
    partidosGanados: 17,
    golesAFavor: 65,
    golesEnContra: 35
  },
  {
    nombre: "Leones FS",
    partidosJugados: 20,
    partidosGanados: 11,
    golesAFavor: 48,
    golesEnContra: 40
  }
];

console.log(calcularRankingFutbolSala(equipos));