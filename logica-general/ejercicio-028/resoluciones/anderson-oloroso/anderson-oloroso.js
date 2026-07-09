function procesarPeliculasCienciaFiccion(peliculas) {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una película registrada."
    };
  }

  const resultados = [];
  let puntuacionTotal = 0;
  let peliculaDestacada = null;

  for (const pelicula of peliculas) {
    const {
      titulo,
      duracion,
      puntuacion,
      presupuesto,
      tecnologia
    } = pelicula;

    if (
      !titulo ||
      duracion <= 0 ||
      puntuacion < 0 ||
      puntuacion > 10 ||
      presupuesto < 0
    ) {
      resultados.push({
        titulo,
        estado: "Datos inválidos"
      });

      continue;
    }

    let faseProduccion;

    if (presupuesto >= 100000000 && tecnologia === "Avanzada") {
      faseProduccion = "Producción Premium";
    } else if (
      presupuesto >= 50000000 ||
      tecnologia === "Avanzada"
    ) {
      faseProduccion = "Producción Estándar";
    } else {
      faseProduccion = "Producción Básica";
    }

    const valoracionFinal =
      (puntuacion * 10) +
      (duracion / 30);

    puntuacionTotal += valoracionFinal;

    if (
      peliculaDestacada === null ||
      valoracionFinal > peliculaDestacada.valoracion
    ) {
      peliculaDestacada = {
        titulo,
        valoracion: valoracionFinal
      };
    }

    resultados.push({
      titulo,
      faseProduccion,
      valoracionFinal: Number(
        valoracionFinal.toFixed(2)
      ),
      estado: "Procesada"
    });
  }

  return {
    peliculasProcesadas: peliculas.length,
    promedioValoracion: Number(
      (puntuacionTotal / peliculas.length).toFixed(2)
    ),
    peliculaDestacada: peliculaDestacada.titulo,
    resultados
  };
}

const peliculas = [
  {
    titulo: "Galactic Horizon",
    duracion: 150,
    puntuacion: 9,
    presupuesto: 200000000,
    tecnologia: "Avanzada"
  },
  {
    titulo: "Mars Colony",
    duracion: 120,
    puntuacion: 7,
    presupuesto: 60000000,
    tecnologia: "Media"
  },
  {
    titulo: "Lost Planet",
    duracion: 90,
    puntuacion: 5,
    presupuesto: 20000000,
    tecnologia: "Básica"
  }
];

console.log(procesarPeliculasCienciaFiccion(peliculas));