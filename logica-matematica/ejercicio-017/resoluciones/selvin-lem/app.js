function calcularEstadisticasRanking(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const n = participantes.length;

  let suma = 0;
  for (let i = 0; i < n; i++) suma += participantes[i];
  const promedio = suma / n;

  let sumaCuadrados = 0;
  for (let i = 0; i < n; i++) {
    sumaCuadrados += Math.pow(participantes[i] - promedio, 2);
  }
  const desviacion_estandar = Math.round(Math.sqrt(sumaCuadrados / n) * 100) / 100;

  const ranking = [...participantes]
    .sort((a, b) => b - a)
    .map((valor, i) => ({ posicion: i + 1, valor }));

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (desviacion_estandar <= 7) clasificacion = "competitivo";
  else if (desviacion_estandar <= 10) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    ranking,
    desviacion_estandar,
    puntaje_final,
    clasificacion,
    explicacion: "se genero el ranking ordenando de mayor a menor, se calculo la desviacion estandar con un ciclo y acumulador para medir la dispersion, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularEstadisticasRanking([12, 18, 25, 30], 8, 3));
// { ranking: [...], desviacion_estandar: 6.83, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (dispersion muy alta)
console.log(calcularEstadisticasRanking([5, 60, 8], 0, 0));
// desviacion_estandar alta -> principiante

// prueba caso borde (array vacio)
console.log(calcularEstadisticasRanking([], 5, 5));
// { error: 'participantes vacio o invalido' }