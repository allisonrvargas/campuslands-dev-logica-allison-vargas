// Definimos los datos de entrada
let edad = 20;
let nivel = "Pro";

// Variables para guardar la respuesta 
let decision = "";
let motivo = "";

// Proceso: Tomamos la decision revisando las reglas
if (edad < 18) {

    decision = "Rechazado";
    motivo = "Aunque tenga buen nivel, no cumple con la edad minima para el torneo.";

} else {
 
    if (nivel === "Pro") {
        decision = "Aceptado";
        motivo = "Cumple con la edad y va para la Liga Superior por ser nivel Pro.";
    } else {
        decision = "Aceptado";
        motivo = "Cumple con la edad y va para la Liga de Desarrollo por ser nivel Amateur.";
    }

}

// 3. Resultado final 
console.log("decision:", decision);
console.log("motivo:", motivo);