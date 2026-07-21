function analizarInventarioMotos(motos) {

  if (!Array.isArray(motos) || motos.length === 0) {
    return {
      estado: "Error",
      mensaje: "No existen motos registradas."
    };
  }


  let valorTotalInventario = 0;
  let motosDisponibles = 0;


  const resultados = motos.map((moto) => {

    const {
      marca,
      modelo,
      cilindrada,
      precio,
      stock
    } = moto;


    if (
      !marca ||
      !modelo ||
      cilindrada <= 0 ||
      precio <= 0 ||
      stock < 0
    ) {
      return {
        marca,
        modelo,
        estado: "Datos inválidos"
      };
    }


    let categoria;


    // Clasificación por cilindrada

    if (cilindrada >= 1000) {
      categoria = "Alta cilindrada";
    }
    else if (cilindrada >= 500) {
      categoria = "Media cilindrada";
    }
    else {
      categoria = "Baja cilindrada";
    }


    let estadoStock;


    if (stock === 0) {
      estadoStock = "Agotada";
    }
    else if (stock <= 5) {
      estadoStock = "Stock limitado";
    }
    else {
      estadoStock = "Disponible";
    }


    const valorInventario =
      precio * stock;


    valorTotalInventario += valorInventario;


    if (stock > 0) {
      motosDisponibles++;
    }


    return {
      marca,
      modelo,
      cilindrada,
      categoria,
      precio,
      stock,
      estadoStock,
      valorInventario
    };

  });


  // Buscar moto con mayor valor individual

  const motoMayorValor =
    resultados
      .filter(moto => moto.valorInventario !== undefined)
      .reduce((mayor, actual) => {

        if (!mayor || actual.valorInventario > mayor.valorInventario) {
          return actual;
        }

        return mayor;

      }, null);



  return {
    totalMotos: motos.length,
    motosDisponibles,
    valorTotalInventario,
    motoMayorValor,
    inventario: resultados
  };

}



const inventario = [
  {
    marca: "Yamaha",
    modelo: "R1",
    cilindrada: 1000,
    precio: 85000,
    stock: 3
  },
  {
    marca: "Honda",
    modelo: "CB500",
    cilindrada: 500,
    precio: 45000,
    stock: 8
  },
  {
    marca: "Suzuki",
    modelo: "GSX150",
    cilindrada: 150,
    precio: 18000,
    stock: 0
  }
];


console.log(analizarInventarioMotos(inventario));