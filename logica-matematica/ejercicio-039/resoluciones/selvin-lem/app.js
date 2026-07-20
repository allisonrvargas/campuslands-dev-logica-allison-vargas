function esReactivoValido(valor) {
  return typeof valor === "number" && Number.isFinite(valor) && valor >= 1 && valor <= 100;
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function validarEntradaBase(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

function calcularValidacionAnalisis(participantes, bono, penalizacion) {
  if (!validarEntradaBase(participantes)) {
    return { error: "participantes vacio o invalido" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const n = participantes.length;
  const valoresValidos = participantes.filter(esReactivoValido);
  const valoresInvalidos = participantes.filter((v) => !esReactivoValido(v));

  const proporcion_validos = Math.round((valoresValidos.length / n) * 100) / 100;

  let concentracion_invalidos_extremos;
  if (valoresInvalidos.length === 0) {
    concentracion_invalidos_extremos = 0;
  } else {
    const invalidosArriba = valoresInvalidos.filter(
      (v) => typeof v === "number" && Number.isFinite(v) && v > 100
    ).length;
    concentracion_invalidos_extremos = Math.round((invalidosArriba / valoresInvalidos.length) * 100) / 100;
  }

  if (valoresValidos.length === 0) {
    return {
      proporcion_validos: 0,
      concentracion_invalidos_extremos,
      puntaje_final: 0,
      clasificacion: "principiante",
      explicacion: "no hay reactivos validos para calcular puntaje."
    };
  }

  const mediana = calcularMediana(valoresValidos);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleProporcion = proporcion_validos >= 0.75;
  const cumpleConcentracion = concentracion_invalidos_extremos <= 0.5;

  let clasificacion;
  if (cumpleProporcion && cumpleConcentracion) clasificacion = "competitivo";
  else if (cumpleProporcion || cumpleConcentracion) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    proporcion_validos,
    concentracion_invalidos_extremos,
    puntaje_final,
    clasificacion,
    explicacion: "se conto la proporcion de reactivos validos, y de los invalidos que proporcion supera el rango por arriba (exceso) en vez de por defecto; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularValidacionAnalisis([12, 18, 25, 30], 8, 3));

// prueba caso especial (invalidos concentrados por exceso, sobre 100)
console.log(calcularValidacionAnalisis([12, 150, 200, -5], 0, 0));

// prueba caso borde (todos invalidos)
console.log(calcularValidacionAnalisis([-1, 0, 500], 5, 2));