// Definimos los datos de entrada
let falla = "frenos dañados";
let cliente = "normal";

let nivelPrioridad = "";
let motivo = "";

// Proceso: Ordenamos por prioridades aplicando las reglas
if (falla === "frenos dañados") {
    nivelPrioridad = "Prioridad Alta";
    motivo = "Los frenos dañados son un peligro, se atienden de inmediato.";

} else if (cliente === "VIP") {
    nivelPrioridad = "Prioridad Media";
    motivo = "Es una falla simple, pero se adelanta el turno por ser cliente VIP.";

} else {
    
    nivelPrioridad = "Prioridad Baja";
    motivo = "Falla comun de cliente regular, se atiende segun el orden de la fila.";

}

// 3. Resultado final 
console.log("falla:", falla);
console.log("cliente:", cliente);
console.log("prioridad:", nivelPrioridad);
console.log("motivo:", motivo);