function gestionarInventarioReactivos(reactivos) {
  if (!Array.isArray(reactivos) || reactivos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen reactivos registrados en el inventario."
    };
  }

  const resultados = [];
  let disponibles = 0;
  let reposicion = 0;
  let vencidos = 0;

  for (const reactivo of reactivos) {
    const {
      nombre,
      cantidad,
      vencido,
      minimo
    } = reactivo;

    if (
      !nombre ||
      cantidad < 0 ||
      minimo < 0 ||
      typeof vencido !== "boolean"
    ) {
      resultados.push({
        nombre,
        estado: "Datos inválidos"
      });
      continue;
    }

    let estado = "";

    if (vencido) {
      estado = "Vencido";
      vencidos++;
    } else if (cantidad <= minimo) {
      estado = "Reposición";
      reposicion++;
    } else {
      estado = "Disponible";
      disponibles++;
    }

    resultados.push({
      nombre,
      cantidad,
      estado
    });
  }

  return {
    reactivosEvaluados: reactivos.length,
    disponibles,
    reposicion,
    vencidos,
    resultados
  };
}

const reactivos = [
  {
    nombre: "Ácido Clorhídrico",
    cantidad: 25,
    minimo: 10,
    vencido: false
  },
  {
    nombre: "Sulfato de Cobre",
    cantidad: 5,
    minimo: 10,
    vencido: false
  },
  {
    nombre: "Etanol",
    cantidad: 18,
    minimo: 5,
    vencido: true
  }
];

console.log(gestionarInventarioReactivos(reactivos));