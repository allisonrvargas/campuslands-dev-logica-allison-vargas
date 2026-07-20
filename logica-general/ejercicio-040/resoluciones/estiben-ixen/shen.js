function recomendarComida(pedido) {
    const { presupuesto, tieneAlergias, tiempoMaximo, tipoPreferido } = pedido;

    if (tieneAlergias) {
        return { recomendacion: "Menú Especial", razon: "Opciones certificadas sin alérgenos." };
    }

    if (tiempoMaximo < 15) {
        return { recomendacion: "Hot Dog Express", razon: "Comida rápida preparada en menos de 15 min." };
    }

    if (presupuesto < 5) {
        return { recomendacion: "Combo Básico", razon: "Opción económica dentro de presupuesto." };
    }

    return { 
        recomendacion: `Plato ${tipoPreferido}`, 
        razon: `Opción seleccionada según preferencia: ${tipoPreferido}.` 
    };
}

const cliente = { presupuesto: 12, tieneAlergias: false, tiempoMaximo: 30, tipoPreferido: "gourmet" };
console.log(recomendarComida(cliente));