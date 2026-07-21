// Definimos los datos de entrada
let moto = "Kawasaki Ninja";
let cilindraje = 400;
let filtro = "alto cilindraje";

// Variables para guardar el resultado y el motivo
let resultado = "";
let motivo = "";

// Proceso: Aplicamos el filtro por condiciones
if (cilindraje <= 0) {
    resultado = "error";
    motivo = "El cilindraje ingresado no es valido.";

} else if (filtro === "alto cilindraje") {

    if (cilindraje > 250) {
        resultado = "incluida";
        motivo = "La moto " + moto + " tiene " + cilindraje + "cc, asi que pasa el filtro de alto cilindraje.";
    } else {
        resultado = "no incluida";
        motivo = "Tiene " + cilindraje + "cc, por lo tanto no califica como alto cilindraje.";
    }

} else {
    resultado = "no incluida";
    motivo = "No se reconoce el tipo de filtro solicitado.";
}

// 3. Resultado final 
console.log("moto:", moto);
console.log("cilindraje:", cilindraje);
console.log("resultado:", resultado);
console.log("motivo:", motivo);