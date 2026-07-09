function filtrarInventarioMotos(motos, filtros = {}) {
  if (!Array.isArray(motos) || motos.length === 0) {
    return {
      estado: "Error",
      motivo: "El inventario debe contener al menos una moto."
    };
  }

  const {
    marca,
    cilindradaMinima,
    precioMaximo,
    disponible
  } = filtros;

  const motosFiltradas = motos.filter((moto) => {
    const {
      marca: marcaMoto,
      cilindrada,
      precio,
      disponible: estadoDisponible
    } = moto;

    if (marca && marcaMoto !== marca) {
      return false;
    }

    if (
      cilindradaMinima &&
      cilindrada < cilindradaMinima
    ) {
      return false;
    }

    if (
      precioMaximo &&
      precio > precioMaximo
    ) {
      return false;
    }

    if (
      disponible !== undefined &&
      estadoDisponible !== disponible
    ) {
      return false;
    }

    return true;
  });

  let valorInventario = 0;

  for (const moto of motosFiltradas) {
    valorInventario += moto.precio;
  }

  return {
    motosEncontradas: motosFiltradas.length,
    valorTotalFiltrado: valorInventario,
    motos: motosFiltradas
  };
}

const motos = [
  {
    modelo: "Ninja ZX-10R",
    marca: "Kawasaki",
    cilindrada: 1000,
    precio: 18000,
    disponible: true
  },
  {
    modelo: "MT-07",
    marca: "Yamaha",
    cilindrada: 700,
    precio: 9000,
    disponible: true
  },
  {
    modelo: "Duke 390",
    marca: "KTM",
    cilindrada: 390,
    precio: 6500,
    disponible: false
  }
];

console.log(
  filtrarInventarioMotos(motos, {
    cilindradaMinima: 600,
    precioMaximo: 20000,
    disponible: true
  })
);