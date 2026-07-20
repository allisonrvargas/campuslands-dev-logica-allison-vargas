function analizarEscena3D(matrizEscena) {
  if (!Array.isArray(matrizEscena) || matrizEscena.length === 0) {
    return {
      estado: "Error",
      motivo: "La matriz de la escena está vacía."
    };
  }

  const posicionesActivas = [];
  let objetosActivos = 0;
  let objetosInactivos = 0;

  for (let fila = 0; fila < matrizEscena.length; fila++) {
    for (let columna = 0; columna < matrizEscena[fila].length; columna++) {

      const valor = matrizEscena[fila][columna];

      if (valor === 1) {
        objetosActivos++;

        posicionesActivas.push({
          fila,
          columna
        });
      } else {
        objetosInactivos++;
      }
    }
  }

  return {
    filas: matrizEscena.length,
    columnas: matrizEscena[0].length,
    objetosActivos,
    objetosInactivos,
    posicionesActivas
  };
}

const escena3D = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 1, 0]
];

console.log(analizarEscena3D(escena3D));