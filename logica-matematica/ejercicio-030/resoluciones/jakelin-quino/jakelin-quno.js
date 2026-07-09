let precios = [150.75, 200.40, 100.90];

let suma = 0;
for (let i = 0; i < precios.length; i++) {
    suma += precios[i];
}
let promedio = suma / precios.length;

let precioRedondeado = Math.round(promedio);

console.log("Promedio real: " + promedio);
console.log("Precio final a cobrar: " + precioRedondeado);