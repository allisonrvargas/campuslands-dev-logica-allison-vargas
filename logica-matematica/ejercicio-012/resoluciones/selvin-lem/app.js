function calcularProbabilidad(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const n = participantes.length;

  let puntos_totales = 0;
  let maximo = participantes[0];
  for (let i = 0; i < n; i++) {
    puntos_totales += participantes[i];
    if (participantes[i] > maximo) maximo = participantes[i];
  }
  const probabilidad_top = puntos_totales === 0 ? 0 : maximo / puntos_totales;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (probabilidad_top >= 0.35) clasificacion = "competitivo";
  else if (probabilidad_top >= 0.25) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntos_totales,
    probabilidad_top: Math.round(probabilidad_top * 100) / 100,
    puntaje_final,
    clasificacion,
    explicacion: "se acumularon los puntos totales con un ciclo, se calculo la probabilidad de que el maximo anotador gane un punto al azar, y se saco el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularProbabilidad([12, 18, 25, 30], 8, 3));
// { puntos_totales: 85, probabilidad_top: 0.35, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (puntos muy parejos, probabilidad baja)
console.log(calcularProbabilidad([20, 20, 20, 20], 0, 0));
// { puntos_totales: 80, probabilidad_top: 0.25, puntaje_final: 20, clasificacion: 'intermedio', ... }

// prueba caso borde (array vacio)
console.log(calcularProbabilidad([], 5, 5));
// { error: 'participantes vacio o invalido' }