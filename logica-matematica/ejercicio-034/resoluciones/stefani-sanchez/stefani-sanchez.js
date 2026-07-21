// Ejercicio 034 - Áreas y perímetros
// Tema: Tatuajes

function calcularFigura(tipo, a, b = 0) {
    let area = 0;
    let perimetro = 0;

    switch (tipo.toLowerCase()) {
        case "cuadrado":
            area = a * a;
            perimetro = 4 * a;
            break;

        case "rectangulo":
            area = a * b;
            perimetro = 2 * (a + b);
            break;

        case "circulo":
            area = Math.PI * Math.pow(a, 2);
            perimetro = 2 * Math.PI * a;
            break;

        default:
            return "Figura no válida.";
    }

    return {
        figura: tipo,
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    };
}

console.log("=== PRUEBA 1 ===");
console.log(calcularFigura("cuadrado", 8));

console.log("\n=== PRUEBA 2 ===");
console.log(calcularFigura("rectangulo", 12, 6));

console.log("\n=== PRUEBA 3 ===");
console.log(calcularFigura("circulo", 5));

console.log("\n=== CASO BORDE ===");
console.log(calcularFigura("triangulo", 4, 5));