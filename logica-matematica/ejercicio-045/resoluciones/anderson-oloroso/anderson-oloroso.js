function gestionarTallerMecanico(servicios) {

  if (!Array.isArray(servicios) || servicios.length === 0) {
    return {
      estado: "Error",
      mensaje: "No existen servicios registrados."
    };
  }


  let ingresosTotales = 0;
  let serviciosUrgentes = 0;


  const resultados = servicios.map((servicio) => {

    const {
      cliente,
      vehiculo,
      horasTrabajo,
      costoRepuestos,
      prioridad,
      estadoVehiculo
    } = servicio;


    if (
      !cliente ||
      !vehiculo ||
      horasTrabajo <= 0 ||
      costoRepuestos < 0 ||
      !prioridad ||
      !estadoVehiculo
    ) {
      return {
        cliente,
        estado: "Datos inválidos"
      };
    }


    // Cálculo del costo de mano de obra

    const costoHora = 25000;


    let manoObra =
      horasTrabajo * costoHora;


    let descuento = 0;


    // Descuento por servicio prolongado

    if (horasTrabajo >= 10) {
      descuento = 10;
    }


    // Incremento por urgencia

    let recargo = 0;


    if (prioridad === "Urgente") {
      recargo = 15;
      serviciosUrgentes++;
    }


    const valorDescuento =
      manoObra * (descuento / 100);


    const valorRecargo =
      manoObra * (recargo / 100);



    let total =
      manoObra +
      costoRepuestos -
      valorDescuento +
      valorRecargo;



    // Límite mínimo de cobro

    if (total < 30000) {
      total = 30000;
    }


    // Límite máximo de cobro

    if (total > 500000) {
      total = 500000;
    }


    ingresosTotales += total;


    let categoriaServicio;


    if (total >= 300000) {
      categoriaServicio = "Servicio mayor";
    }
    else if (total >= 100000) {
      categoriaServicio = "Servicio medio";
    }
    else {
      categoriaServicio = "Servicio básico";
    }


    return {
      cliente,
      vehiculo,
      prioridad,
      costoFinal: total,
      categoriaServicio
    };

  });


  return {
    totalServicios: servicios.length,
    serviciosUrgentes,
    ingresosTotales,
    servicios: resultados
  };

}



const servicios = [
  {
    cliente: "Carlos",
    vehiculo: "Toyota Corolla",
    horasTrabajo: 12,
    costoRepuestos: 180000,
    prioridad: "Urgente",
    estadoVehiculo: "Dañado"
  },
  {
    cliente: "Ana",
    vehiculo: "Mazda 3",
    horasTrabajo: 3,
    costoRepuestos: 20000,
    prioridad: "Normal",
    estadoVehiculo: "Mantenimiento"
  }
];


console.log(gestionarTallerMecanico(servicios));