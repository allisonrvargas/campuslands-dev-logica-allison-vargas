function organizarCategoriasKickboxing(peleadores) {
    if (!peleadores || peleadores.length === 0) {
        return { mensaje: "No hay peleadores registrados" };
    }

    const clasificados = peleadores.map(p => {
        let categoria = "";
        if (p.peso < 60) categoria = "Pluma";
        else if (p.peso <= 75) categoria = "Welter";
        else categoria = "Pesado";
        
        return { ...p, categoria };
});

    const nivelados = clasificados.sort((a, b) => b.experiencia - a.experiencia);

    return {
        total: peleadores.length,
        lista: nivelados
    };
}