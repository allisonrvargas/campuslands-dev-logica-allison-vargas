function analizarTorneoEsports(jugadores) {

  if (!Array.isArray(jugadores) || jugadores.length === 0) {
    return {
      estado: "Error",
      mensaje: "No existen jugadores registrados."
    };
  }


  let sumaPuntuaciones = 0;
  let partidasTotales = 0;


  const puntuaciones = jugadores.map((jugador) => {

    const {
      nombre,
      partidas,
      kills,
      asistencias,
      puntosExtra
    } = jugador;


    if (
      !nombre ||
      partidas <= 0 ||
      kills < 0 ||
      asistencias < 0 ||
      puntosExtra < 0
    ) {
      return {
        nombre,
        estado: "Datos inválidos"
      };
    }


    // Fórmula de rendimiento individual

    const puntuacion =
      ((kills * 10) +
      (asistencias * 5) +
      puntosExtra) / partidas;


    sumaPuntuaciones += puntuacion;
    partidasTotales += partidas;


    return {
      nombre,
      partidas,
      puntuacion: Number(puntuacion.toFixed(2))
    };

  });


  const jugadoresValidos =
    puntuaciones.filter(j => j.puntuacion !== undefined);


  const valoresOrdenados =
    jugadoresValidos
      .map(j => j.puntuacion)
      .sort((a, b) => a - b);


  // Cálculo de mediana

  let mediana;


  const mitad =
    Math.floor(valoresOrdenados.length / 2);


  if (valoresOrdenados.length % 2 === 0) {

    mediana =
      (valoresOrdenados[mitad - 1] +
      valoresOrdenados[mitad]) / 2;

  } else {

    mediana =
      valoresOrdenados[mitad];

  }


  const promedioGeneral =
    sumaPuntuaciones / jugadoresValidos.length;


  let jugadorDestacado =
    jugadoresValidos.reduce((mejor, actual) => {

      if (!mejor || actual.puntuacion > mejor.puntuacion) {
        return actual;
      }

      return mejor;

    }, null);


  return {
    jugadoresEvaluados: jugadoresValidos.length,
    partidasAnalizadas: partidasTotales,
    promedioGeneral: promedioGeneral.toFixed(2),
    mediana: mediana.toFixed(2),
    mejorJugador: jugadorDestacado,
    resultados: puntuaciones
  };

}



const jugadores = [
  {
    nombre: "CyberWolf",
    partidas: 10,
    kills: 80,
    asistencias: 40,
    puntosExtra: 50
  },
  {
    nombre: "NeoPlayer",
    partidas: 10,
    kills: 60,
    asistencias: 30,
    puntosExtra: 20
  },
  {
    nombre: "DarkByte",
    partidas: 10,
    kills: 40,
    asistencias: 20,
    puntosExtra: 10
  }
];


console.log(analizarTorneoEsports(jugadores));