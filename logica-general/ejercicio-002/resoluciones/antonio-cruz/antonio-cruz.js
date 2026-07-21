function verificarInventario(articulo) {
    if (!articulo || articulo.cantidadActual < 0 || articulo.minimoPermitido < 0) {
        return {
            pedirStock: false,
            cantidadNuevas: 0,
            estado: "error_datos_invalidos"
        };
    }

    const { cantidadActual, minimoPermitido } = articulo;

    if (cantidadActual <= minimoPermitido) {
        const cantidadNuevas = (minimoPermitido * 2) - cantidadActual;
        
        return {
            pedirStock: true,
            cantidadNuevas: cantidadNuevas,
            estado: "comprar_urgente"
        };
    }

    return {
        pedirStock: false,
        cantidadNuevas: 0,
        estado: "stock_suficiente"
    };
}

const casoNormal = {
    nombre: "Balon Futbol Sala",
    cantidadActual: 2,
    minimoPermitido: 5
};
console.log("Resultado Normal:", verificarInventario(casoNormal));

const casoBorde = {
    nombre: "Camiseta Oficial",
    cantidadActual: -2,
    minimoPermitido: 4
};
console.log("Resultado Borde:", verificarInventario(casoBorde));