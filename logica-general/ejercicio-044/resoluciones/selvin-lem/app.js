// filtro combinado de inventario de motos por condiciones
const FILTROS_POR_PRIORIDAD = { alta: ["bloqueado", "pendiente"], media: ["bloqueado"], baja: [] };

function todosSonBloqueados(items) {
  return items.every((item) => item === "bloqueado");
}

function resolverCriterio(prioridad, lotePequeno) {
  let criterio = FILTROS_POR_PRIORIDAD[prioridad];
  if (criterio === undefined) return undefined;
  if (lotePequeno && prioridad === "baja") return ["bloqueado"];
  return criterio;
}

function detectarExclusionPorRegla(regla) {
  if (typeof regla !== "string") return false;
  const reglaMinuscula = regla.toLowerCase();
  return reglaMinuscula.includes("excluir") && reglaMinuscula.includes("aprobado");
}

function filtrarItemsCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { filtrados: [], excluidos: [], motivo: "no hay items para filtrar." };
  }

  if (todosSonBloqueados(items)) {
    return { filtrados: [...items], excluidos: [], motivo: "todos los items estan bloqueados, no hay nada que discriminar." };
  }

  const lotePequeno = items.length <= 2;
  const criterio = resolverCriterio(prioridad, lotePequeno);

  if (criterio === undefined) {
    return { filtrados: [], excluidos: [...items], motivo: `prioridad "${prioridad}" no reconocida, no se aplico filtro.` };
  }

  const reglaExcluyeAprobado = detectarExclusionPorRegla(regla);
  const filtrados = [];
  const excluidos = [];

  for (const item of items) {
    const pasaCriterioBase = criterio.length === 0 || criterio.includes(item);
    const debeExcluirsePorRegla = reglaExcluyeAprobado && item === "aprobado";
    (pasaCriterioBase && !debeExcluirsePorRegla ? filtrados : excluidos).push(item);
  }

  let motivo = "la regla prioriza riesgos antes de tareas normales.";
  if (lotePequeno && prioridad === "baja") motivo = "lote pequeño: se aplico filtro de bloqueado aunque la prioridad era baja.";
  if (reglaExcluyeAprobado) motivo += " ademas, la regla exigio excluir aprobados explicitamente.";

  return { filtrados, excluidos, motivo };
}

// pruebas
console.log(filtrarItemsCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
console.log(filtrarItemsCombinado([], "media", "revisar"));
console.log(filtrarItemsCombinado(["aprobado", "bloqueado"], "baja", "excluir aprobados del reporte"));
console.log(filtrarItemsCombinado(["bloqueado", "bloqueado", "bloqueado"], "baja", "sin filtro"));