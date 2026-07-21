function calcularPromedio(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function calcularDesviacionEstandar(arr, promedio) {
  const sumaCuadrados = arr.reduce((acc, v) => acc + Math.pow(v - promedio, 2), 0);
  return Math.sqrt(sumaCuadrados / arr.length);
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function generarRanking(arr) {
  return [...arr].sort((a, b) => b - a).map((valor, i) => ({ posicion: i + 1, valor }));
}

function validarParticipantes(arr) {
  return Array.isArray(arr) && arr.length > 0 && arr.every((v) => typeof v === "number" && Number.isFinite(v) && v >= 0);
}

function calcularEstadisticasAnalisis(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const promedio = calcularPromedio(participantes);
  const desviacion_estandar = calcularDesviacionEstandar(participantes, promedio);

  const coeficiente_variacion = promedio === 0 ? 0 : Math.round((desviacion_estandar / promedio) * 100) / 100;
  const primerLugar = Math.max(...participantes);
  const top_ratio = promedio === 0 ? 0 : Math.round((primerLugar / promedio) * 100) / 100;

  const ranking = generarRanking(participantes);
  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleVariacion = coeficiente_variacion <= 0.35;
  const cumpleTop = top_ratio <= 1.5;

  let clasificacion;
  if (cumpleVariacion && cumpleTop) clasificacion = "competitivo";
  else if (cumpleVariacion || cumpleTop) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    ranking,
    coeficiente_variacion,
    top_ratio,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo el coeficiente de variacion (dispersion relativa al promedio) y cuanto destaca el primer lugar sobre el promedio; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularEstadisticasAnalisis([12, 18, 25, 30], 8, 3));

// prueba caso especial (un proyecto domina muy por encima del resto)
console.log(calcularEstadisticasAnalisis([10, 12, 11, 80], 0, 0));

// prueba caso borde (empate en el primer lugar)
console.log(calcularEstadisticasAnalisis([25, 25, 10], 5, 2));

console.log(calcularEstadisticasAnalisis([12, -5, 20], 5, 2));