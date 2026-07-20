let viento = 45; 
let experiencia = 3;

function decidirSalto(viento, exp) {
    if (viento > 40) {
        return "Acción: Cancelar salto. Motivo: Viento demasiado fuerte.";
    } else if (viento > 25 && exp < 5) {
        return "Acción: Cancelar salto. Motivo: Viento moderado, requiere más experiencia.";
    } else {
        return "Acción: Proceder con el salto. Motivo: Condiciones seguras.";
    }
}

console.log(decidirSalto(viento, experiencia));