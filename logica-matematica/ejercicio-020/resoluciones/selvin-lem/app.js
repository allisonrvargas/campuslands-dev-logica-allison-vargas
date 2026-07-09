function calcularSimulacionFormula(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const DEMANDA_BASE = 100;
  let ganancia_simulada = 0;

  for (let i = 0; i < participantes.length; i++) {
    const precio = participantes[i];
    const demanda = Math.max(DEMANDA_BASE - precio, 0);
    const ganancia = precio * demanda;
    ganancia_simulada += ganancia;
  }
  const ganancia_promedio = Math.round((ganancia_simulada / participantes.length) * 100) / 100;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (ganancia_promedio >= 1600) clasificacion = "competitivo";
  else if (ganancia_promedio >= 1000) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    ganancia_simulada,
    ganancia_promedio,
    puntaje_final,
    clasificacion,
    explicacion: "se simulo la demanda de cada platillo (100 - precio) y se calculo la ganancia con un ciclo y acumulador, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularSimulacionFormula([12, 18, 25, 30], 8, 3));
// { ganancia_simulada: 6507, ganancia_promedio: 1626.75, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (precios altos, demanda cae, poca ganancia)
console.log(calcularSimulacionFormula([90, 95, 99], 0, 0));
// demandas: 10,5,1 -> ganancias: 900,475,99 -> ganancia_promedio: 491.33 -> principiante

// prueba caso borde (array vacio)
console.log(calcularSimulacionFormula([], 5, 5));
// { error: 'participantes vacio o invalido' }