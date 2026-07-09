function esDivisible(valor, divisor) {
  return valor % divisor === 0;
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

function calcularDivisibilidadAnalisis(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const n = participantes.length;
  const div3 = participantes.filter((v) => esDivisible(v, 3)).length;
  const numero_maldito = participantes.filter((v) => esDivisible(v, 3) && esDivisible(v, 2)).length;

  const proporcion_div3 = Math.round((div3 / n) * 100) / 100;
  const proporcion_div_ambos = Math.round((numero_maldito / n) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleDiv3 = proporcion_div3 >= 0.5;
  const cumpleAmbos = proporcion_div_ambos <= 0.75;

  let clasificacion;
  if (cumpleDiv3 && cumpleAmbos) clasificacion = "competitivo";
  else if (cumpleDiv3 || cumpleAmbos) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    proporcion_div3,
    numero_maldito,
    proporcion_div_ambos,
    puntaje_final,
    clasificacion,
    explicacion: "se conto la proporcion de duraciones divisibles entre 3, y las divisibles entre 3 y 2 a la vez (numero maldito, equivalente a divisibles entre 6); la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularDivisibilidadAnalisis([12, 18, 25, 30], 8, 3));
// { proporcion_div3: 0.75, numero_maldito: 3, proporcion_div_ambos: 0.75, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso especial (con valor 0, divisible entre todo)
console.log(calcularDivisibilidadAnalisis([0, 9, 14], 0, 0));
// div3: 0 y 9 -> 2/3=0.67; numero_maldito (div3 y div2): solo 0 -> 1/3=0.33

// prueba caso borde (valor negativo, rechazado)
console.log(calcularDivisibilidadAnalisis([12, -3, 20], 5, 2));
// { error: 'participantes vacio, no numerico o con valores negativos' }