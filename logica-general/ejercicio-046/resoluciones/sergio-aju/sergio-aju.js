function buscarHiperdeportivo(catalogo, criterio) {
    return catalogo.filter(auto => {
        // Si el criterio es numérico, buscar por velocidad
        if (typeof criterio === 'number') {
            return auto.velocidadMaxima >= criterio;
        }
        // Si es texto, buscar por marca o modelo
        return auto.marca.toLowerCase().includes(criterio.toLowerCase()) || 
               auto.modelo.toLowerCase().includes(criterio.toLowerCase());
    });
}