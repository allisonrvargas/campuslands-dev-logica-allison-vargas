function calcularLimiteMinimoAnalisis(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  for (const valor of participantes) {
    if (typeof valor !== "number" || !Number.isFinite(valor) || valor < 0) {
      return { error: "participantes contiene valores invalidos (no numericos o negativos)" };
    }
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const n = participantes.length;
  const minimo = Math.min(...participantes);
  const margen_seguridad = minimo - penalizacionValida;

  const promedio = participantes.reduce((a, b) => a + b, 0) / n;
  const bajoPromedio = participantes.filter((p) => p < promedio).length;
  const riesgo_desabasto = Math.round((bajoPromedio / n) * 100) / 100;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];

  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleMargen = margen_seguridad >= bonoValido;
  const cumpleRiesgo = riesgo_desabasto <= 0.5;

  let clasificacion;
  if (cumpleMargen && cumpleRiesgo) clasificacion = "competitivo";
  else if (cumpleMargen || cumpleRiesgo) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntaje_final,
    margen_seguridad,
    riesgo_desabasto,
    clasificacion,
    explicacion: "se calculo el margen de seguridad del repuesto mas bajo tras la penalizacion, y la proporcion de repuestos por debajo del promedio; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularLimiteMinimoAnalisis([12, 18, 25, 30], 8, 3));
// { puntaje_final: 27, margen_seguridad: 9, riesgo_desabasto: 0.5, clasificacion: 'competitivo', ... }

// prueba caso especial (margen negativo, alerta real de desabasto)
console.log(calcularLimiteMinimoAnalisis([3, 10, 14], 0, 8));
// { margen_seguridad: -5, ... } clasificacion no competitiva

// prueba caso borde (valor negativo, rechazado)
console.log(calcularLimiteMinimoAnalisis([12, -3, 20], 5, 2));
// { error: 'participantes contiene valores invalidos (no numericos o negativos)' }

// prueba caso borde (array vacio)
console.log(calcularLimiteMinimoAnalisis([], 5, 5));
// { error: 'participantes vacio o invalido' }