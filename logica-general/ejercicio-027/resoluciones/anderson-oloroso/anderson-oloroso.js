function detectarInconsistenciasPlaylist(canciones) {
  if (!Array.isArray(canciones) || canciones.length === 0) {
    return {
      estado: "Error",
      motivo: "La playlist debe contener al menos una canción."
    };
  }

  const inconsistencias = [];
  let duracionTotal = 0;
  const artistas = {};

  for (const cancion of canciones) {
    const {
      titulo,
      artista,
      duracion,
      reproducciones,
      genero
    } = cancion;

    if (
      duracion <= 0 ||
      reproducciones < 0 ||
      !titulo ||
      !artista ||
      !genero
    ) {
      inconsistencias.push({
        titulo,
        motivo: "Datos incompletos o valores inválidos."
      });
      continue;
    }

    duracionTotal += duracion;

    if (artistas[artista]) {
      artistas[artista]++;
    } else {
      artistas[artista] = 1;
    }

    if (duracion > 600) {
      inconsistencias.push({
        titulo,
        motivo: "La duración supera el límite permitido."
      });
    }

    if (reproducciones === 0) {
      inconsistencias.push({
        titulo,
        motivo: "La canción no tiene reproducciones registradas."
      });
    }
  }

  for (const artista in artistas) {
    if (artistas[artista] > 3) {
      inconsistencias.push({
        artista,
        motivo: "El artista aparece demasiadas veces en la playlist."
      });
    }
  }

  return {
    cancionesAnalizadas: canciones.length,
    duracionTotalMinutos: Number(
      (duracionTotal / 60).toFixed(2)
    ),
    inconsistenciasEncontradas: inconsistencias.length,
    inconsistencias
  };
}

const playlist = [
  {
    titulo: "Neon Dreams",
    artista: "CyberBand",
    duracion: 240,
    reproducciones: 5000,
    genero: "Electrónica"
  },
  {
    titulo: "Infinite Night",
    artista: "CyberBand",
    duracion: 720,
    reproducciones: 0,
    genero: "Electrónica"
  },
  {
    titulo: "Ocean Lights",
    artista: "WaveSound",
    duracion: 300,
    reproducciones: 2500,
    genero: "Pop"
  }
];

console.log(detectarInconsistenciasPlaylist(playlist));