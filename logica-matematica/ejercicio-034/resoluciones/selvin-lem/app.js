// Ejercicio 034 - Areas y perimetros (tatuajes)

function validarParticipantes(arr) {
  return Array.isArray(arr) && arr.length > 0 && arr.every((v) => typeof v === "number" && Number.isFinite(v) && v >= 0);
}

function calcularArea(lado) {
  return lado * lado;
}

function calcularPerimetro(lado) {
  return lado * 4;
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function calcularDiseno(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const area_total = participantes.map(calcularArea).reduce((a, b) => a + b, 0);
  const perimetro_maximo = Math.max(...participantes.map(calcularPerimetro));

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePuntaje = puntaje_final >= 25;
  const cumpleArea = area_total >= 1900;

  let clasificacion;
  if (cumplePuntaje && cumpleArea) clasificacion = "competitivo";
  else if (cumplePuntaje || cumpleArea) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    area_total,
    perimetro_maximo,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo el area total del diseno y el mayor perimetro individual, y se ajusto el puntaje con bono y penalizacion; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularDiseno([12, 18, 25, 30], 8, 3));

// prueba caso especial (solo una condicion se cumple -> intermedio)
console.log(calcularDiseno([5, 6, 7, 8], 0, 0));

// prueba caso borde (valor negativo, rechazado)
console.log(calcularDiseno([12, -5, 20], 5, 2));

module.exports = { calcularDiseno, calcularArea, calcularPerimetro, calcularMediana, validarParticipantes };
// prueba caso especial corregida (area alta, puntaje bajo -> intermedio)
console.log(calcularDiseno([1, 1, 1, 60], 0, 0));