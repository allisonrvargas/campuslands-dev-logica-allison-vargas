function evaluarLienzo(proyecto) {
    const { dpi, modoColor, pesoMb, dimensionesCm } = proyecto;

    if (dpi < 300 && modoColor === "CMYK") {
        return { 
            apto: false, 
            razon: "Resolución insuficiente para impresión CMYK (mínimo 300 DPI)." 
        };
    }

    if (pesoMb > 20 && modoColor === "RGB") {
        return { 
            apto: false, 
            razon: "Archivo demasiado pesado para publicación web (límite 20MB)." 
        };
    }

    const area = dimensionesCm.ancho * dimensionesCm.alto;
    const esViable = area <= 2000;

    return {
        apto: true,
        viabilidadArea: esViable ? "Óptima" : "Requiere optimización de capas",
        recomendacion: esViable ? "Proceso listo para exportar" : "Dividir el lienzo en sub-archivos"
    };
}