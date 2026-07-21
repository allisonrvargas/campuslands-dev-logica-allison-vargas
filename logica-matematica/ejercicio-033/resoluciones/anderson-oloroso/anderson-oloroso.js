function analizarDistanciasParacaidismo(saltadores) {
  if (!Array.isArray(saltadores) || saltadores.length < 2) {
    return {
      estado: "Error",
      motivo: "Se requieren al menos dos coordenadas para calcular distancias."
    };
  }

  const resultados = [];
  let mayorDistancia = 0;
  let parejaMasAlejada = null;

  for (let i = 0; i < saltadores.length; i++) {
    for (let j = i + 1; j < saltadores.length; j++) {
      const puntoA = saltadores[i];
      const puntoB = saltadores[j];

      const distancia = Math.sqrt(
        Math.pow(puntoB.x - puntoA.x, 2) +
        Math.pow(puntoB.y - puntoA.y, 2) +
        Math.pow(puntoB.z - puntoA.z, 2)
      );

      resultados.push({
        saltador1: puntoA.nombre,
        saltador2: puntoB.nombre,
        distancia: Number(distancia.toFixed(2))
      });

      if (distancia > mayorDistancia) {
        mayorDistancia = distancia;
        parejaMasAlejada = {
          saltador1: puntoA.nombre,
          saltador2: puntoB.nombre,
          distancia: Number(distancia.toFixed(2))
        };
      }
    }
  }

  return {
    coordenadasAnalizadas: saltadores.length,
    distanciasCalculadas: resultados.length,
    parejaMasAlejada,
    resultados
  };
}

const saltadores = [
  {
    nombre: "Carlos",
    x: 10,
    y: 20,
    z: 1000
  },
  {
    nombre: "Laura",
    x: 20,
    y: 30,
    z: 1200
  },
  {
    nombre: "Miguel",
    x: 40,
    y: 50,
    z: 1500
  }
];

console.log(analizarDistanciasParacaidismo(saltadores));