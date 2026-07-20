// Ejercicio 033 - Coordenadas y distancia (paracaidismo)

function validarParticipantes(arr) {
  return Array.isArray(arr) && arr.length > 0 && arr.every((v) => typeof v === "number" && Number.isFinite(v) && v >= 0);
}

function calcularPromedio(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function calcularAterrizaje(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const distancia_promedio = Math.round(calcularPromedio(participantes) * 100) / 100;
  const distancia_maxima = Math.max(...participantes);

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePuntaje = puntaje_final >= 25;
  const cumplePrecision = distancia_maxima <= 35;

  let clasificacion;
  if (cumplePuntaje && cumplePrecision) clasificacion = "competitivo";
  else if (cumplePuntaje || cumplePrecision) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    distancia_promedio,
    distancia_maxima,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo la distancia promedio del grupo al objetivo y el peor salto individual, y se ajusto el puntaje con bono y penalizacion; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularAterrizaje([12, 18, 25, 30], 8, 3));
// { distancia_promedio: 21.25, distancia_maxima: 30, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso especial (solo una condicion se cumple -> intermedio)
console.log(calcularAterrizaje([5, 6, 7, 8], 0, 0));
// distancia_maxima: 8 (<=35 true), puntaje_final: 7 (<25 false) -> intermedio

// prueba caso borde (valor negativo, rechazado)
console.log(calcularAterrizaje([12, -5, 20], 5, 2));
// { error: 'participantes vacio, no numerico o con valores negativos' }

module.exports = { calcularAterrizaje, calcularPromedio, calcularMediana, validarParticipantes };