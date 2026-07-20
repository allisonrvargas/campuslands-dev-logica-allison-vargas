const menuEvento = [
    { nombre: "Burritos XL", popularidad: 9, maxProd: 100, tiempoPrep: 20, edicionLimitada: false },
    { nombre: "Mini Tacos", popularidad: 10, maxProd: 200, tiempoPrep: 5, edicionLimitada: true },
    { nombre: "Pizza Cono", popularidad: 7, maxProd: 50, tiempoPrep: 12, edicionLimitada: false },
    { nombre: "Sándwich Vegano", popularidad: 6, maxProd: 80, tiempoPrep: 18, edicionLimitada: false }
];

let platilloDestacado = null;
let calcular_viabilidad = (p) => {
    let puntos = (p.popularidad * 50) + (p.maxProd * 2);
    if (p.tiempoPrep > 15) puntos *= 0.7;
    if (p.edicionLimitada) puntos += 200;
    return puntos;
};

if (menuEvento.length === 0) {
    console.log("No hay platillos disponibles para el evento.");
} else {
    menuEvento.forEach((platillo) => {
        let viabilidad = calcular_viabilidad(platillo);
        if (viabilidad >= 100) {
            if (!platilloDestacado || viabilidad > calcular_viabilidad(platilloDestacado)) {
                platilloDestacado = platillo;
            }
        }
    });
    
    if (platilloDestacado) {
        console.log(`El platillo seleccionado para el evento es: ${platilloDestacado.nombre}`);
    } else {
        console.log("Ningún platillo cumple con los requisitos mínimos de viabilidad.");
    }
}