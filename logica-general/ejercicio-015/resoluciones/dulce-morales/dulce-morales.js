function calcularReglasNegocioDibujo(encargoDibujo) {
    // Caso borde primario: Objeto corrupto o inexistente
    if (!encargoDibujo || typeof encargoDibujo !== "object") {
        return {
            precioTotal: 0,
            estadoOrden: "error_estructura",
            motivo: "No se recibieron los parámetros o metadatos de la orden de dibujo digital."
        };
    }

    const { artista, tipoLienzo, incluyeUsoComercial, cantidadPersonajes } = encargoDibujo;

    // Caso borde secundario: Cantidades absurdas o incoherentes
    if (cantidadPersonajes <= 0) {
        return {
            precioTotal: 0,
            estadoOrden: "error_regla_negocio",
            motivo: "Error: La cantidad de personajes no puede ser menor o igual a cero."
        };
    }

    // Tabla de tarifas oficiales indexada (Regla de negocio 1)
    const tarifasBase = {
        "boceto": 20,
        "lineart": 40,
        "completo": 80
    };

    const lienzoNormalizado = tipoLienzo ? tipoLienzo.toLowerCase().trim() : "";
    
    if (!tarifasBase.hasOwnProperty(lienzoNormalizado)) {
        return {
            precioTotal: 0,
            estadoOrden: "error_tipo_lienzo",
            motivo: `El tipo de lienzo '${tipoLienzo}' no corresponde a una categoría válida del estudio.`
        };
    }

    // 1. Inicializar el acumulador con el costo base
    let totalAcumulado = tarifasBase[lienzoNormalizado];

    // 2. Aplicar recargo por personajes adicionales (Regla de negocio 2)
    if (cantidadPersonajes > 1) {
        const personajesExtra = cantidadPersonajes - 1;
        totalAcumulado += personajesExtra * 15; // $15 por cada uno extra
    }

    // 3. Aplicar multiplicador por derechos de uso comercial (Regla de negocio 3)
    if (incluyeUsoComercial === true) {
        totalAcumulado = totalAcumulado * 1.50; // +50% sobre el acumulado parcial
    }

    // Retorno exitoso de la cotización calculada
    return {
        precioTotal: totalAcumulado,
        estadoOrden: "cotizado",
        motivo: `Cotización exitosa para ${artista}. Estilo: '${tipoLienzo}', cantidad de personajes: ${cantidadPersonajes}. Derechos comerciales: ${incluyeUsoComercial ? 'Sí' : 'No'}.`
    };
}

// Ejecución de pruebas para verificar salida en la consola del desarrollador
const ordenNormal = {
    artista: "Dulce Morales",
    tipoLienzo: "completo",
    incluyeUsoComercial: false,
    cantidadPersonajes: 2
};

const ordenCasoBorde = {
    artista: "DigitalArt Studio",
    tipoLienzo: "boceto",
    incluyeUsoComercial: true,
    cantidadPersonajes: -1
};

console.log(calcularReglasNegocioDibujo(ordenNormal));    // Caso Normal
console.log(calcularReglasNegocioDibujo(ordenCasoBorde)); // Caso Borde