function simularPedidoComidaUrbana(pedidos) {
  if (!Array.isArray(pedidos) || pedidos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen pedidos registrados."
    };
  }

  let totalVentas = 0;
  let totalDescuentos = 0;
  let totalPedidos = pedidos.length;


  const resultados = pedidos.map((pedido) => {

    const {
      cliente,
      productos,
      tipoEntrega,
      metodoPago
    } = pedido;


    if (
      !cliente ||
      !Array.isArray(productos) ||
      productos.length === 0 ||
      !tipoEntrega ||
      !metodoPago
    ) {
      return {
        cliente,
        estado: "Pedido inválido"
      };
    }


    let subtotal = 0;
    let cantidadProductos = 0;


    productos.forEach((producto) => {
      subtotal += producto.precio * producto.cantidad;
      cantidadProductos += producto.cantidad;
    });


    let descuento = 0;


    // Descuento por compra grande
    if (subtotal >= 50000) {
      descuento += 10;
    }


    // Descuento por cantidad de productos
    if (cantidadProductos >= 5) {
      descuento += 5;
    }


    // Descuento por método de pago
    if (metodoPago === "Digital") {
      descuento += 3;
    }


    // Máximo descuento permitido
    if (descuento > 15) {
      descuento = 15;
    }


    const valorDescuento =
      subtotal * (descuento / 100);


    let costoEntrega = 0;


    if (tipoEntrega === "Domicilio") {
      costoEntrega = 5000;
    }


    const totalFinal =
      subtotal - valorDescuento + costoEntrega;


    totalVentas += totalFinal;
    totalDescuentos += valorDescuento;


    return {
      cliente,
      subtotal: subtotal.toFixed(2),
      descuentoAplicado: descuento + "%",
      costoEntrega,
      totalPagar: totalFinal.toFixed(2)
    };

  });


  return {
    totalPedidos,
    descuentosGenerados: totalDescuentos.toFixed(2),
    ventasTotales: totalVentas.toFixed(2),
    pedidos: resultados
  };
}



const pedidos = [
  {
    cliente: "Carlos",
    tipoEntrega: "Domicilio",
    metodoPago: "Digital",
    productos: [
      {
        nombre: "Hamburguesa",
        precio: 15000,
        cantidad: 2
      },
      {
        nombre: "Papas",
        precio: 8000,
        cantidad: 3
      }
    ]
  },
  {
    cliente: "Ana",
    tipoEntrega: "Local",
    metodoPago: "Efectivo",
    productos: [
      {
        nombre: "Pizza",
        precio: 25000,
        cantidad: 1
      }
    ]
  }
];


console.log(simularPedidoComidaUrbana(pedidos));