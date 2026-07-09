function evaluarDistribucionPelicula(pelicula) {
    if (pelicula.duracionMinutos > 180) {
        return "Rechazada: Excede límite de duración.";
    }
    
    if (pelicula.clasificacion === "NC-17" && !pelicula.tienePermisoEspecial) {
        return "Rechazada: Requiere permiso especial por clasificación.";
    }
    
    if (pelicula.calidadTecnica < 7) {
        return "Rechazada: Calidad técnica insuficiente.";
    }
    
    return "Aprobada: Película apta para distribución.";
}

const pelicula1 = { titulo: "Cyber-City", duracionMinutos: 120, clasificacion: "PG-13", calidadTecnica: 9, tienePermisoEspecial: false };
const pelicula2 = { titulo: "Void-Space", duracionMinutos: 200, clasificacion: "PG-13", calidadTecnica: 8, tienePermisoEspecial: false };

console.log(`${pelicula1.titulo}: ${evaluarDistribucionPelicula(pelicula1)}`);
console.log(`${pelicula2.titulo}: ${evaluarDistribucionPelicula(pelicula2)}`);
