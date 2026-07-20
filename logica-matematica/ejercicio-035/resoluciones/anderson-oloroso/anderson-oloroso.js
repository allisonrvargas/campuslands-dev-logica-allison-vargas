function analizarMovimientoDibujo(animaciones) {
  if (!Array.isArray(animaciones) || animaciones.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen movimientos para analizar."
    };
  }

  const resultados = [];
  let distanciaTotal = 0;
  let tiempoTotal = 0;

  for (const movimiento of animaciones) {
    const {
      objeto,
      distancia,
      tiempo
    } = movimiento;

    if (!objeto || distancia <= 0 || tiempo <= 0) {
      resultados.push({
        objeto,
        estado: "Datos inválidos"
      });
      continue;
    }

    const velocidad = distancia / tiempo;

    distanciaTotal += distancia;
    tiempoTotal += tiempo;

    resultados.push({
      objeto,
      distancia,
      tiempo,
      velocidad: Number(velocidad.toFixed(2))
    });
  }

  const velocidadPromedio =
    tiempoTotal > 0
      ? distanciaTotal / tiempoTotal
      : 0;

  return {
    movimientosAnalizados: animaciones.length,
    distanciaTotal,
    tiempoTotal,
    velocidadPromedio: Number(velocidadPromedio.toFixed(2)),
    resultados
  };
}

const animaciones = [
  {
    objeto: "Personaje",
    distancia: 120,
    tiempo: 6
  },
  {
    objeto: "Camara",
    distancia: 200,
    tiempo: 10
  },
  {
    objeto: "Objeto3D",
    distancia: 80,
    tiempo: 4
  }
];

console.log(analizarMovimientoDibujo(animaciones));