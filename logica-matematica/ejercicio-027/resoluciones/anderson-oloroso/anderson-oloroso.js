function analizarPlaylistMusical(canciones) {
  if (!Array.isArray(canciones) || canciones.length === 0) {
    return {
      estado: "Error",
      motivo: "La playlist debe contener al menos una canción."
    };
  }

  let duracionTotal = 0;
  let mayorDuracion = canciones[0];

  const secuenciaReproduccion = [];

  for (const cancion of canciones) {
    const {
      titulo,
      artista,
      duracion
    } = cancion;

    if (duracion <= 0) {
      return {
        estado: "Error",
        motivo: "La duración de las canciones debe ser mayor que cero."
      };
    }

    duracionTotal += duracion;

    if (duracion > mayorDuracion.duracion) {
      mayorDuracion = cancion;
    }

    secuenciaReproduccion.push({
      posicion: secuenciaReproduccion.length + 1,
      titulo,
      artista,
      duracion
    });
  }

  const promedioDuracion = Number(
    (duracionTotal / canciones.length).toFixed(2)
  );

  let tipoPlaylist;

  if (promedioDuracion >= 5) {
    tipoPlaylist = "Playlist extendida";
  } else if (promedioDuracion >= 3) {
    tipoPlaylist = "Playlist estándar";
  } else {
    tipoPlaylist = "Playlist corta";
  }

  return {
    cancionesRegistradas: canciones.length,
    duracionTotal,
    promedioDuracion,
    cancionMasLarga: mayorDuracion.titulo,
    tipoPlaylist,
    secuenciaReproduccion
  };
}

const canciones = [
  {
    titulo: "Ecos del Futuro",
    artista: "Nova Beat",
    duracion: 4
  },
  {
    titulo: "Horizonte Digital",
    artista: "Synth Wave",
    duracion: 6
  },
  {
    titulo: "Noche Estelar",
    artista: "Cosmic Sound",
    duracion: 3
  }
];

console.log(analizarPlaylistMusical(canciones));