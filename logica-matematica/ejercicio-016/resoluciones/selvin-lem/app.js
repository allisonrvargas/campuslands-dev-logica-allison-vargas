function calcularPresupuestoDescuento(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  let presupuesto_total = 0;
  for (let i = 0; i < participantes.length; i++) {
    presupuesto_total += participantes[i];
  }

  let descuento_porcentaje;
  if (presupuesto_total >= 80) descuento_porcentaje = 0.15;
  else if (presupuesto_total >= 50) descuento_porcentaje = 0.1;
  else descuento_porcentaje = 0.05;

  const descuento_monto = presupuesto_total * descuento_porcentaje;
  const presupuesto_con_descuento = Math.round((presupuesto_total - descuento_monto) * 100) / 100;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (descuento_porcentaje >= 0.15) clasificacion = "competitivo";
  else if (descuento_porcentaje >= 0.1) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    presupuesto_total,
    descuento_porcentaje: descuento_porcentaje * 100,
    presupuesto_con_descuento,
    puntaje_final,
    clasificacion,
    explicacion: "se acumulo el costo total de las escenas con un ciclo, se aplico un descuento por volumen segun el total, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularPresupuestoDescuento([12, 18, 25, 30], 8, 3));
// { presupuesto_total: 85, descuento_porcentaje: 15, presupuesto_con_descuento: 72.25, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (presupuesto bajo, descuento minimo)
console.log(calcularPresupuestoDescuento([5, 10, 8], 0, 0));
// presupuesto_total: 23, descuento_porcentaje: 5, clasificacion: 'principiante'

// prueba caso borde (array vacio)
console.log(calcularPresupuestoDescuento([], 5, 5));
// { error: 'participantes vacio o invalido' }