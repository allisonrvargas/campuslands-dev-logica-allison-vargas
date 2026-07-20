const clasificarMotos = (motos) => {
    return motos.map(moto => {
        if (moto.necesitaMantenimiento) {
            return { modelo: moto.modelo, categoria: "Fuera de servicio" };
        }
        
        let categoria = "";
        if (moto.cilindraje > 500) categoria = "Alta gama";
        else if (moto.cilindraje >= 125) categoria = "Urbana";
        else categoria = "Económica";
        
        return { modelo: moto.modelo, categoria };
    });
};

const inventario = [
    { modelo: "Ninja", cilindraje: 650, necesitaMantenimiento: false },
    { modelo: "CB125", cilindraje: 125, necesitaMantenimiento: true },
    { modelo: "Scooter", cilindraje: 100, necesitaMantenimiento: false }
];

console.log(clasificarMotos(inventario));