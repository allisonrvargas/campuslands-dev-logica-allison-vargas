//  Definimos los datos de entrada
let equipo = "Futsal Scorpion";
let puntos = 12;

// Variables para guardar la respuesta
let estado = "";
let mensaje = "";

//  Proceso: Revisamos si los datos estan correctos 
if (equipo === "" || equipo.trim() === "") {
    
    estado = "error";
    mensaje = "No se puede registrar. El nombre del equipo no puede estar vacio.";

} else if (puntos < 0) {
    
    estado = "error";
    mensaje = "No se puede registrar. Los puntos no pueden ser numeros negativos.";

} else {
    estado = "registrado";
    mensaje = "El equipo " + equipo + " entro al ranking correctamente con " + puntos + " puntos.";

}

//  Resultado final
console.log("estado:", estado);
console.log("mensaje:", mensaje);