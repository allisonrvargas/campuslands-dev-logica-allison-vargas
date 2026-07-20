function calcularPromedio(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
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

function calcularPatronAnalisis(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const n = participantes.length;
  const promedio = calcularPromedio(participantes);
  const picos = participantes.filter((p) => p > promedio).length;
  const valles = participantes.filter((p) => p < promedio).length;

  const proporcion_picos = Math.round((picos / n) * 100) / 100;
  const proporcion_valles = Math.round((valles / n) * 100) / 100;
  const equilibrio_patron = Math.round((1 - Math.abs(proporcion_picos - proporcion_valles)) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePicos = proporcion_picos >= 0.5;
  const cumpleEquilibrio = equilibrio_patron >= 0.5;

  let clasificacion;
  if (cumplePicos && cumpleEquilibrio) clasificacion = "competitivo";
  else if (cumplePicos || cumpleEquilibrio) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    proporcion_picos,
    proporcion_valles,
    equilibrio_patron,
    puntaje_final,
    clasificacion,
    explicacion: "se conto la proporcion de picos y valles frente al promedio, y se calculo el equilibrio del patron; la clasificacion combina la dominancia de picos y ese equilibrio."
  };
}

// prueba normal (ejemplo)
console.log(calcularPatronAnalisis([12, 18, 25, 30], 8, 3));
// { proporcion_picos: 0.5, proporcion_valles: 0.5, equilibrio_patron: 1, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso especial (patron muy desequilibrado, todo picos, sin valles)
console.log(calcularPatronAnalisis([10, 10, 90], 0, 0));
// picos: 1 (90), valles: 0 (los 10 son iguales al promedio -> neutros), proporcion_picos: 0.33, equilibrio bajo -> principiante o intermedio

// prueba caso borde (valor negativo, rechazado)
console.log(calcularPatronAnalisis([12, -5, 20], 5, 2));
// { error: 'participantes vacio, no numerico o con valores negativos' }