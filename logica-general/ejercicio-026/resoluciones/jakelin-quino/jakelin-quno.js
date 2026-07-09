const inventario = ["Bugatti", "Koenigsegg", "Rimac"];
const busqueda = "Bugatti";

let encontrado = false;

for (let i = 0; i < inventario.length; i++) {
    if (inventario[i] === busqueda) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("accion: auto encontrado");
    console.log("motivo: el modelo esta disponible en el inventario.");
} else {
    console.log("accion: auto no disponible");
    console.log("motivo: el modelo buscado no se encuentra en la lista.");
}