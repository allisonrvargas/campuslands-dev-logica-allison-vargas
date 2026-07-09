function buscarHiperdeportivos(autos, filtros = {}) {
  if (!Array.isArray(autos) || autos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un vehículo registrado."
    };
  }

  const {
    marca,
    velocidadMinima,
    potenciaMinima,
    precioMaximo
  } = filtros;

  const encontrados = [];

  for (const auto of autos) {
    const {
      modelo,
      marca: marcaAuto,
      velocidadMaxima,
      potencia,
      precio
    } = auto;

    if (
      velocidadMaxima <= 0 ||
      potencia <= 0 ||
      precio <= 0
    ) {
      return {
        estado: "Error",
        motivo: `Los datos del vehículo ${modelo} no son válidos.`
      };
    }

    if (marca && marcaAuto !== marca) {
      continue;
    }

    if (
      velocidadMinima &&
      velocidadMaxima < velocidadMinima
    ) {
      continue;
    }

    if (
      potenciaMinima &&
      potencia < potenciaMinima
    ) {
      continue;
    }

    if (
      precioMaximo &&
      precio > precioMaximo
    ) {
      continue;
    }

    encontrados.push(auto);
  }

  return {
    autosEncontrados: encontrados.length,
    autos: encontrados
  };
}

const autos = [
  {
    modelo: "Bugatti Chiron Super Sport",
    marca: "Bugatti",
    velocidadMaxima: 490,
    potencia: 1600,
    precio: 3900000
  },
  {
    modelo: "Ferrari SF90 Stradale",
    marca: "Ferrari",
    velocidadMaxima: 340,
    potencia: 986,
    precio: 625000
  },
  {
    modelo: "Lamborghini Aventador SVJ",
    marca: "Lamborghini",
    velocidadMaxima: 350,
    potencia: 770,
    precio: 520000
  }
];

console.log(
  buscarHiperdeportivos(autos, {
    velocidadMinima: 350,
    potenciaMinima: 1000
  })
);