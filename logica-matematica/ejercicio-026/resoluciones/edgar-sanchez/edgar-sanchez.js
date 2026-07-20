function procesarTelemetriaHiperdeportivos(velocidadKmh, potenciaHp, mercado) {
    const reporteTelemetria = {
      velocidadMph: 0.0,
      potenciaKw: 0.0,
      alertaNeumaticos: false
    };
  
    // Regla 3: Validar que los datos de entrada sean consistentes y reales
    if (velocidadKmh < 0 || potenciaHp < 0) {
      return reporteTelemetria;
    }
  
    // Regla 1: Aplicar factores de conversión física
    const FACTOR_VELOCIDAD = 0.621371;
    const FACTOR_POTENCIA = 0.7457;
  
    const vMph = velocidadKmh * FACTOR_VELOCIDAD;
    const pKw = potenciaHp * FACTOR_POTENCIA;
  
    reporteTelemetria.velocidadMph = Number(vMph.toFixed(2));
    reporteTelemetria.potenciaKw = Number(pKw.toFixed(2));
  
    // Regla 2: Evaluar umbral de seguridad para neumáticos (250 mph)
    if (reporteTelemetria.velocidadMph > 250.0) {
      reporteTelemetria.alertaNeumaticos = true;
    }
  
    return reporteTelemetria;
  }
  
  function ejecutarPruebasHiperdeportivos() {
    // Caso 1: Conversión normal con alerta de neumáticos activa
    const resultadoNormal = procesarTelemetriaHiperdeportivos(415.0, 1000.0, "US");
    if (resultadoNormal.velocidadMph !== 257.87 || resultadoNormal.potenciaKw !== 745.7 || resultadoNormal.alertaNeumaticos !== true) {
      process.exit(1);
    }
  
    // Caso 2: Valores límite en cero sin alertas
    const resultadoCero = procesarTelemetriaHiperdeportivos(0.0, 0.0, "EU");
    if (resultadoCero.velocidadMph !== 0.0 || resultadoCero.potenciaKw !== 0.0 || resultadoCero.alertaNeumaticos !== false) {
      process.exit(1);
    }
  }
  
  ejecutarPruebasHiperdeportivos();