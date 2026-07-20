function validarSecuenciaPlaylist(canciones) {
    const numerosOrdenados = canciones.map(c => c.orden).sort((a, b) => a - b);
    
    for (let i = 0; i < numerosOrdenados.length - 1; i++) {
        if (numerosOrdenados[i + 1] !== numerosOrdenados[i] + 1) {
            return false;
        }
    }
    return true;
}

const playlist = [
    { nombre: "Cancion 1", orden: 1 },
    { nombre: "Cancion 2", orden: 2 },
    { nombre: "Cancion 3", orden: 3 }
];

console.log("¿La secuencia es correcta?:", validarSecuenciaPlaylist(playlist));