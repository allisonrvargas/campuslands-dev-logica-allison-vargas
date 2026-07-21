// datos de entrada
let listaAutos =["Bugatti ", "Koenigsegg", "Ferrari","McLaren","Mercedes"];
let busqueda = "Ferrari";

let resultado = "";
let mensaje = "";

if (listaAutos.length === 0) {
    
    resultado = "error";
    mensaje = "El inventario de autos esta vacio actualmente.";

} else if (listaAutos.includes(busqueda)) {
    
    resultado = "encontrado";
    mensaje = "El auto " + busqueda + " si esta en el inventario, esta listo para mostrarse.";

} else {
    
    resultado = "no encontrado";
    mensaje = "Lo sentimos, el auto " + busqueda + " no esta disponible en nuestra coleccion.";

}

console.log("busqueda:", busqueda);
console.log("resultado:", resultado);
console.log("mensaje:", mensaje);