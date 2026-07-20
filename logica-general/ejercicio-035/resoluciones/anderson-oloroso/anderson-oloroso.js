function evaluarProyectosDibujo(proyectos) {
  if (!Array.isArray(proyectos) || proyectos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un proyecto registrado."
    };
  }

  const resultados = [];
  let proyectosAprobados = 0;

  for (const proyecto of proyectos) {
    const {
      artista,
      capas,
      resolucion,
      formato,
      licencia
    } = proyecto;

    if (
      !artista ||
      capas <= 0 ||
      resolucion <= 0 ||
      !formato ||
      typeof licencia !== "boolean"
    ) {
      resultados.push({
        artista,
        estado: "Error",
        motivo: "Datos del proyecto inválidos."
      });
      continue;
    }

    let estado = "";
    let motivo = "";

    if (!licencia) {
      estado = "Rechazado";
      motivo = "El proyecto no posee licencia de uso.";
    } else if (resolucion < 300) {
      estado = "Corrección";
      motivo = "La resolución mínima requerida es de 300 dpi.";
    } else if (!["PNG", "PSD"].includes(formato.toUpperCase())) {
      estado = "Corrección";
      motivo = "El formato del archivo no es válido.";
    } else if (capas < 5) {
      estado = "Corrección";
      motivo = "El proyecto debe contener al menos 5 capas.";
    } else {
      estado = "Aprobado";
      motivo = "El proyecto cumple todas las reglas de negocio.";
      proyectosAprobados++;
    }

    resultados.push({
      artista,
      estado,
      motivo
    });
  }

  return {
    proyectosAnalizados: proyectos.length,
    proyectosAprobados,
    resultados
  };
}

const proyectos = [
  {
    artista: "Laura",
    capas: 8,
    resolucion: 300,
    formato: "PSD",
    licencia: true
  },
  {
    artista: "Carlos",
    capas: 3,
    resolucion: 300,
    formato: "PNG",
    licencia: true
  },
  {
    artista: "Andrea",
    capas: 10,
    resolucion: 150,
    formato: "JPG",
    licencia: true
  }
];

console.log(evaluarProyectosDibujo(proyectos));