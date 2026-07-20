function ordenarTaller(motos) {
    return motos.sort((a, b) => {
        if (b.gravedad !== a.gravedad) {
            return b.gravedad - a.gravedad;
        }
        return a.tiempoEstimado - b.tiempoEstimado;
    });
}