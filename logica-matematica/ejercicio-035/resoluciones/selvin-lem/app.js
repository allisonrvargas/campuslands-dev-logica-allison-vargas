// Ejercicio 035 - Velocidad tiempo distancia (dibujo digital)

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

function calcularTrazo(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const distancia_total = participantes.reduce((a, b) => a + b, 0); // tiempo=1s por trazo
  const velocidad_promedio = Math.round(calcularPromedio(participantes) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePuntaje = puntaje_final >= 25;
  const cumpleVelocidad = velocidad_promedio <= 25;

  let clasificacion;
  if (cumplePuntaje && cumpleVelocidad) clasificacion = "competitivo";
  else if (cumplePuntaje || cumpleVelocidad) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    velocidad_promedio,
    distancia_total,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo la velocidad promedio de los trazos y la distancia total dibujada, y se ajusto el puntaje con bono y penalizacion; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularTrazo([12, 18, 25, 30], 8, 3));
// { velocidad_promedio: 21.25, distancia_total: 85, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso especial (solo una condicion se cumple -> intermedio)
console.log(calcularTrazo([40, 45, 50, 60], 0, 0));
// velocidad_promedio: 48.75 (>25 false), mediana=47.5->round 48->puntaje_final: 48 (>=25 true) -> intermedio

// prueba caso borde (valor negativo, rechazado)
console.log(calcularTrazo([12, -5, 20], 5, 2));
// { error: 'participantes vacio, no numerico o con valores negativos' }

module.exports = { calcularTrazo, calcularPromedio, calcularMediana, validarParticipantes };