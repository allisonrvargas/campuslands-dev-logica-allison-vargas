// entradas

const tatuaje = {
    tintaDisponible: true,
    maquinaEncendida: false,
    clientePresente: true
};

// funcion para diagnosticar el problema

function diagnosticarError(datos) {

    if (!datos) {
        return "No hay informacion para realizar el diagnostico.";
    }

    if (!datos.tintaDisponible) {
        return "Error: no hay tinta disponible.";
    }

    if (!datos.maquinaEncendida) {
        return "Error: la maquina esta apagada.";
    }

    if (!datos.clientePresente) {
        return "Error: el cliente no esta presente.";
    }

    return "Todo esta listo para comenzar el tatuaje.";
}

console.log(diagnosticarError(tatuaje));

// pruebas

console.log("\nCaso normal");

console.log(
    diagnosticarError({
        tintaDisponible: true,
        maquinaEncendida: true,
        clientePresente: true
    })
);

console.log("\nCaso borde");

console.log(
    diagnosticarError({
        tintaDisponible: false,
        maquinaEncendida: true,
        clientePresente: true
    })
);