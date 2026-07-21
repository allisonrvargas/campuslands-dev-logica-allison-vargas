function calcularPresupuestoAnimacion(proyectos) {
  if (!Array.isArray(proyectos) || proyectos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen proyectos registrados."
    };
  }

  let presupuestoOriginalTotal = 0;
  let descuentoTotal = 0;
  let presupuestoFinalTotal = 0;


  const resultados = proyectos.map((proyecto) => {

    const {
      nombre,
      presupuesto,
      calidad,
      tipo
    } = proyecto;


    if (
      !nombre ||
      presupuesto <= 0 ||
      !calidad ||
      !tipo
    ) {
      return {
        nombre,
        estado: "Datos inválidos"
      };
    }


    let descuento = 0;


    // Reglas de descuentos
    if (presupuesto >= 10000) {
      descuento += 10;
    }

    if (calidad === "Premium") {
      descuento += 5;
    }

    if (tipo === "Educativo") {
      descuento += 3;
    }


    // Máximo descuento permitido
    if (descuento > 20) {
      descuento = 20;
    }


    const valorDescuento = presupuesto * (descuento / 100);
    const presupuestoFinal = presupuesto - valorDescuento;


    presupuestoOriginalTotal += presupuesto;
    descuentoTotal += valorDescuento;
    presupuestoFinalTotal += presupuestoFinal;


    return {
      nombre,
      presupuestoInicial: presupuesto,
      descuentoAplicado: descuento + "%",
      valorDescuento: valorDescuento.toFixed(2),
      presupuestoFinal: presupuestoFinal.toFixed(2)
    };
  });


  return {
    cantidadProyectos: proyectos.length,
    presupuestoOriginalTotal: presupuestoOriginalTotal.toFixed(2),
    ahorroTotal: descuentoTotal.toFixed(2),
    presupuestoFinalTotal: presupuestoFinalTotal.toFixed(2),
    proyectos: resultados
  };
}



const proyectos = [
  {
    nombre: "Cortometraje Espacial",
    presupuesto: 15000,
    calidad: "Premium",
    tipo: "Comercial"
  },
  {
    nombre: "Video Educativo 3D",
    presupuesto: 5000,
    calidad: "Normal",
    tipo: "Educativo"
  },
  {
    nombre: "Animación Publicitaria",
    presupuesto: 12000,
    calidad: "Premium",
    tipo: "Educativo"
  }
];


console.log(calcularPresupuestoAnimacion(proyectos));