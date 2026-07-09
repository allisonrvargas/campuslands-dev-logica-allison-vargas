function calcularAreaPerimetro(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length < 2) {
    return { error: "se necesitan al menos 2 valores para formar zonas" };
  }
  let area_total = 0;
  let perimetro_total = 0;

  for (let i = 0; i < participantes.length - 1; i += 2) {
    const base = participantes[i];
    const altura = participantes[i + 1] !== undefined ? participantes[i + 1] : 0;
    area_total += base * altura;
    perimetro_total += 2 * (base + altura);
  }
  const eficiencia_espacio = perimetro_total === 0 ? 0 : Math.round((area_total / perimetro_total) * 100) / 100;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (eficiencia_espacio >= 5) clasificacion = "competitivo";
  else if (eficiencia_espacio >= 3) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    area_total,
    perimetro_total,
    eficiencia_espacio,
    puntaje_final,
    clasificacion,
    explicacion: "se agruparon los valores en pares (base, altura) de zonas de tatuaje, se acumularon area y perimetro con un ciclo, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularAreaPerimetro([12, 18, 25, 30], 8, 3));
// { area_total: 966, perimetro_total: 170, eficiencia_espacio: 5.68, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (zona muy alargada, poca eficiencia)
console.log(calcularAreaPerimetro([2, 40], 0, 0));
// area_total: 80, perimetro_total: 84, eficiencia_espacio: 0.95 -> principiante

// prueba caso borde (menos de 2 valores)
console.log(calcularAreaPerimetro([10], 5, 5));
// { error: 'se necesitan al menos 2 valores para formar zonas' }