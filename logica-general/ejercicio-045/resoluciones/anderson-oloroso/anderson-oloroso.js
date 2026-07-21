function ordenarTrabajosTaller(trabajos) {
  if (!Array.isArray(trabajos) || trabajos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen trabajos registrados."
    };
  }

  const prioridadValor = {
    "Urgente": 3,
    "Alta": 2,
    "Normal": 1
  };

  const trabajosValidos = trabajos.filter((trabajo) => {
    return (
      trabajo.cliente &&
      trabajo.vehiculo &&
      trabajo.tipoServicio &&
      prioridadValor[trabajo.prioridad]
    );
  });

  const ordenados = trabajosValidos.sort((a, b) => {
    if (
      prioridadValor[b.prioridad] !== prioridadValor[a.prioridad]
    ) {
      return prioridadValor[b.prioridad] - prioridadValor[a.prioridad];
    }

    return a.tiempoEspera - b.tiempoEspera;
  });


  let urgentes = 0;
  let altas = 0;
  let normales = 0;

  ordenados.forEach((trabajo) => {
    if (trabajo.prioridad === "Urgente") {
      urgentes++;
    } else if (trabajo.prioridad === "Alta") {
      altas++;
    } else {
      normales++;
    }
  });


  return {
    totalTrabajos: ordenados.length,
    resumenPrioridades: {
      urgentes,
      altas,
      normales
    },
    ordenAtencion: ordenados
  };
}


const trabajos = [
  {
    cliente: "Carlos",
    vehiculo: "Toyota Corolla",
    tipoServicio: "Cambio de motor",
    prioridad: "Urgente",
    tiempoEspera: 5
  },
  {
    cliente: "Ana",
    vehiculo: "Mazda 3",
    tipoServicio: "Cambio de aceite",
    prioridad: "Normal",
    tiempoEspera: 30
  },
  {
    cliente: "Luis",
    vehiculo: "BMW Serie 3",
    tipoServicio: "Revisión eléctrica",
    prioridad: "Alta",
    tiempoEspera: 15
  },
  {
    cliente: "Sofia",
    vehiculo: "Honda Civic",
    tipoServicio: "Frenos",
    prioridad: "Alta",
    tiempoEspera: 40
  }
];


console.log(ordenarTrabajosTaller(trabajos));