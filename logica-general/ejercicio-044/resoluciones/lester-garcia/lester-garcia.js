const motos = [
    { modelo: "Yamaha FZ", disponible: true, cilindraje: 150 },
    { modelo: "Honda CB190R", disponible: false, cilindraje: 190 },
    { modelo: "Suzuki Gixxer 250", disponible: true, cilindraje: 250 },
    { modelo: "KTM Duke 390", disponible: true, cilindraje: 390 }
];

const motosFiltradas = [];

for (let i = 0; i < motos.length; i++) {
    if (motos[i].disponible && motos[i].cilindraje >= 200) {
        motosFiltradas.push(motos[i].modelo);
    }
}

console.log("motos seleccionadas:", motosFiltradas);

if (motosFiltradas.length > 0) {
    console.log("motivo: Cumplen con las condiciones del filtro.");
} else {
    console.log("motivo: Ninguna moto cumple con las condiciones.");
}