function evaluarSintesisQuimica(inventarioElementos, compuestoObjetivo) {
    const formulaAtomos = { H: 0, O: 0, C: 0 };
  
    if (compuestoObjetivo === "H2O") {
      formulaAtomos.H = 2;
      formulaAtomos.O = 1;
    } else if (compuestoObjetivo === "CO2") {
      formulaAtomos.C = 1;
      formulaAtomos.O = 2;
    } else {
      return { sintesisFactible: false, cantidadMaxima: 0, reactivoLimitante: "Ninguno" };
    }
  
    let cantidadMaxima = Infinity;
    let reactivoLimitante = "";
    let sePuedeSintetizar = true;
  
    for (const elemento_Químico in formulaAtomos) {
      const cantidadRequeridaPorUnidad = formulaAtomos[elementoQuímico];
  
      if (cantidadRequeridaPorUnidad > 0) {
        const existenciaBodega = inventarioElementos[elementoQuímico] || 0;
        
        if (existenciaBodega === 0) {
          sePuedeSintetizar = false;
          cantidadMaxima = 0;
          reactivoLimitante = elementoQuímico;
          break;
        }
  
        const unidadesPosibles = Math.floor(existenciaBodega / cantidadRequeridaPorUnidad);
        
        if (unidadesPosibles < cantidadMaxima) {
          cantidadMaxima = unidadesPosibles;
          reactivoLimitante = elementoQuímico;
        }
      }
    }
  
    if (cantidadMaxima === 0) {
      sePuedeSintetizar = false;
    }
  
    return {
      sintesisFactible: sePuedeSintetizar,
      cantidadMaxima: sePuedeSintetizar ? cantidadMaxima : 0,
      reactivoLimitante: reactivoLimitante
    };
  }