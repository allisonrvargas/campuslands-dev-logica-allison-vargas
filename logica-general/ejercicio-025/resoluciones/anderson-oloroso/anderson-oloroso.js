function ordenarPrioridadReparaciones(reparaciones) {
  if (!Array.isArray(reparaciones) || reparaciones.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una reparación registrada."
    };
  }

  const resultado = [];

  for (const reparacion of reparaciones) {
    const {
      cliente,
      vehiculo,
      urgencia,
      diasEspera,
      costoEstimado,
      estado
    } = reparacion;

    if (
      urgencia < 1 ||
      urgencia > 5 ||
      diasEspera < 0 ||
      costoEstimado < 0
    ) {
      return {
        estado: "Error",
        motivo: "Los datos de reparación contienen valores inválidos."
      };
    }

    let prioridad;

    if (estado === "Crítico" && urgencia >= 4) {
      prioridad = "Alta";
    } else if (
      urgencia >= 3 ||
      diasEspera >= 7
    ) {
      prioridad = "Media";
    } else {
      prioridad = "Baja";
    }

    const puntuacionPrioridad =
      (urgencia * 10) +
      (diasEspera * 2) +
      (estado === "Crítico" ? 20 : 0);

    resultado.push({
      cliente,
      vehiculo,
      prioridad,
      puntuacionPrioridad,
      costoEstimado
    });
  }

  resultado.sort(
    (a, b) =>
      b.puntuacionPrioridad - a.puntuacionPrioridad
  );

  return {
    reparacionesOrdenadas: resultado.length,
    primeraAtencion: resultado[0].vehiculo,
    listaPrioridad: resultado
  };
}

const reparaciones = [
  {
    cliente: "Carlos",
    vehiculo: "Toyota Supra",
    urgencia: 5,
    diasEspera: 2,
    costoEstimado: 1200,
    estado: "Crítico"
  },
  {
    cliente: "Ana",
    vehiculo: "Mazda 3",
    urgencia: 3,
    diasEspera: 8,
    costoEstimado: 600,
    estado: "Normal"
  },
  {
    cliente: "Luis",
    vehiculo: "Honda Civic",
    urgencia: 1,
    diasEspera: 1,
    costoEstimado: 300,
    estado: "Normal"
  }
];

console.log(ordenarPrioridadReparaciones(reparaciones));