const convertirUnidades = (autos) => {
    const KW = 0.7457;
    const MPH = 0.621371;

    return autos.map(auto => {
        const kw = auto.potenciaHp * KW;
        const mph = auto.velocidadKmh * MPH;
        const clasificacion = mph > 250 ? "Hiper-Rápido" : "Súper-Deportivo";

        return {
            modelo: auto.modelo,
            potenciaKw: kw.toFixed(2),
            velocidadMph: mph.toFixed(2),
            clasificacion: clasificacion
        };
    });
};

const inventario = [
    { modelo: "Bugatti Chiron", potenciaHp: 1500, velocidadKmh: 420 },
    { modelo: "Porsche 911", potenciaHp: 450, velocidadKmh: 290 }
];

console.log(convertirUnidades(inventario));