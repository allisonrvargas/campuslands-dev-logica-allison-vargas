function analizarPeliculasCienciaFiccion(peliculas) {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una película registrada."
    };
  }

  let sumaPuntuaciones = 0;
  let peliculaMayorPuntuacion = peliculas[0];

  const resultados = [];

  for (const pelicula of peliculas) {
    const {
      titulo,
      puntuacionCritica,
      puntuacionPublico,
      efectosEspeciales
    } = pelicula;

    if (
      puntuacionCritica < 0 ||
      puntuacionCritica > 100 ||
      puntuacionPublico < 0 ||
      puntuacionPublico > 100 ||
      efectosEspeciales < 0 ||
      efectosEspeciales > 100
    ) {
      return {
        estado: "Error",
        motivo: "Las puntuaciones deben estar entre 0 y 100."
      };
    }

    const puntuacionFinal = Number(
      (
        (puntuacionCritica * 0.4) +
        (puntuacionPublico * 0.35) +
        (efectosEspeciales * 0.25)
      ).toFixed(2)
    );

    sumaPuntuaciones += puntuacionFinal;

    if (
      puntuacionFinal >
      calcularPuntuacionPelicula(peliculaMayorPuntuacion)
    ) {
      peliculaMayorPuntuacion = pelicula;
    }

    let categoria;

    if (puntuacionFinal >= 90) {
      categoria = "Obra maestra futurista";
    } else if (puntuacionFinal >= 75) {
      categoria = "Éxito de ciencia ficción";
    } else if (puntuacionFinal >= 60) {
      categoria = "Aceptable";
    } else {
      categoria = "Bajo rendimiento";
    }

    resultados.push({
      titulo,
      puntuacionFinal,
      categoria
    });
  }

  return {
    peliculasEvaluadas: peliculas.length,
    promedioGeneral: Number(
      (sumaPuntuaciones / peliculas.length).toFixed(2)
    ),
    mejorPelicula: peliculaMayorPuntuacion.titulo,
    resultados
  };
}

function calcularPuntuacionPelicula(pelicula) {
  return (
    (pelicula.puntuacionCritica * 0.4) +
    (pelicula.puntuacionPublico * 0.35) +
    (pelicula.efectosEspeciales * 0.25)
  );
}

const peliculas = [
  {
    titulo: "Galaxia Perdida",
    puntuacionCritica: 95,
    puntuacionPublico: 90,
    efectosEspeciales: 98
  },
  {
    titulo: "Mundos Paralelos",
    puntuacionCritica: 80,
    puntuacionPublico: 85,
    efectosEspeciales: 88
  }
];

console.log(analizarPeliculasCienciaFiccion(peliculas));