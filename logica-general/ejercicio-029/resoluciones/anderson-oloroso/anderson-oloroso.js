function simularEstadosPeliculasMiedo(peliculas) {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una película registrada."
    };
  }

  const resultados = [];
  let nivelTensionTotal = 0;
  let peliculaMasTensa = null;

  for (const pelicula of peliculas) {
    const {
      titulo,
      escenas,
      terrorInicial,
      espectadores
    } = pelicula;

    if (
      !titulo ||
      !Array.isArray(escenas) ||
      escenas.length === 0 ||
      terrorInicial < 0 ||
      terrorInicial > 100 ||
      espectadores < 0
    ) {
      resultados.push({
        titulo,
        estado: "Datos inválidos"
      });

      continue;
    }

    let nivelTension = terrorInicial;
    let estadoActual = "Estable";

    for (const escena of escenas) {
      if (escena.tipo === "Susto") {
        nivelTension += escena.intensidad;
      } else if (escena.tipo === "Suspenso") {
        nivelTension += escena.intensidad / 2;
      } else if (escena.tipo === "Calma") {
        nivelTension -= escena.intensidad;
      }

      if (nivelTension < 0) {
        nivelTension = 0;
      }

      if (nivelTension > 100) {
        nivelTension = 100;
      }

      if (nivelTension >= 80) {
        estadoActual = "Terror extremo";
      } else if (nivelTension >= 50) {
        estadoActual = "Tensión alta";
      } else {
        estadoActual = "Suspenso controlado";
      }
    }

    nivelTensionTotal += nivelTension;

    if (
      peliculaMasTensa === null ||
      nivelTension > peliculaMasTensa.nivelTension
    ) {
      peliculaMasTensa = {
        titulo,
        nivelTension
      };
    }

    resultados.push({
      titulo,
      nivelTensionFinal: nivelTension,
      estadoActual,
      espectadores
    });
  }

  return {
    peliculasSimuladas: peliculas.length,
    promedioTension: Number(
      (nivelTensionTotal / peliculas.length).toFixed(2)
    ),
    peliculaMasTensa: peliculaMasTensa?.titulo || "Ninguna",
    resultados
  };
}

const peliculas = [
  {
    titulo: "La Casa Oscura",
    terrorInicial: 40,
    espectadores: 5000,
    escenas: [
      {
        tipo: "Suspenso",
        intensidad: 20
      },
      {
        tipo: "Susto",
        intensidad: 40
      }
    ]
  },
  {
    titulo: "El Bosque Perdido",
    terrorInicial: 30,
    espectadores: 3000,
    escenas: [
      {
        tipo: "Calma",
        intensidad: 10
      },
      {
        tipo: "Susto",
        intensidad: 50
      }
    ]
  }
];

console.log(simularEstadosPeliculasMiedo(peliculas));