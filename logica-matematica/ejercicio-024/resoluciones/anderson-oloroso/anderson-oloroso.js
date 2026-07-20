function analizarInventarioMotos(motos) {
  if (!Array.isArray(motos) || motos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una moto en el inventario."
    };
  }

  let motoMasCara = motos[0];
  let valorTotal = 0;

  const clasificacion = [];

  for (const moto of motos) {
    const { modelo, precio } = moto;

    if (precio <= 0) {
      return {
        estado: "Error",
        motivo: "El precio de las motos debe ser mayor que cero."
      };
    }

    valorTotal += precio;

    if (precio > motoMasCara.precio) {
      motoMasCara = moto;
    }

    let rango;

    if (precio >= 20000) {
      rango = "Premium";
    } else if (precio >= 12000) {
      rango = "Gama Media";
    } else {
      rango = "Económica";
    }

    clasificacion.push({
      modelo,
      precio,
      rango
    });
  }

  return {
    motosRegistradas: motos.length,
    valorTotalInventario: valorTotal,
    motoMasCara: motoMasCara.modelo,
    precioMaximo: motoMasCara.precio,
    clasificacion
  };
}

const motos = [
  {
    modelo: "Yamaha MT-09",
    precio: 18500
  },
  {
    modelo: "Honda CB500F",
    precio: 9800
  },
  {
    modelo: "Ducati Panigale V4",
    precio: 28500
  }
];

console.log(analizarInventarioMotos(motos));