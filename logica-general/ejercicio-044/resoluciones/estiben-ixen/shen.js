function clasificarMoto(moto) {
    const { anio, kilometraje, tieneDanio } = moto;

    if (tieneDanio) {
        return { estado: "Taller", razon: "Requiere reparación de daños detectados." };
    }

    if (anio < 2015) {
        return { estado: "Baja", razon: "Modelo fuera del rango de año permitido." };
    }

    if (kilometraje > 50000) {
        return { estado: "Taller", razon: "Kilometraje excesivo, requiere revisión preventiva." };
    }

    return { estado: "Venta Directa", razon: "Moto en condiciones óptimas para el mercado." };
}

const miMoto = { modelo: "Kawasaki Z650", anio: 2020, kilometraje: 20000, tieneDanio: false };
console.log(clasificarMoto(miMoto));