function verificarMoto(cilindrada, kilometraje, tieneDocumentos) {
    if (!tieneDocumentos) {
        return { apta: false, motivo: "Documentación incompleta" };
    }
    if (cilindrada > 600 && kilometraje > 20000) {
        return { apta: false, motivo: "Desgaste excesivo en motor de alta gama" };
    }
    if (kilometraje > 50000) {
        return { apta: false, motivo: "Kilometraje fuera de rango comercial" };
    }
    return { apta: true, motivo: "Moto lista para venta" };
}

console.log(verificarMoto(700, 25000, true));
console.log(verificarMoto(250, 10000, false));