function clasificarJugadorCompetitivo(registroHistorial, puntosActuales) {
    if (!registroHistorial || registroHistorial.length === 0) {
      return "Clasificación Neutral";
    }
  
    let todoEsPositivo = true;
    let todoEsNegativo = true;
  
    for (let posicion = 0; posicion < registroHistorial.length; posicion++) {
      const resultadoPartida = registroHistorial[posicion];
  
      if (resultadoPartida !== "Victoria") {
        todoEsPositivo = false;
      }
      if (resultadoPartida !== "Derrota") {
        todoEsNegativo = false;
      }
    }
  
    if (todoEsPositivo) {
      return "Clasificación Positiva";
    } else if (todoEsNegativo) {
      return "Clasificación Negativa";
    } else {
      return "Clasificación Neutral";
    }
  }