function calcularRankingFutbolSala(equipos) {

  if (!Array.isArray(equipos) || equipos.length === 0) {
    return {
      estado: "Error",
      mensaje: "No existen equipos registrados."
    };
  }


  let totalEquipos = equipos.length;
  let puntosAcumulados = 0;


  const resultados = equipos.map((equipo) => {

    const {
      nombre,
      partidosJugados,
      victorias,
      empates,
      golesFavor,
      golesContra
    } = equipo;


    if (
      !nombre ||
      partidosJugados <= 0 ||
      victorias < 0 ||
      empates < 0 ||
      golesFavor < 0 ||
      golesContra < 0
    ) {
      return {
        nombre,
        estado: "Datos inválidos"
      };
    }


    // Cálculo de puntos
    const derrotas =
      partidosJugados - victorias - empates;


    const puntos =
      (victorias * 3) +
      (empates * 1);


    // Porcentaje de rendimiento

    const rendimiento =
      (puntos / (partidosJugados * 3)) * 100;


    // Diferencia de goles

    const diferenciaGoles =
      golesFavor - golesContra;


    let categoria;


    if (rendimiento >= 80 && diferenciaGoles >= 10) {
      categoria = "Campeón";
    } 
    else if (rendimiento >= 60) {
      categoria = "Competitivo";
    } 
    else if (rendimiento >= 40) {
      categoria = "Regular";
    } 
    else {
      categoria = "En riesgo";
    }


    puntosAcumulados += puntos;


    return {
      nombre,
      partidosJugados,
      victorias,
      empates,
      derrotas,
      puntos,
      rendimiento: rendimiento.toFixed(2) + "%",
      diferenciaGoles,
      categoria
    };

  });


  // Ordenar equipos por puntos obtenidos

  resultados.sort((a, b) => {
    return (b.puntos || 0) - (a.puntos || 0);
  });


  return {
    totalEquipos,
    puntosTotalesLiga: puntosAcumulados,
    ranking: resultados
  };

}



const equipos = [
  {
    nombre: "Halcones FC",
    partidosJugados: 10,
    victorias: 8,
    empates: 1,
    golesFavor: 35,
    golesContra: 15
  },
  {
    nombre: "Titanes FS",
    partidosJugados: 10,
    victorias: 5,
    empates: 2,
    golesFavor: 25,
    golesContra: 22
  },
  {
    nombre: "Dragones",
    partidosJugados: 10,
    victorias: 2,
    empates: 3,
    golesFavor: 12,
    golesContra: 30
  }
];


console.log(calcularRankingFutbolSala(equipos));