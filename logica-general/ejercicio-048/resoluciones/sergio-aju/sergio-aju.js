function procesarFlujoPeliculas(proyectos) {
    return proyectos.map(p => {
        let nuevoEstado = p.estado;
        let tipo = "estándar";

        if (p.presupuesto > 500) nuevoEstado = "aprobación de junta";
        else if (p.presupuesto < 50) tipo = "independiente";
        
        if (p.esSecuela) {
            tipo = "secuela";
            if (p.estado === "propuesta") nuevoEstado = "en-desarrollo";
        }

        return { titulo: p.titulo, estado: nuevoEstado, tipo: tipo };
    });
}