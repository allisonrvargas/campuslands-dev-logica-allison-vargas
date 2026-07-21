const calcularPreciosFinales = (precios, tasa, impuesto) => {
    return precios.map(precio => {
        const convertido = precio * tasa;
        const total = Math.ceil(convertido * (1 + impuesto));
        
        let categoria = "Económico";
        if (total > 500) categoria = "Lujo";
        else if (total > 100) categoria = "Estándar";

        return {
            precio_final: total,
            clasificacion: categoria
        };
    });
};

// Ejemplo: Precios [100, 450], Tasa 1.1, Impuesto 0.10
console.log(calcularPreciosFinales([100, 450], 1.1, 0.10));