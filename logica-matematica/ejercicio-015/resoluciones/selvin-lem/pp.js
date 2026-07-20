function calcularVelocidadTrazo(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length < 2) {
    return { error: "se necesitan al menos 2 valores para formar pares distancia/tiempo" };
  }
  const velocidades = [];
  let sumaVelocidades = 0;
  let paresValidos = 0;

  for (let i = 0; i < participantes.length - 1; i += 2) {
    const distancia = participantes[i];
    const tiempo = participantes[i + 1];
    if (tiempo === undefined || tiempo === 0) continue;
    const velocidad = distancia / tiempo;
    velocidades.push(Math.round(velocidad * 1000) / 1000);
    sumaVelocidades += velocidad;
    paresValidos++;
  }
  if (paresValidos === 0) {
    return { error: "no hay pares tiempo validos (distinto de cero)" };
  }
  const velocidad_promedio = Math.round((sumaVelocidades / paresValidos) * 1000) / 1000;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (velocidad_promedio >= 0.7) clasificacion = "competitivo";
  else if (velocidad_promedio >= 0.5) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    velocidades,
    velocidad_promedio,
    puntaje_final,
    clasificacion,
    explicacion: "se agruparon los valores en pares (distancia, tiempo), se calculo la velocidad de cada trazo con un ciclo y acumulador, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularVelocidadTrazo([12, 18, 25, 30], 8, 3));
// { velocidades: [0.667, 0.833], velocidad_promedio: 0.75, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (trazo lento)
console.log(calcularVelocidadTrazo([5, 20], 0, 0));
// velocidades: [0.25], velocidad_promedio: 0.25 -> principiante

// prueba caso borde (tiempo en cero)
console.log(calcularVelocidadTrazo([10, 0], 5, 5));
// { error: 'no hay pares tiempo validos (distinto de cero)' }