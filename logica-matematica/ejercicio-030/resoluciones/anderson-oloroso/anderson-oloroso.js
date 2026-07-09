function calcularPresupuestoViajes(viajes) {
  if (!Array.isArray(viajes) || viajes.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un viaje registrado."
    };
  }

  let costoTotal = 0;
  let viajeMasCostoso = viajes[0];

  const resultados = [];

  for (const viaje of viajes) {
    const {
      destino,
      costoBase,
      descuento
    } = viaje;

    if (
      costoBase <= 0 ||
      descuento < 0 ||
      descuento > 100
    ) {
      return {
        estado: "Error",
        motivo: "El costo debe ser positivo y el descuento debe estar entre 0 y 100."
      };
    }

    const costoFinal = Number(
      (costoBase - (costoBase * descuento / 100)).toFixed(2)
    );

    costoTotal += costoFinal;

    if (costoFinal > calcularCostoFinal(viajeMasCostoso)) {
      viajeMasCostoso = viaje;
    }

    resultados.push({
      destino,
      costoFinal: Number(costoFinal.toFixed(2))
    });
  }

  return {
    viajesCalculados: viajes.length,
    costoTotal: Number(costoTotal.toFixed(2)),
    promedioCosto: Number(
      (costoTotal / viajes.length).toFixed(2)
    ),
    viajeMasCostoso: viajeMasCostoso.destino,
    resultados
  };
}

function calcularCostoFinal(viaje) {
  return viaje.costoBase - (viaje.costoBase * viaje.descuento / 100);
}

const viajes = [
  {
    destino: "París",
    costoBase: 1500,
    descuento: 10
  },
  {
    destino: "Tokio",
    costoBase: 2200,
    descuento: 15
  },
  {
    destino: "Roma",
    costoBase: 1200,
    descuento: 5
  }
];

console.log(calcularPresupuestoViajes(viajes));