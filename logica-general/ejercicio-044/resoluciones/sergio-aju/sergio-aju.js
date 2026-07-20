function gestionarInventario(motos) {
    return motos
        .filter(m => m.estado !== "vendida")
        .map(m => {
            if (m.stock < 3) return { modelo: m.modelo, accion: "reposicion inmediata" };
            if (m.estado === "en-revision") return { modelo: m.modelo, accion: "prioridad tecnica" };
            return null;
        })
        .filter(resultado => resultado !== null);
}