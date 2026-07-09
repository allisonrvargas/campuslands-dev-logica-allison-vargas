function procesarItinerarioViaje(instrucciones) {
  if (!Array.isArray(instrucciones) || instrucciones.length === 0) {
    return {
      estado: "Error",
      motivo: "El itinerario debe contener instrucciones."
    };
  }

  let posicion = 0;
  let tiempoTotal = 0;
  let costoTotal = 0;
  const historial = [];

  for (const instruccion of instrucciones) {
    const {
      accion,
      distancia,
      tiempo,
      costo
    } = instruccion;

    if (
      !accion ||
      distancia < 0 ||
      tiempo < 0 ||
      costo < 0
    ) {
      historial.push({
        accion,
        estado: "Instrucción inválida"
      });

      continue;
    }

    switch (accion) {
      case "avanzar":
        posicion += distancia;
        tiempoTotal += tiempo;
        costoTotal += costo;

        historial.push({
          accion,
          resultado: `Se avanzaron ${distancia} km`,
          posicionActual: posicion
        });
        break;

      case "regresar":
        posicion -= distancia;

        if (posicion < 0) {
          posicion = 0;
        }

        tiempoTotal += tiempo;
        costoTotal += costo;

        historial.push({
          accion,
          resultado: `Se regresaron ${distancia} km`,
          posicionActual: posicion
        });
        break;

      case "descansar":
        tiempoTotal += tiempo;
        costoTotal += costo;

        historial.push({
          accion,
          resultado: "Se realizó una pausa durante el viaje",
          posicionActual: posicion
        });
        break;

      default:
        historial.push({
          accion,
          estado: "Acción desconocida"
        });
    }
  }

  return {
    distanciaFinal: posicion,
    tiempoTotal,
    costoTotal,
    cantidadInstrucciones: instrucciones.length,
    historial
  };
}

const instruccionesViaje = [
  {
    accion: "avanzar",
    distancia: 120,
    tiempo: 3,
    costo: 50
  },
  {
    accion: "descansar",
    distancia: 0,
    tiempo: 1,
    costo: 20
  },
  {
    accion: "regresar",
    distancia: 40,
    tiempo: 1,
    costo: 15
  }
];

console.log(procesarItinerarioViaje(instruccionesViaje));