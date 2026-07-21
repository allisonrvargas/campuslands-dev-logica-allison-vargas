function calcularResultadoCompetitivo(partidas) {

  if (!Array.isArray(partidas) || partidas.length === 0) {
    return {
      estado: "Error",
      mensaje: "No existen partidas registradas."
    };
  }


  let puntosTotales = 0;
  let partidasGanadas = 0;
  let partidasPerdidas = 0;


  const resultados = partidas.map((partida) => {

    const {
      jugador,
      victorias,
      derrotas,
      eliminaciones,
      asistencias
    } = partida;


    if (
      !jugador ||
      victorias < 0 ||
      derrotas < 0 ||
      eliminaciones < 0 ||
      asistencias < 0
    ) {
      return {
        jugador,
        estado: "Datos inválidos"
      };
    }


    /*
      Fórmula de puntuación:

      Puntos =
      (Victorias * 100)
      + (Eliminaciones * 10)
      + (Asistencias * 5)
      - (Derrotas * 20)
    */


    let puntos =
      (victorias * 100) +
      (eliminaciones * 10) +
      (asistencias * 5) -
      (derrotas * 20);


    // Regla especial: nunca existen puntos negativos

    if (puntos < 0) {
      puntos = 0;
    }


    let rango;


    if (puntos >= 1000) {
      rango = "Leyenda";
    } else if (puntos >= 500) {
      rango = "Elite";
    } else if (puntos >= 200) {
      rango = "Competitivo";
    } else {
      rango = "Principiante";
    }


    puntosTotales += puntos;


    if (victorias > derrotas) {
      partidasGanadas++;
    } else {
      partidasPerdidas++;
    }


    return {
      jugador,
      puntos,
      rango
    };

  });


  return {
    jugadoresEvaluados: partidas.length,
    puntosGenerales: puntosTotales,
    victoriasDominantes: partidasGanadas,
    derrotasDominantes: partidasPerdidas,
    resultados
  };

}



const jugadores = [
  {
    jugador: "Shadow",
    victorias: 8,
    derrotas: 2,
    eliminaciones: 50,
    asistencias: 30
  },
  {
    jugador: "Nova",
    victorias: 3,
    derrotas: 6,
    eliminaciones: 20,
    asistencias: 10
  }
];


console.log(calcularResultadoCompetitivo(jugadores));