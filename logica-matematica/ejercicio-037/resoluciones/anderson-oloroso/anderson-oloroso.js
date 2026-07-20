function analizarRankingArquitectura(proyectos) {
  if (!Array.isArray(proyectos) || proyectos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen proyectos registrados."
    };
  }

  let sumaPuntajes = 0;
  let proyectoMayorPuntaje = null;
  let mejorPuntaje = -1;


  const resultados = proyectos.map((proyecto) => {
    const {
      nombre,
      creatividad,
      funcionalidad,
      precision
    } = proyecto;


    if (
      !nombre ||
      creatividad < 0 ||
      funcionalidad < 0 ||
      precision < 0 ||
      creatividad > 100 ||
      funcionalidad > 100 ||
      precision > 100
    ) {
      return {
        nombre,
        estado: "Datos inválidos"
      };
    }


    const puntajeFinal =
      (creatividad * 0.4) +
      (funcionalidad * 0.35) +
      (precision * 0.25);


    sumaPuntajes += puntajeFinal;


    if (puntajeFinal > mejorPuntaje) {
      mejorPuntaje = puntajeFinal;
      proyectoMayorPuntaje = nombre;
    }


    let categoria = "";

    if (puntajeFinal >= 90) {
      categoria = "Nivel profesional";
    } else if (puntajeFinal >= 70) {
      categoria = "Nivel avanzado";
    } else {
      categoria = "Nivel básico";
    }


    return {
      nombre,
      puntajeFinal: puntajeFinal.toFixed(2),
      categoria
    };
  });


  const promedio =
    sumaPuntajes / proyectos.length;


  return {
    cantidadProyectos: proyectos.length,
    promedioRanking: promedio.toFixed(2),
    mejorProyecto: proyectoMayorPuntaje,
    mejorPuntaje: mejorPuntaje.toFixed(2),
    ranking: resultados
  };
}



const proyectos = [
  {
    nombre: "Torre Moderna",
    creatividad: 95,
    funcionalidad: 90,
    precision: 92
  },
  {
    nombre: "Casa Inteligente",
    creatividad: 80,
    funcionalidad: 85,
    precision: 75
  },
  {
    nombre: "Centro Cultural",
    creatividad: 70,
    funcionalidad: 65,
    precision: 80
  }
];


console.log(
  analizarRankingArquitectura(proyectos)
);