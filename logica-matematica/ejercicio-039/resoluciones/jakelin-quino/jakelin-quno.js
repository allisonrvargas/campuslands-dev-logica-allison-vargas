let cantidad = 50;
let limiteSeguridad = 100;

function validarFormula(cant, lim) {
    if (cant < 0) {
        return "Error: La cantidad no puede ser negativa.";
    } else if (cant > lim) {
        return "Error: La cantidad excede el límite de seguridad.";
    } else {
        return "Fórmula válida.";
    }
}

console.log(validarFormula(cantidad, limiteSeguridad));