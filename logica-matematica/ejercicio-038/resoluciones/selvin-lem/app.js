function normalizarMinMax(arr) {
  const minimo = Math.min(...arr);
  const maximo = Math.max(...arr);
  const rango = maximo - minimo;
  return arr.map((v) => {
    const normalizado = rango === 0 ? 100 : ((v - minimo) / rango) * 100;
    return Math.round(normalizado * 100) / 100;
  });
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

function calcularNormalizacionAnalisis(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const puntajes_normalizados = normalizarMinMax(participantes);
  const promedio_normalizado =
    Math.round((puntajes_normalizados.reduce((a, b) => a + b, 0) / puntajes_normalizados.length) * 100) / 100;

  const sobresalientes = puntajes_normalizados.filter((p) => p >= 70).length;
  const proporcion_sobresalientes = Math.round((sobresalientes / puntajes_normalizados.length) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePromedio = promedio_normalizado >= 50;
  const cumpleSobresalientes = proporcion_sobresalientes >= 0.25;

  let clasificacion;
  if (cumplePromedio && cumpleSobresalientes) clasificacion = "competitivo";
  else if (cumplePromedio || cumpleSobresalientes) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntajes_normalizados,
    promedio_normalizado,
    proporcion_sobresalientes,
    puntaje_final,
    clasificacion,
    explicacion: "se normalizaron los puntajes de soldadura a escala 0-100 con min-max scaling, y se calculo la proporcion de soldaduras sobresalientes (>=70); la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularNormalizacionAnalisis([12, 18, 25, 30], 8, 3));

// prueba caso especial (mayoria de puntajes bajos, pocos sobresalientes)
console.log(calcularNormalizacionAnalisis([10, 12, 14, 90], 0, 0));

// prueba caso borde (rango 0, todos iguales)
console.log(calcularNormalizacionAnalisis([20, 20, 20], 5, 2));

// prueba caso borde (valor negativo, rechazado)
console.log(calcularNormalizacionAnalisis([12, -5, 20], 5, 2));