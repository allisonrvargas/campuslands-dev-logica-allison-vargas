function analizarPatronPuntuacion(puntuaciones, esVerificado) {
    const reporteCritica = {
      promedioPuntuacion: 0.0,
      estadoCritica: "Válida"
    };
  
    const totalResenas = puntuaciones.length;
  
    // Regla 3: Validar umbral de muestra mínima
    if (totalResenas < 4) {
      let sumaBorde = 0;
      if (totalResenas > 0) {
        sumaBorde = puntuaciones.reduce((acc, curr) => acc + curr, 0);
        reporteCritica.promedioPuntuacion = Number((sumaBorde / totalResenas).toFixed(2));
      }
      reporteCritica.estadoCritica = "Insuficiente";
      return reporteCritica;
    }
  
    // Calcular Promedio Aritmético
    const sumaTotal = puntuaciones.reduce((acc, curr) => acc + curr, 0);
    const promedio = sumaTotal / totalResenas;
    reporteCritica.promedioPuntuacion = Number(promedio.toFixed(2));
  
    // Regla 1: Buscar patrones planos consecutivos (4 idénticos seguidos)
    let tienePatronSospechoso = false;
    for (let i = 0; i <= totalResenas - 4; i++) {
      if (
        puntuaciones[i] === puntuaciones[i + 1] &&
        puntuaciones[i] === puntuaciones[i + 2] &&
        puntuaciones[i] === puntuaciones[i + 3]
      ) {
        tienePatronSospechoso = true;
        break;
      }
    }
  
    // Regla 2: Evaluar mitigación por cuenta verificada y promedio alto
    if (tienePatronSospechoso) {
      if (esVerificado && promedio >= 8.0) {
        reporteCritica.estadoCritica = "Válida";
      } else {
        reporteCritica.estadoCritica = "Sospechosa";
      }
    } else {
      reporteCritica.estadoCritica = "Válida";
    }
  
    return reporteCritica;
  }
  
  function ejecutarPruebasCriticas() {
    // Caso 1: Patrón repetitivo no verificado (Sospechosa)
    const resultadoSospechoso = analizarPatronPuntuacion([9, 9, 9, 9, 8, 7], false);
    if (resultadoSospechoso.promedioPuntuacion !== 8.5 || resultadoSospechoso.estadoCritica !== "Sospechosa") {
      process.exit(1);
    }
  
    // Caso 2: Patrón repetitivo verificado con promedio alto (Válida)
    const resultadoVerificado = analizarPatronPuntuacion([9, 9, 9, 9], true);
    if (resultadoVerificado.promedioPuntuacion !== 9.0 || resultadoVerificado.estadoCritica !== "Válida") {
      process.exit(1);
    }
  
    // Caso 3: Muestra insuficiente
    const resultadoInsuficiente = analizarPatronPuntuacion([10, 9], false);
    if (resultadoInsuficiente.promedioPuntuacion !== 9.5 || resultadoInsuficiente.estadoCritica !== "Insuficiente") {
      process.exit(1);
    }
  }
  
  ejecutarPruebasCriticas();