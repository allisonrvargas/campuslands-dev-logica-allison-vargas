function validarPlanillaFutbolSala(goles, tirosAPuerta, tarjetasRojas, faltas) {
    const reporteValidacion = {
      planillaValida: false,
      motivoError: "Ninguno"
    };
  
    // Regla 3: Validar que no existan valores negativos
    if (goles < 0 || tirosAPuerta < 0 || tarjetasRojas < 0 || faltas < 0) {
      reporteValidacion.motivoError = "Valores numéricos no pueden ser negativos";
      return reporteValidacion;
    }
  
    // Regla 1: Validar consistencia física de goles frente a intentos
    if (goles > tirosAPuerta) {
      reporteValidacion.motivoError = "Inconsistencia entre goles y tiros";
      return reporteValidacion;
    }
  
    // Regla 2: Validar correlación de sanciones disciplinarias
    if (tarjetasRojas > 0 && faltas === 0) {
      reporteValidacion.motivoError = "Sanción disciplinaria sin faltas registradas";
      return reporteValidacion;
    }
  
    // Si supera todos los filtros de consistencia
    reporteValidacion.planillaValida = true;
    return reporteValidacion;
  }
  
  function ejecutarPruebasValidacion() {
    // Caso 1: Planilla totalmente válida
    const resultadoValido = validarPlanillaFutbolSala(3, 8, 1, 4);
    if (resultadoValido.planillaValida !== true || resultadoValido.motivoError !== "Ninguno") {
      process.exit(1);
    }
  
    // Caso 2: Más goles que tiros (Inválido)
    const resultadoGoles = validarPlanillaFutbolSala(5, 2, 0, 3);
    if (resultadoGoles.planillaValida !== false || resultadoGoles.motivoError !== "Inconsistencia entre goles y tiros") {
      process.exit(1);
    }
  
    // Caso 3: Tarjeta roja sin faltas en la planilla (Inválido)
    const resultadoSancion = validarPlanillaFutbolSala(1, 4, 1, 0);
    if (resultadoSancion.planillaValida !== false || resultadoSancion.motivoError !== "Sanción disciplinaria sin faltas registradas") {
      process.exit(1);
    }
  }
  
  ejecutarPruebasValidacion();