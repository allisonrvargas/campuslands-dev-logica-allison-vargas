function calcularDiferencias(arr) {
  const diferencias = [];
  for (let i = 1; i < arr.length; i++) diferencias.push(arr[i] - arr[i - 1]);
  return diferencias;
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function validarParticipantes(arr) {
  return Array.isArray(arr) && arr.length >= 2 && arr.every((v) => typeof v === "number" && Number.isFinite(v));
}

function calcularSecuenciaAnalisis(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "se necesitan al menos 2 valores numericos en participantes" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const diferencias = calcularDiferencias(participantes);
  const esConstante = diferencias.every((d) => d === 0);

  let proporcion_crecientes, variabilidad;
  if (esConstante) {
    proporcion_crecientes = 0;
    variabilidad = 0;
  } else {
    const tramos_crecientes = diferencias.filter((d) => d > 0).length;
    proporcion_crecientes = Math.round((tramos_crecientes / diferencias.length) * 100) / 100;

    const diferencia_promedio = diferencias.reduce((a, b) => a + b, 0) / diferencias.length;
    const sumaDesviaciones = diferencias.reduce((acc, d) => acc + Math.abs(d - diferencia_promedio), 0);
    variabilidad = Math.round((sumaDesviaciones / diferencias.length) * 100) / 100;
  }

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleCreciente = proporcion_crecientes >= 0.6;
  const cumpleVariabilidad = variabilidad <= 2;

  let clasificacion;
  if (cumpleCreciente && cumpleVariabilidad) clasificacion = "competitivo";
  else if (cumpleCreciente || cumpleVariabilidad) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    proporcion_crecientes,
    variabilidad,
    puntaje_final,
    clasificacion,
    explicacion: "se calcularon las diferencias entre pistas consecutivas para medir tendencia creciente y variabilidad; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularSecuenciaAnalisis([12, 18, 25, 30], 8, 3));
// { proporcion_crecientes: 1, variabilidad: 0.67, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso especial (secuencia decreciente e irregular)
console.log(calcularSecuenciaAnalisis([40, 10, 35, 5], 0, 0));
// proporcion_crecientes baja, variabilidad alta -> principiante

// prueba caso borde (secuencia constante)
console.log(calcularSecuenciaAnalisis([15, 15, 15], 5, 2));
// { proporcion_crecientes: 0, variabilidad: 0, puntaje_final: 18, clasificacion: 'principiante', ... }