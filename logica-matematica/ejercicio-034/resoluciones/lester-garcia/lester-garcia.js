let largo = 18;
let ancho = 12;
let sesiones = 3;

let area = largo * ancho;
let perimetro = 2 * (largo + ancho);

let categoria = "";

if (area >= 200 && sesiones >= 3) {
    categoria = "diseño grande";
} else if (perimetro >= 50) {
    categoria = "diseño mediano";
} else {
    categoria = "diseño pequeño";
}

let explicacion = "se calcularon el area y el perimetro del diseño y se evaluaron junto con la cantidad de sesiones.";

console.log("area:", area);
console.log("perimetro:", perimetro);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);