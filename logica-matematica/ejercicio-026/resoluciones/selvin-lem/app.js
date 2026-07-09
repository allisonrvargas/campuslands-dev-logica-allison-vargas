const FACTOR_KMH_A_MPH = 0.621371;
const LIMITE_MPH = 15;

function kmhAMph(valorKmh) {
  return valorKmh * FACTOR_KMH_A_MPH;
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function validarParticipantes(participantes) {
  if (!Array.isArray(participantes) || participantes.length === 0) return false;
  return participantes.every((v) => typeof v === "number" && Number.isFinite(v) && v >= 0);
}

function calcularConversionAnalisis(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const velocidades_mph = participantes.map((v) => Math.round(kmhAMph(v) * 100) / 100);
  const promedio_mph =
    Math.round((velocidades_mph.reduce((a, b) => a + b, 0) / velocidades_mph.length) * 100) / 100;

  const cantidadSuperaLimite = velocidades_mph.filter((v) => v > LIMITE_MPH).length;
  const superan_limite = Math.round((cantidadSuperaLimite / velocidades_mph.length) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePromedio = promedio_mph >= 13;
  const cumpleSuperan = superan_limite >= 0.4;

  let clasificacion;
  if (cumplePromedio && cumpleSuperan) clasificacion = "competitivo";
  else if (cumplePromedio || cumpleSuperan) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    velocidades_mph,
    promedio_mph,
    superan_limite,
    puntaje_final,
    clasificacion,
    explicacion: "se convirtio cada velocidad de km/h a mph con una funcion dedicada, se calculo el promedio y la proporcion que supera el limite de referencia; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularConversionAnalisis([12, 18, 25, 30], 8, 3));
// { velocidades_mph: [7.46,11.18,15.53,18.64], promedio_mph: 13.2, superan_limite: 0.5, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso especial (velocidades bajas, no superan el limite)
console.log(calcularConversionAnalisis([5, 6, 7], 0, 0));
// promedio_mph bajo, superan_limite 0 -> principiante

// prueba caso borde (valor negativo, rechazado)
console.log(calcularConversionAnalisis([12, -5, 20], 5, 2));
// { error: 'participantes vacio, no numerico o con valores negativos' }