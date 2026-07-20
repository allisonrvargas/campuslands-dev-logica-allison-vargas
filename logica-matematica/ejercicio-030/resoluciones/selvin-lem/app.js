function errorRedondeo(valor) {
  return Math.abs(valor - Math.round(valor));
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function validarParticipantes(arr) {
  return Array.isArray(arr) && arr.length > 0 && arr.every((v) => typeof v === "number" && Number.isFinite(v) && v >= 0);
}

function calcularRedondeoAnalisis(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const errores = participantes.map(errorRedondeo);
  const error_redondeo_promedio = Math.round((errores.reduce((a, b) => a + b, 0) / errores.length) * 100) / 100;
  const error_redondeo_maximo = Math.round(Math.max(...errores) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePromedio = error_redondeo_promedio <= 0.25;
  const cumpleMaximo = error_redondeo_maximo <= 0.4;

  let clasificacion;
  if (cumplePromedio && cumpleMaximo) clasificacion = "competitivo";
  else if (cumplePromedio || cumpleMaximo) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    error_redondeo_promedio,
    error_redondeo_maximo,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo el error de redondeo de cada costo de viaje con una funcion dedicada, se saco el error promedio del grupo y el peor caso individual; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo, valores enteros -> error 0)
console.log(calcularRedondeoAnalisis([12, 18, 25, 30], 8, 3));
// { error_redondeo_promedio: 0, error_redondeo_maximo: 0, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso especial (decimales cercanos a 0.5, peor caso de redondeo)
console.log(calcularRedondeoAnalisis([10.5, 20.4, 15.5], 0, 0));
// errores: [0.5, 0.4, 0.5] -> promedio 0.47, maximo 0.5 -> principiante

// prueba caso borde (valor negativo, rechazado)
console.log(calcularRedondeoAnalisis([12, -5, 20], 5, 2));
// { error: 'participantes vacio, no numerico o con valores negativos' }