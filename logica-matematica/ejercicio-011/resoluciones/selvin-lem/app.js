function calcularCombinatoria(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length < 2) {
    return { error: "se necesitan al menos 2 participantes" };
  }
  const n = participantes.length;
  const DIF_MAXIMA = 6;
  let combates_totales = 0;
  let combates_parejos = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      combates_totales++;
      const diferencia = Math.abs(participantes[i] - participantes[j]);
      if (diferencia <= DIF_MAXIMA) combates_parejos++;
    }
  }
  const proporcion_parejos = combates_parejos / combates_totales;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (proporcion_parejos >= 0.3) clasificacion = "competitivo";
  else if (proporcion_parejos >= 0.15) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    combates_totales,
    combates_parejos,
    proporcion_parejos: Math.round(proporcion_parejos * 100) / 100,
    puntaje_final,
    clasificacion,
    explicacion: "se generaron todas las combinaciones posibles de peleadores con un ciclo anidado, se conto cuantos combates son parejos (diferencia <= 6), y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularCombinatoria([12, 18, 25, 30], 8, 3));
// { combates_totales: 6, combates_parejos: 2, proporcion_parejos: 0.33, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (todos muy parejos)
console.log(calcularCombinatoria([50, 51, 52], 0, 0));
// combates_totales: 3, combates_parejos: 3, proporcion_parejos: 1 -> competitivo

// prueba caso borde (menos de 2 participantes)
console.log(calcularCombinatoria([10], 5, 5));
// { error: 'se necesitan al menos 2 participantes' }