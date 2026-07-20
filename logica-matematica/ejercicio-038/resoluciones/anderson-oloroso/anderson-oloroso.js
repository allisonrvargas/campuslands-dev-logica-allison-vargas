function normalizarPuntajesSoldadura(trabajadores) {
  if (!Array.isArray(trabajadores) || trabajadores.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen evaluaciones registradas."
    };
  }

  let puntajeMaximo = 0;
  let sumaOriginal = 0;
  let sumaNormalizada = 0;


  // Buscar el puntaje máximo para realizar la normalización
  trabajadores.forEach((trabajador) => {
    if (
      trabajador.puntaje > puntajeMaximo
    ) {
      puntajeMaximo = trabajador.puntaje;
    }
  });


  const resultados = trabajadores.map((trabajador) => {

    const {
      nombre,
      puntaje
    } = trabajador;


    if (
      !nombre ||
      puntaje < 0 ||
      puntaje > 100
    ) {
      return {
        nombre,
        estado: "Datos inválidos"
      };
    }


    const puntajeNormalizado =
      (puntaje / puntajeMaximo) * 100;


    sumaOriginal += puntaje;
    sumaNormalizada += puntajeNormalizado;


    let nivel = "";

    if (puntajeNormalizado >= 90) {
      nivel = "Excelente";
    } else if (puntajeNormalizado >= 70) {
      nivel = "Competente";
    } else {
      nivel = "Necesita mejora";
    }


    return {
      nombre,
      puntajeOriginal: puntaje,
      puntajeNormalizado: puntajeNormalizado.toFixed(2),
      nivel
    };
  });


  return {
    totalEvaluados: trabajadores.length,
    puntajeMaximo,
    promedioOriginal: (sumaOriginal / trabajadores.length).toFixed(2),
    promedioNormalizado: (sumaNormalizada / trabajadores.length).toFixed(2),
    resultados
  };
}



const evaluaciones = [
  {
    nombre: "Carlos",
    puntaje: 85
  },
  {
    nombre: "Ana",
    puntaje: 100
  },
  {
    nombre: "Luis",
    puntaje: 60
  }
];


console.log(
  normalizarPuntajesSoldadura(evaluaciones)
);