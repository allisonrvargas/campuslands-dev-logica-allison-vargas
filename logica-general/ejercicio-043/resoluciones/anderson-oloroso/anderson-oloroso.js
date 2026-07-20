function tomarDecisionTorneoEsports(equipos) {
  if (!Array.isArray(equipos) || equipos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen equipos registrados."
    };
  }

  const resultados = [];
  let clasificados = 0;
  let eliminados = 0;
  let enRevision = 0;

  for (const equipo of equipos) {
    const {
      nombre,
      victorias,
      derrotas,
      rendimiento,
      conducta
    } = equipo;

    if (
      !nombre ||
      victorias < 0 ||
      derrotas < 0 ||
      rendimiento < 0 ||
      rendimiento > 100 ||
      typeof conducta !== "boolean"
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

    let decision = "";

    if (
      conducta &&
      porcentajeVictoria >= 70 &&
      rendimiento >= 80
    ) {
      decision = "Clasificado a fase final";
      clasificados++;

    } else if (
      conducta &&
      porcentajeVictoria >= 50
    ) {
      decision = "En revisión técnica";
      enRevision++;

    } else {
      decision = "Eliminado";
      eliminados++;
    }

    resultados.push({
      nombre,
      porcentajeVictoria: porcentajeVictoria.toFixed(2) + "%",
      decision
    });
  }

  return {
    equiposEvaluados: equipos.length,
    clasificados,
    enRevision,
    eliminados,
    resultados
  };
}


const equipos = [
  {
    nombre: "Cyber Titans",
    victorias: 8,
    derrotas: 2,
    rendimiento: 90,
    conducta: true
  },
  {
    nombre: "Pixel Warriors",
    victorias: 6,
    derrotas: 4,
    rendimiento: 70,
    conducta: true
  },
  {
    nombre: "Dark Squad",
    victorias: 3,
    derrotas: 7,
    rendimiento: 50,
    conducta: false
  }
];

console.log(tomarDecisionTorneoEsports(equipos));