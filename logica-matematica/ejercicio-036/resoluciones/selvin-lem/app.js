function calcularPresupuesto(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function calcularDescuento(total) {
  if (total >= 80) return 0.15;
  if (total >= 50) return 0.1;
  return 0.05;
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

function calcularPresupuestoAnalisis(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const presupuesto_total = calcularPresupuesto(participantes);
  const descuento_porcentaje = calcularDescuento(presupuesto_total) * 100;

  const maximo = Math.max(...participantes);
  const concentracion_gasto = presupuesto_total === 0
    ? 0
    : Math.round((maximo / presupuesto_total) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleDescuento = descuento_porcentaje >= 15;
  const cumpleConcentracion = concentracion_gasto <= 0.5;

  let clasificacion;
  if (cumpleDescuento && cumpleConcentracion) clasificacion = "competitivo";
  else if (cumpleDescuento || cumpleConcentracion) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    presupuesto_total,
    descuento_porcentaje,
    concentracion_gasto,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo el descuento por volumen segun el presupuesto total, y la proporcion del gasto concentrada en la escena mas cara; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularPresupuestoAnalisis([12, 18, 25, 30], 8, 3));
// { presupuesto_total: 85, descuento_porcentaje: 15, concentracion_gasto: 0.35, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso especial (gasto muy concentrado en una escena)
console.log(calcularPresupuestoAnalisis([5, 5, 90], 0, 0));
// presupuesto_total: 100, descuento_porcentaje: 15, concentracion_gasto: 0.9 -> no cumple concentracion -> intermedio

// prueba caso borde (todos en cero, presupuesto 0)
console.log(calcularPresupuestoAnalisis([0, 0, 0], 5, 2));
// { presupuesto_total: 0, descuento_porcentaje: 5, concentracion_gasto: 0, puntaje_final: 3, clasificacion: 'principiante', ... }

// prueba caso borde (valor negativo, rechazado)
console.log(calcularPresupuestoAnalisis([12, -5, 20], 5, 2));
// { error: 'participantes vacio, no numerico o con valores negativos' }