const filtrarDestinos = (destinos, turista) => {
    const viables = destinos.filter(destino => {
        const tienePresupuesto = turista.presupuesto >= destino.costo;
        const cumpleVisa = !destino.requiereVisa || turista.tieneVisa;
        return tienePresupuesto && cumpleVisa;
    });

    return viables.length > 0 
        ? { aptos: viables, motivo: "Destinos que cumplen con su perfil económico y legal." }
        : { aptos: [], motivo: "No se encontraron destinos viables. Revise presupuesto o documentación." };
};

const catalogo = [
    { nombre: "París", costo: 2000, requiereVisa: false },
    { nombre: "Tokio", costo: 3000, requiereVisa: true },
    { nombre: "Lima", costo: 800, requiereVisa: false }
];

const viajero = { presupuesto: 1500, tieneVisa: false };

console.log(filtrarDestinos(catalogo, viajero));