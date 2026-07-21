function filtrarInventarioMotos(motos, filtros = {}) {
  if (!Array.isArray(motos) || motos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen motos registradas en el inventario."
    };
  }

  const {
    marca,
    cilindradaMinima,
    precioMaximo,
    disponible
  } = filtros;

  const resultado = motos.filter((moto) => {
    if (!moto.nombre || !moto.marca) {
      return false;
    }

    if (
      marca &&
      moto.marca !== marca
    ) {
      return false;
    }

    if (
      cilindradaMinima &&
      moto.cilindrada < cilindradaMinima
    ) {
      return false;
    }

    if (
      precioMaximo &&
      moto.precio > precioMaximo
    ) {
      return false;
    }

    if (
      disponible !== undefined &&
      moto.disponible !== disponible
    ) {
      return false;
    }

    return true;
  });

  return {
    motosEncontradas: resultado.length,
    motos: resultado
  };
}


const inventario = [
  {
    nombre: "Ducati Panigale V4",
    marca: "Ducati",
    cilindrada: 1103,
    precio: 30000,
    disponible: true
  },
  {
    nombre: "Yamaha R1",
    marca: "Yamaha",
    cilindrada: 998,
    precio: 20000,
    disponible: true
  },
  {
    nombre: "Honda CB500",
    marca: "Honda",
    cilindrada: 471,
    precio: 9000,
    disponible: false
  }
];


console.log(
  filtrarInventarioMotos(
    inventario,
    {
      cilindradaMinima: 900,
      precioMaximo: 25000,
      disponible: true
    }
  )
);