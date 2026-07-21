const validarInscripcion = (jugador) => {
    if (jugador.edad < 15 || jugador.edad > 40) {
        return { estado: "Rechazado", motivo: "Edad fuera de rango permitido." };
    }
    if (jugador.tieneLesion) {
        return { estado: "Rechazado", motivo: "El jugador presenta una lesión activa." };
    }
    if (jugador.tarjetasRojas >= 3) {
        return { estado: "Rechazado", motivo: "Jugador suspendido por historial disciplinario." };
    }
    return { estado: "Aprobado", motivo: "Inscripción exitosa." };
};

console.log(validarInscripcion({ nombre: "Juan", edad: 20, tieneLesion: false, tarjetasRojas: 1 }));
console.log(validarInscripcion({ nombre: "Pedro", edad: 45, tieneLesion: false, tarjetasRojas: 0 }));