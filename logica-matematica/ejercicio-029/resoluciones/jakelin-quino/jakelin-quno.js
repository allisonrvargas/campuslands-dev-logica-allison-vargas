let peliculas = 15;
let amigos = 4;

let sobran = peliculas % amigos;

if (sobran === 0) {
    console.log("¡Perfecto! Se pueden repartir equitativamente.");
} else {
    console.log("No se pueden repartir. Sobran " + sobran + " películas.");
}