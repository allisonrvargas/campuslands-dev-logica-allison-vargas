let inventario = { "Hidrógeno": 10, "Oxígeno": 5, "Carbono": 2 };
let receta = { "Hidrógeno": 2, "Oxígeno": 3, "Carbono": 5 };

function verificarInventario(inv, rec) {
    for (let ingrediente in rec) {
        if (!inv[ingrediente] || inv[ingrediente] < rec[ingrediente]) {
            return "Error: Inventario insuficiente de " + ingrediente;
        }
    }
    return "Inventario aprobado: La fórmula puede prepararse.";
}

console.log(verificarInventario(inventario, receta));