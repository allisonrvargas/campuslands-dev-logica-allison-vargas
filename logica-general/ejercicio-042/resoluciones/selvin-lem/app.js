// validacion de datos combinada para ranking de futbol sala
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];
const PRIORIDADES_VALIDAS = ["alta", "media", "baja"];

function validarEstructura(items, prioridad, regla) {
  const errores = [];
  if (!Array.isArray(items) || items.length === 0) errores.push("items debe ser un arreglo no vacio.");
  if (!PRIORIDADES_VALIDAS.includes(prioridad)) errores.push(`prioridad "${prioridad}" no es valida.`);
  if (typeof regla !== "string" || regla.trim() === "") errores.push("regla debe ser un texto no vacio.");
  return errores;
}

function detectarEstadosInvalidosYDuplicados(items) {
  const errores = [];
  const advertencias = [];
  items.forEach((item, i) => {
    if (!ESTADOS_VALIDOS.includes(item)) errores.push(`item en posicion ${i} ("${item}") no es un estado valido.`);
    if (i > 0 && items[i - 1] === item) advertencias.push(`item "${item}" esta duplicado de forma consecutiva en las posiciones ${i - 1} y ${i}.`);
  });
  return { errores, advertencias };
}

function detectarPrioridadSinRiesgo(items, prioridad) {
  const hayRiesgo = items.includes("bloqueado") || items.includes("pendiente");
  return prioridad === "alta" && !hayRiesgo ? ["prioridad alta declarada pero no hay items en riesgo (bloqueado/pendiente)."] : [];
}

function detectarReglaSinContexto(regla) {
  if (typeof regla !== "string" || regla.trim() === "") return [];
  const reglaMinuscula = regla.toLowerCase();
  const mencionaEstado = ESTADOS_VALIDOS.some((estado) => reglaMinuscula.includes(estado));
  return mencionaEstado ? [] : ["la regla no menciona ningun estado conocido, se aplicara sin contexto claro."];
}

function validarDatosCombinado(items, prioridad, regla) {
  const erroresEstructura = validarEstructura(items, prioridad, regla);
  const itemsValidos = Array.isArray(items) && items.length > 0;

  let errores = [...erroresEstructura];
  let advertencias = [];

  if (itemsValidos) {
    const { errores: erroresEstado, advertencias: advDuplicados } = detectarEstadosInvalidosYDuplicados(items);
    errores = errores.concat(erroresEstado);
    advertencias = advertencias.concat(advDuplicados, detectarPrioridadSinRiesgo(items, prioridad));
  }

  advertencias = advertencias.concat(detectarReglaSinContexto(regla));

  return {
    valido: errores.length === 0,
    errores,
    advertencias,
    motivo: errores.length === 0
      ? (advertencias.length === 0 ? "los datos cumplen todas las reglas sin casos especiales." : "los datos son validos pero se detectaron casos especiales a revisar.")
      : "los datos no cumplen una o mas reglas de validacion.",
  };
}

// pruebas
console.log(validarDatosCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
console.log(validarDatosCombinado([], "media", ""));
console.log(validarDatosCombinado(["aprobado", "aprobado", "aprobado"], "alta", "chequear jugadores"));