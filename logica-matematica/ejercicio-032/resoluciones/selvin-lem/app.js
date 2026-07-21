// Ejercicio 032 - Probabilidad basica (pingpong)
 
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
 
function calcularProbabilidad(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;
 
  const promedio = calcularPromedio(participantes);
  const sobrePromedio = participantes.filter((v) => v >= promedio).length;
  const probabilidad_victoria = Math.round((sobrePromedio / participantes.length) * 100) / 100;
 
  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);
 
  const cumpleProbabilidad = probabilidad_victoria >= 0.5;
  const cumplePuntaje = puntaje_final >= 25;
 
  let clasificacion;
  if (cumpleProbabilidad && cumplePuntaje) clasificacion = "competitivo";
  else if (cumpleProbabilidad || cumplePuntaje) clasificacion = "intermedio";
  else clasificacion = "principiante";
 
  return {
    probabilidad_victoria,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo la probabilidad de que un participante supere el promedio del grupo y el puntaje final ajustado con bono y penalizacion; la clasificacion combina ambas condiciones."
  };
}
 
// prueba normal (ejemplo)
console.log(calcularProbabilidad([12, 18, 25, 30], 8, 3));
// { probabilidad_victoria: 0.5, puntaje_final: 27, clasificacion: 'competitivo', ... }
 
// prueba caso especial (solo una condicion se cumple -> intermedio)
console.log(calcularProbabilidad([10, 12, 14, 16, 18], 0, 0));
// probabilidad_victoria: 0.6, puntaje_final: 14 -> intermedio
 
// prueba caso borde (valor negativo, rechazado)
console.log(calcularProbabilidad([12, -5, 20], 5, 2));
// { error: 'participantes vacio, no numerico o con valores negativos' }
 
module.exports = { calcularProbabilidad, calcularPromedio, calcularMediana, validarParticipantes };