function diagnosticarSesionTatuaje(sesion) {
    const { tamanoCm, complejidad, ubicacion, tipoTinta } = sesion;

    if (tamanoCm < 5 && complejidad === "alta") {
        return { viable: false, error: "Diseño demasiado pequeño para este nivel de detalle" };
    }

    const zonasDificiles = ["costillas", "pies", "manos"];
    if (zonasDificiles.includes(ubicacion.toLowerCase()) && tipoTinta === "acuarela") {
        return { viable: false, error: "La técnica de acuarela no es recomendable en zonas de alta fricción" };
    }

    let estimadoHoras = (tamanoCm * 0.5) + (complejidad === "alta" ? 2 : 1);
    
    return {
        viable: true,
        estimadoHoras: estimadoHoras,
        recomendacion: "Mantener hidratación post-sesión"
    };
}