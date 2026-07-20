let resolucion = 300; 
let formato = "PNG";

function validarExportacion(res, ext) {
    if (res < 300) {
        return "Acción: Bloqueada. Motivo: Baja resolución para impresión.";
    } else if (ext !== "PNG" && ext !== "JPG") {
        return "Acción: Bloqueada. Motivo: Formato no compatible.";
    } else {
        return "Acción: Exportar archivo. Motivo: Cumple estándares de calidad.";
    }
}

console.log(validarExportacion(resolucion, formato));