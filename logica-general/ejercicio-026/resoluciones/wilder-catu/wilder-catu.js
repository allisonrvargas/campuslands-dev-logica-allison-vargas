// Reto Campuslands - Búsqueda de Elementos
// Temática: Autos Hiperdeportivos

// Entradas
const autos = [
    {
        marca: "Bugatti",
        modelo: "Chiron",
        velocidadMaxima: 420
    },
    {
        marca: "Koenigsegg",
        modelo: "Jesko Absolut",
        velocidadMaxima: 531
    },
    {
        marca: "Rimac",
        modelo: "Nevera",
        velocidadMaxima: 412
    },
    {
        marca: "SSC",
        modelo: "Tuatara",
        velocidadMaxima: 508
    },
    {
        marca: "Hennessey",
        modelo: "Venom F5",
        velocidadMaxima: 500
    }
];

// Elemento que se desea buscar
const modeloBuscado = "Nevera";

// Búsqueda
const resultado = autos.find(auto => auto.modelo === modeloBuscado);

// Salida
console.log("=== Búsqueda de Autos Hiperdeportivos ===");

if (resultado) {
    console.log("Auto encontrado:");
    console.log(`Marca: ${resultado.marca}`);
    console.log(`Modelo: ${resultado.modelo}`);
    console.log(`Velocidad máxima: ${resultado.velocidadMaxima} km/h`);
} else {
    console.log("No se encontró el modelo solicitado.");
}