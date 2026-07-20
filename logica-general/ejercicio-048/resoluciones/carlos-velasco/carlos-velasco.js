const recomendarPelicula = (peliculas, preferencia) => {
    const disponibles = peliculas.filter(p => p.disponible);
    
    if (disponibles.length === 0) {
        return { accion: "Ninguna", motivo: "No hay películas disponibles en el catálogo." };
    }

    const coincidencia = disponibles.find(p => p.subgenero === preferencia);
    
    if (coincidencia) {
        return { accion: `Ver ${coincidencia.titulo}`, motivo: "Coincidencia exacta con tu preferencia." };
    }

    return { accion: `Ver ${disponibles[0].titulo}`, motivo: "No hay coincidencias exactas, sugerencia basada en disponibilidad." };
};

const catalogo = [
    { titulo: "Blade Runner 2049", subgenero: "Cyberpunk", disponible: true },
    { titulo: "Dune", subgenero: "Space Opera", disponible: false },
    { titulo: "The Matrix", subgenero: "Cyberpunk", disponible: true }
];

console.log(recomendarPelicula(catalogo, "Cyberpunk"));
console.log(recomendarPelicula(catalogo, "Space Opera"));