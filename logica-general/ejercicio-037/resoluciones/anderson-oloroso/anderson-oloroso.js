function evaluarProyectosArquitectura(proyectos) {
  if (!Array.isArray(proyectos) || proyectos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen proyectos para evaluar."
    };
  }

  const resultados = [];
  let aprobados = 0;
  let rechazados = 0;
  let revision = 0;

  for (const proyecto of proyectos) {
    const {
      nombre,
      presupuesto,
      complejidad,
      renderizado
    } = proyecto;

    if (
      presupuesto <= 0 ||
      !["Alta", "Media", "Baja"].includes(complejidad) ||
      typeof renderizado !== "boolean"
    ) {
      resultados.push({
        nombre,
        decision: "Datos inválidos"
      });
      continue;
    }

    let decision = "";

    if (
      presupuesto >= 50000 &&
      renderizado &&
      complejidad !== "Alta"
    ) {
      decision = "Aprobado";
      aprobados++;
    } else if (
      presupuesto >= 30000 &&
      renderizado
    ) {
      decision = "Revisión";
      revision++;
    } else {
      decision = "Rechazado";
      rechazados++;
    }

    resultados.push({
      nombre,
      decision
    });
  }

  return {
    proyectosEvaluados: proyectos.length,
    aprobados,
    revision,
    rechazados,
    resultados
  };
}

const proyectos = [
  {
    nombre: "Edificio Alfa",
    presupuesto: 60000,
    complejidad: "Media",
    renderizado: true
  },
  {
    nombre: "Casa Beta",
    presupuesto: 35000,
    complejidad: "Alta",
    renderizado: true
  },
  {
    nombre: "Parque Gamma",
    presupuesto: 18000,
    complejidad: "Baja",
    renderizado: false
  }
];

console.log(evaluarProyectosArquitectura(proyectos));