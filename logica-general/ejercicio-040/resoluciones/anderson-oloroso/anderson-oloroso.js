function seleccionarPuestosComida(puestos) {
  if (!Array.isArray(puestos) || puestos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen puestos de comida para evaluar."
    };
  }

  const resultados = [];
  let recomendados = 0;
  let aceptables = 0;
  let descartados = 0;

  for (const puesto of puestos) {
    const {
      nombre,
      calificacion,
      tiempoEspera,
      disponible
    } = puesto;

    if (
      !nombre ||
      calificacion < 0 ||
      calificacion > 5 ||
      tiempoEspera < 0 ||
      typeof disponible !== "boolean"
    ) {
      resultados.push({
        nombre,
        estado: "Datos inválidos"
      });
      continue;
    }

    let estado = "";

    if (
      disponible &&
      calificacion >= 4.5 &&
      tiempoEspera <= 15
    ) {
      estado = "Recomendado";
      recomendados++;
    } else if (
      disponible &&
      calificacion >= 3.5 &&
      tiempoEspera <= 30
    ) {
      estado = "Aceptable";
      aceptables++;
    } else {
      estado = "Descartado";
      descartados++;
    }

    resultados.push({
      nombre,
      estado
    });
  }

  return {
    puestosEvaluados: puestos.length,
    recomendados,
    aceptables,
    descartados,
    resultados
  };
}

const puestos = [
  {
    nombre: "Burger Express",
    calificacion: 4.8,
    tiempoEspera: 10,
    disponible: true
  },
  {
    nombre: "Tacos City",
    calificacion: 4.0,
    tiempoEspera: 25,
    disponible: true
  },
  {
    nombre: "Pizza Flash",
    calificacion: 3.2,
    tiempoEspera: 35,
    disponible: false
  }
];

console.log(seleccionarPuestosComida(puestos));