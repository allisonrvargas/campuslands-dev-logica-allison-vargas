const vehiculos = [
    {
        placa: "P123ABC",
        espesorDisco: 8.5
    },
    {
        placa: "P456DEF",
        espesorDisco: 7.2
    },
    {
        placa: "P789GHI",
        espesorDisco: 5.8
    },
    {
        placa: "P321JKL",
        espesorDisco: 6.5
    },
    {
        placa: "P654MNO",
        espesorDisco: 4.9
    }
];

const LIMITE_MINIMO = 6.0;

function revisarDiscos(vehiculos) {

    console.log("=== TALLER MECÁNICO ===");

    let espesorMinimo = vehiculos[0].espesorDisco;

    vehiculos.forEach(vehiculo => {

        if (vehiculo.espesorDisco < espesorMinimo) {
            espesorMinimo = vehiculo.espesorDisco;
        }

        const diferencia = vehiculo.espesorDisco - LIMITE_MINIMO;

        console.log(`Placa: ${vehiculo.placa}`);
        console.log(`Espesor del disco: ${vehiculo.espesorDisco} mm`);

        if (vehiculo.espesorDisco >= LIMITE_MINIMO) {
            console.log("Estado: Dentro del límite permitido.");
        } else {
            console.log("Estado: Debe reemplazar el disco de freno.");
        }

        console.log(`Diferencia respecto al límite: ${diferencia.toFixed(2)} mm`);
        console.log("----------------------------------------");

    });

    console.log(`Espesor mínimo registrado: ${espesorMinimo} mm`);

}

revisarDiscos(vehiculos);