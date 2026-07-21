const DEMANDA_BASE = 100;
const PRECIO_OPTIMO = DEMANDA_BASE / 2;

function simularGanancia(precio) {
  const demanda = Math.max(DEMANDA_BASE - precio, 0);
  return precio * demanda;
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

function calcularSimulacionAnalisis(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const n = participantes.length;
  const ganancias = participantes.map(simularGanancia);
  const ganancia_promedio = Math.round((ganancias.reduce((a, b) => a + b, 0) / n) * 100) / 100;

  const sumaDesviaciones = participantes.reduce((acc, p) => acc + Math.abs(p - PRECIO_OPTIMO), 0);
  const desviacion_optimo = Math.round((sumaDesviaciones / n) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleGanancia = ganancia_promedio >= 1600;
  const cumpleDesviacion = desviacion_optimo <= 30;

  let clasificacion;
  if (cumpleGanancia && cumpleDesviacion) clasificacion = "competitivo";
  else if (cumpleGanancia || cumpleDesviacion) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    ganancia_promedio,
    precio_optimo: PRECIO_OPTIMO,
    desviacion_optimo,
    puntaje_final,
    clasificacion,
    explicacion: "se simulo la ganancia de cada platillo con precio*(100-precio), y se midio que tan lejos esta el menu del precio optimo (50); la clasificacion combina rendimiento y cercania al optimo."
  };
}

// prueba normal (ejemplo)
console.log(calcularSimulacionAnalisis([12, 18, 25, 30], 8, 3));

// prueba caso especial (precios muy por encima de 100, demanda clamp a 0)
console.log(calcularSimulacionAnalisis([110, 120, 50], 0, 0));
// prueba caso borde (valor negativo, rechazado)
console.log(calcularSimulacionAnalisis([12, -5, 20], 5, 2));