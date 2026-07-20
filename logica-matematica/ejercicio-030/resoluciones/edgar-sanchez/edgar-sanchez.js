function calcularCuotasViaje(costoTotal, cantidadViajeros, impuesto) {
    const reporteFinanciero = {
      cuotaBase: 0.0,
      cuotaLider: 0.0,
      desfaseCentavos: 0.0
    };
  
    // Regla 2: Validar control de contingencia (sin viajeros o costos inválidos)
    if (cantidadViajeros <= 0 || costoTotal <= 0 || impuesto < 0) {
      return reporteFinanciero;
    }
  
    // Regla 1: Calcular el costo total con impuestos redondeado financieramente
    const costoConImpuesto = Number((costoTotal * (1 + impuesto)).toFixed(2));
  
    // Truncar la cuota base a 2 decimales para evitar cobros decimales imposibles
    const cuotaBaseCalculada = Math.floor((costoConImpuesto / cantidadViajeros) * 100) / 100;
    
    // Calcular la diferencia total provocada por el truncamiento
    const totalPagadoBase = cuotaBaseCalculada * cantidadViajeros;
    const diferencia = Number((costoConImpuesto - totalPagadoBase).toFixed(2));
  
    // Regla 3: Asignar valores al reporte liquidando el desfase en el líder del grupo
    reporteFinanciero.cuotaBase = cuotaBaseCalculada;
    reporteFinanciero.cuotaLider = Number((cuotaBaseCalculada + diferencia).toFixed(2));
    reporteFinanciero.desfaseCentavos = diferencia;
  
    return reporteFinanciero;
  }
  
  function ejecutarPruebasTurismo() {
    // Caso 1: División con residuo de centavos (1000 entre 3 personas, sin impuesto)
    const resultadoDesfase = calcularCuotasViaje(1000.00, 3, 0.0);
    if (
      resultadoDesfase.cuotaBase !== 333.33 || 
      resultadoDesfase.cuotaLider !== 333.34 || 
      resultadoDesfase.desfaseCentavos !== 0.01
    ) {
      process.exit(1);
    }
  
    // Caso 2: Control de división por cero pasajeros
    const resultadoInvalido = calcularCuotasViaje(500.00, 0, 0.12);
    if (
      resultadoInvalido.cuotaBase !== 0.0 || 
      resultadoInvalido.cuotaLider !== 0.0 || 
      resultadoInvalido.desfaseCentavos !== 0.0
    ) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasTurismo();