let listaPeleadores = ["listo", "lesionado", "listo", "suspendido", "lesionado"];

function organizarAgenda(lista) {
    if (lista.includes("lesionado")) {
        return "atender lesionados";
    } else if (lista.includes("listo")) {
        return "programar combate";
    } else {
        return "revisar suspensiones";
    }
}

let accion = organizarAgenda(listaPeleadores);
console.log("Acción a tomar:", accion);