const menu = [
    { nombre: "Tacos al Pastor", precio: 15, costo: 5, demanda: 100, nocturno: true, importado: false },
    { nombre: "Hot Dog Gourmet", precio: 25, costo: 10, demanda: 50, nocturno: false, importado: true },
    { nombre: "Arepas", precio: 12, costo: 4, demanda: 80, nocturno: true, importado: false },
    { nombre: "Hamburguesa", precio: 20, costo: 8, demanda: 60, nocturno: false, importado: false }
];

let mejorPlatillo = menu[0];
let calcular_ganancia = (p) => {
    let precioFinal = p.nocturno ? p.precio * 1.2 : p.precio;
    let ingresoBruto = precioFinal * p.demanda;
    if (p.importado) ingresoBruto -= (ingresoBruto * 0.1);
    
    return ingresoBruto - (p.costo * p.demanda);
};

if (menu.length === 0) {
    console.log("No hay platillos registrados en el menú.");
} else {
    menu.forEach((platillo) => {
        if (calcular_ganancia(platillo) > calcular_ganancia(mejorPlatillo)) {
            mejorPlatillo = platillo;
        }
    });
    console.log(`El platillo más rentable es: ${mejorPlatillo.nombre}`);
}