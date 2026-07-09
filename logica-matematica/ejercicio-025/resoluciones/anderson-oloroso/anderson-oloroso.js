function evaluarServiciosTaller(servicios) {
  if (!Array.isArray(servicios) || servicios.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un servicio registrado."
    };
  }

  let servicioMasEconomico = servicios[0];
  let costoTotal = 0;

  const resumen = [];

  for (const servicio of servicios) {
    const {
      nombre,
      costo,
      tiempoHoras
    } = servicio;

    if (costo <= 0 || tiempoHoras <= 0) {
      return {
        estado: "Error",
        motivo: "El costo y el tiempo del servicio deben ser mayores que cero."
      };
    }

    costoTotal += costo;

    if (costo < servicioMasEconomico.costo) {
      servicioMasEconomico = servicio;
    }

    let estado;

    if (tiempoHoras <= 2) {
      estado = "Servicio rápido";
    } else if (tiempoHoras <= 5) {
      estado = "Servicio estándar";
    } else {
      estado = "Servicio prolongado";
    }

    resumen.push({
      nombre,
      costo,
      tiempoHoras,
      estado
    });
  }

  return {
    serviciosEvaluados: servicios.length,
    costoTotal,
    servicioMasEconomico: servicioMasEconomico.nombre,
    costoMinimo: servicioMasEconomico.costo,
    detalleServicios: resumen
  };
}

const servicios = [
  {
    nombre: "Cambio de aceite",
    costo: 45,
    tiempoHoras: 1
  },
  {
    nombre: "Cambio de embrague",
    costo: 320,
    tiempoHoras: 6
  },
  {
    nombre: "Alineación",
    costo: 80,
    tiempoHoras: 2
  }
];

console.log(evaluarServiciosTaller(servicios));