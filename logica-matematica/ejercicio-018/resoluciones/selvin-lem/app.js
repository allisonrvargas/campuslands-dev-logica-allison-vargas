function calcularNormalizacion(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const n = participantes.length;
  let minimo = participantes[0];
  let maximo = participantes[0];
  for (let i = 0; i < n; i++) {
    if (participantes[i] < minimo) minimo = participantes[i];
    if (participantes[i] > maximo) maximo = participantes[i];
  }
  const rango = maximo - minimo;

  const puntajes_normalizados = [];
  let sumaNormalizados = 0;
  for (let i = 0; i < n; i++) {
    const normalizado = rango === 0 ? 100 : ((participantes[i] - minimo) / rango) * 100;
    const redondeado = Math.round(normalizado * 100) / 100;
    puntajes_normalizados.push(redondeado);
    sumaNormalizados += redondeado;
  }
  const promedio_normalizado = Math.round((sumaNormalizados / n) * 100) / 100;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (promedio_normalizado >= 50) clasificacion = "competitivo";
  else if (promedio_normalizado >= 30) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntajes_normalizados,
    promedio_normalizado,
    puntaje_final,
    clasificacion,
    explicacion: "se normalizaron los puntajes de soldadura a escala 0-100 usando min-max scaling con un ciclo, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularNormalizacion([12, 18, 25, 30], 8, 3));
// { puntajes_normalizados: [0, 33.33, 72.22, 100], promedio_normalizado: 51.39, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (todos iguales, rango 0)
console.log(calcularNormalizacion([15, 15, 15], 0, 0));
// { puntajes_normalizados: [100, 100, 100], promedio_normalizado: 100, clasificacion: 'competitivo', ... }

// prueba caso borde (array vacio)
console.log(calcularNormalizacion([], 5, 5));
// { error: 'participantes vacio o invalido' }