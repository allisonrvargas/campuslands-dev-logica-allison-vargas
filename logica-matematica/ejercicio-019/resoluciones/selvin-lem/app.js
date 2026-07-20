function calcularValidacionNumerica(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const MIN_VALIDO = 1;
  const MAX_VALIDO = 100;
  let validos = 0;
  let invalidos = 0;
  const valoresValidos = [];

  for (let i = 0; i < participantes.length; i++) {
    const valor = participantes[i];
    const esValido =
      typeof valor === "number" &&
      Number.isFinite(valor) &&
      valor >= MIN_VALIDO &&
      valor <= MAX_VALIDO;
    if (esValido) {
      validos++;
      valoresValidos.push(valor);
    } else {
      invalidos++;
    }
  }
  const proporcion_validos = Math.round((validos / participantes.length) * 100) / 100;

  if (valoresValidos.length === 0) {
    return {
      validos, invalidos, proporcion_validos,
      puntaje_final: 0,
      clasificacion: "principiante",
      explicacion: "no hay reactivos validos para calcular puntaje."
    };
  }

  const ordenado = [...valoresValidos].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (proporcion_validos >= 1) clasificacion = "competitivo";
  else if (proporcion_validos >= 0.75) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    validos,
    invalidos,
    proporcion_validos,
    puntaje_final,
    clasificacion,
    explicacion: "se valido cada reactivo con un ciclo (numero finito, positivo y en rango 1-100), se conto validos e invalidos, y se calculo el puntaje final con los valores validos, sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularValidacionNumerica([12, 18, 25, 30], 8, 3));
// { validos: 4, invalidos: 0, proporcion_validos: 1, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (datos invalidos: negativo, fuera de rango, NaN)
console.log(calcularValidacionNumerica([-5, 150, NaN, 20], 0, 0));
// { validos: 1, invalidos: 3, proporcion_validos: 0.25, clasificacion: 'principiante', ... }

// prueba caso borde (array vacio)
console.log(calcularValidacionNumerica([], 5, 5));
// { error: 'participantes vacio o invalido' }