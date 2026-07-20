const analizarInventario = (kms, maximo) => {
    if (kms.length === 0) return { error: "Inventario vacío" };

    const maxKms = Math.max(...kms);
    const superanMaximo = kms.filter(km => km > maximo);
    const necesitaRenovacion = superanMaximo.length > (kms.length / 2);

    return {
        moto_con_mas_km: maxKms,
        total_en_riesgo: superanMaximo.length,
        estado_inventario: necesitaRenovacion ? "Renovación urgente" : "Estado óptimo",
        explicacion: `Se identificaron ${superanMaximo.length} unidades superando el límite.`
    };
};

console.log(analizarInventario([10000, 50000, 60000], 40000));
console.log(analizarInventario([5000, 10000], 40000));