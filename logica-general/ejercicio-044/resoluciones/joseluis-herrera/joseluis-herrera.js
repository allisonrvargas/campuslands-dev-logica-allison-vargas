const inventario = [
    { modelo: "Yamaha MT-07", km: 4500, estado: "Óptimo", soat: true, esClasico: false },
    { modelo: "Honda CB500", km: 60000, estado: "Bueno", soat: true, esClasico: false },
    { modelo: "Suzuki DR650", km: 30000, estado: "Bueno", soat: true, esClasico: true },
    { modelo: "Kawasaki Z900", km: 12000, estado: "Regular", soat: true, esClasico: false }
];

let filtrarMotos = (moto) => {
    if (!moto.soat) return false;
    if (moto.estado !== "Óptimo" && moto.estado !== "Bueno") return false;
    if (moto.km > 50000 && !moto.esClasico) return false;
    return true;
};

if (inventario.length === 0) {
    console.log("Inventario vacío.");
} else {
    inventario.forEach((moto) => {
        if (filtrarMotos(moto)) {
            let etiqueta = (moto.km < 5000 && moto.estado === "Óptimo") ? " - ¡Oportunidad Única!" : "";
            console.log(`Disponible: ${moto.modelo}${etiqueta}`);
        }
    });
}