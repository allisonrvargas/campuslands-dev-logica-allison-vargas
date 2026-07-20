const inventario = [
    { modelo: "Yamaha R6", año: 2024, km: 5000, estadoPuntaje: 10 },
    { modelo: "Honda CB190", año: 2022, km: 15000, estadoPuntaje: 8 },
    { modelo: "Akt 125", año: 2020, km: 60000, estadoPuntaje: 6 },
    { modelo: "Kawasaki Ninja", año: 2025, km: 2000, estadoPuntaje: 10 }
];

let calcularValor = (m) => (m.año * 0.5) + (m.estadoPuntaje * 50) - (m.km * 0.01);

let gama = { premium: null, estandar: null, economica: null };

inventario.forEach((moto) => {
    let valor = calcularValor(moto);
    let categoria = moto.km <= 10000 ? "premium" : moto.km <= 50000 ? "estandar" : "economica";
    
    if (!gama[categoria] || valor > calcularValor(gama[categoria])) {
        gama[categoria] = moto;
    }
});

Object.keys(gama).forEach(cat => {
    if (gama[cat]) {
        console.log(`Mejor en ${cat.toUpperCase()}: ${gama[cat].modelo}`);
    }
});