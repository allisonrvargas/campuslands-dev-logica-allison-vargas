function calcularCoordenadasDistancia(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length < 2) {
    return { error: "se necesitan al menos 2 valores para formar coordenadas" };
  }
  const distancias = [];
  let sumaDistancias = 0;

  for (let i = 0; i < participantes.length - 1; i += 2) {
    const x = participantes[i];
    const y = participantes[i + 1] !== undefined ? participantes[i + 1] : 0;
    const distancia = Math.sqrt(x * x + y * y);
    distancias.push(Math.round(distancia * 100) / 100);
    sumaDistancias += distancia;
  }
  const distancia_promedio = Math.round((sumaDistancias / distancias.length) * 100) / 100;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (distancia_promedio <= 35) clasificacion = "competitivo";
  else if (distancia_promedio <= 50) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    distancias,
    distancia_promedio,
    puntaje_final,
    clasificacion,
    explicacion: "se agruparon los valores en pares de coordenadas (x,y), se calculo la distancia euclidiana de cada punto al objetivo con un ciclo y acumulador, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularCoordenadasDistancia([12, 18, 25, 30], 8, 3));
// { distancias: [21.63, 39.05], distancia_promedio: 30.34, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (aterrizaje muy lejos del objetivo)
console.log(calcularCoordenadasDistancia([80, 90], 0, 0));
// { distancias: [120.42], distancia_promedio: 120.42, puntaje_final: 85, clasificacion: 'principiante', ... }

// prueba caso borde (menos de 2 valores)
console.log(calcularCoordenadasDistancia([10], 5, 5));
// { error: 'se necesitan al menos 2 valores para formar coordenadas' }