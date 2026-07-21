let opciones = ["Stiga", "Butterfly", "Stiga", "Nittaku", "Stiga"];
let votosStiga = 0;
let otros = 0;
let mensaje = "";

if (opciones.length === 0) {
    mensaje = "Error: No hay opciones guardadas para realizar una comparacion.";
} else {
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i] === "Stiga") {
            votosStiga++; 
        } else {
            otros++;
        }
    }
    mensaje = "La opcion Stiga es la preferida con " + votosStiga + " elecciones.";
}


console.log("votosStiga:", votosStiga);
console.log("otros:", otros);
console.log("mensaje:", mensaje);