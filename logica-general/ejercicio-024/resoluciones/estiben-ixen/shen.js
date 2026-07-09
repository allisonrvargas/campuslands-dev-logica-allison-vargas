function filtrarInventarioMotos(inventario, filtro) {
    return inventario.filter(moto => {
        const cumpleDisponibilidad = moto.estaDisponible === filtro.soloDisponibles;
        const cumpleKilometraje = moto.kilometraje <= filtro.maxKilometraje;
        const cumpleMotor = filtro.motorRequerido ? moto.motor === filtro.motorRequerido : true;

        return cumpleDisponibilidad && cumpleKilometraje && cumpleMotor;
    });
}

const stockMotos = [
    { modelo: "Yamaha MT-07", kilometraje: 5000, motor: "700cc", estaDisponible: true },
    { modelo: "Honda CB650R", kilometraje: 15000, motor: "650cc", estaDisponible: true },
    { modelo: "Kawasaki Z900", kilometraje: 2000, motor: "900cc", estaDisponible: false }
];

const criterios = { soloDisponibles: true, maxKilometraje: 10000, motorRequerido: "700cc" };

console.log(filtrarInventarioMotos(stockMotos, criterios));
