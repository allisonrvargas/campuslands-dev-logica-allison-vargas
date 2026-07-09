function tomarDecisionClasificacion(victorias, reportes, diferenciaObjetivos) {
    const reporteDecision = {
      resultado: "Error"
    };
  
    // Validación de consistencia física básica de entradas
    if (victorias < 0 || reportes < 0) {
      return reporteDecision;
    }
  
    // Regla 1: Filtro disciplinario absoluto por acumulación de reportes
    if (reportes > 3) {
      reporteDecision.resultado = "Descalificado";
      return reporteDecision;
    }
  
    // Regla 2: Lógica de clasificación por rendimiento y conducta combinada
    if (victorias >= 7 && reportes === 0) {
      reporteDecision.resultado = "Clasificado Directo";
    } else if (victorias >= 7 && reportes <= 3 && diferenciaObjetivos > 0) {
      reporteDecision.resultado = "Repechaje";
    } else if (victorias >= 4 && victorias <= 6 && reportes <= 2 && diferenciaObjetivos > 0) {
      reporteDecision.resultado = "Repechaje";
    } else {
      // Regla 3: Si no cumple con los mínimos de rendimiento técnico o disciplinario
      reporteDecision.resultado = "Descalificado";
    }
  
    return reporteDecision;
  }
  
  function ejecutarPruebasEsportsDecisiones() {
    // Caso 1: Clasificado Directo sin faltas
    const resultadoDirecto = tomarDecisionClasificacion(8, 0, 15);
    if (resultadoDirecto.resultado !== "Clasificado Directo") {
      process.exit(1);
    }
  
    // Caso 2: Repechaje (Tiene victorias pero arrastra reportes con buena diferencia)
    const resultadoRepechaje = tomarDecisionClasificacion(7, 2, 5);
    if (resultadoRepechaje.resultado !== "Repechaje") {
      process.exit(1);
    }
  
    // Caso 3: Descalificado automáticamente por conducta antideportiva
    const resultadoConducta = tomarDecisionClasificacion(9, 4, 20);
    if (resultadoConducta.resultado !== "Descalificado") {
      process.exit(1);
    }
  }
  
  ejecutarPruebasEsportsDecisiones();