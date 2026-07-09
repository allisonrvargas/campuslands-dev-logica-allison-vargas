// Logica General 019 - Inventarios logicos
// Autor: Stefani Sanchez

const inventario = [
  { formula: "H2O", cantidad: 15 },
  { formula: "CO2", cantidad: 5 },
  { formula: "NaCl", cantidad: 0 },
  { formula: "O2", cantidad: 20 }
];

function revisarInventario(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return "Inventario vacio.";
  }

  return lista.map(producto => {
    let estado;

    if (producto.cantidad === 0) {
      estado = "Agotado";
    } else if (producto.cantidad <= 5) {
      estado = "Bajo inventario";
    } else {
      estado = "Disponible";
    }

    return {
      formula: producto.formula,
      cantidad: producto.cantidad,
      estado: estado
    };
  });
}

const resultado = revisarInventario(inventario);

console.log("Estado del inventario:");
console.log(resultado);


// Caso borde
console.log("\nCaso borde:");
console.log(revisarInventario([]));