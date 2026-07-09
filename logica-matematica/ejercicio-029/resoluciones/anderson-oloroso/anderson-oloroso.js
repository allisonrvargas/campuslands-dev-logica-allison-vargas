function analizarPeliculasMiedo(peliculas) {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una película registrada."
    };
  }

  const resultados = [];
  let sumaNivelTerror = 0;
  let peliculaMasAterradora = peliculas[0];

  for (const pelicula of peliculas) {
    const {
      titulo,
      nivelTerror,
      escenasMiedo
    } = pelicula;

    if (
      nivelTerror < 0 ||
      escenasMiedo < 0 ||
      !Number.isInteger(escenasMiedo)
    ) {
      return {
        estado: "Error",
        motivo: "Los niveles y cantidades deben ser valores válidos."
      };
    }

    const indiceTerror =
      nivelTerror * escenasMiedo;

    sumaNivelTerror += indiceTerror;

    if (
      indiceTerror >
      peliculaMasAterradora.nivelTerror *
      peliculaMasAterradora.escenasMiedo
    ) {
      peliculaMasAterradora = pelicula;
    }

    let clasificacion;

    if (indiceTerror % 3 === 0) {
      clasificacion = "Terror divisible nivel 3";
    } else if (indiceTerror % 2 === 0) {
      clasificacion = "Terror divisible nivel 2";
    } else {
      clasificacion = "Terror especial";
    }

    resultados.push({
      titulo,
      indiceTerror,
      clasificacion
    });
  }

  return {
    peliculasEvaluadas: peliculas.length,
    promedioTerror: Number(
      (sumaNivelTerror / peliculas.length).toFixed(2)
    ),
    peliculaMasAterradora: peliculaMasAterradora.titulo,
    resultados
  };
}

const peliculas = [
  {
    titulo: "La Casa Oscura",
    nivelTerror: 8,
    escenasMiedo: 9
  },
  {
    titulo: "Sombras Nocturnas",
    nivelTerror: 7,
    escenasMiedo: 5
  },
  {
    titulo: "El Ritual Perdido",
    nivelTerror: 9,
    escenasMiedo: 6
  }
];

console.log(analizarPeliculasMiedo(peliculas));