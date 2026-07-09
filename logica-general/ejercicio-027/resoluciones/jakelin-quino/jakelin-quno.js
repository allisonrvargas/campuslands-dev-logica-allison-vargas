const playlist = [
    { titulo: "Cancion A", duracion: 200 },
    { titulo: "Cancion B", duracion: 0 },
    { titulo: "Cancion C", duracion: 180 }
];

let accion = "reproducir";
let motivo = "La playlist no tiene problemas.";

for (let i = 0; i < playlist.length; i++) {
    if (playlist[i].duracion === 0) {
        accion = "reparar metadata";
        motivo = "Se detectó una canción con duración cero: " + playlist[i].titulo;
    }
}

console.log("accion:", accion);
console.log("motivo:", motivo);