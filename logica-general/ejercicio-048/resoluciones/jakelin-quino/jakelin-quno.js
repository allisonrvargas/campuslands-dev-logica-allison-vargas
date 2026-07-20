function iniciarDespegue(nave) {
    const pasos = [
        { id: "combustible", requerido: true },
        { id: "oxigeno", requerido: true },
        { id: "escudos", requerido: false }
    ];

    for (let i = 0; i < pasos.length; i++) {
        let paso = pasos[i];
        let estadoSistema = nave.sistemas[paso.id];
        if (paso.requerido && !estadoSistema) {
            return { despegue: false, error: "Fallo crítico en: " + paso.id };
        }
    }
    return { despegue: true, mensaje: "Despegue autorizado." };
}

const naveEjemplo = {
    sistemas: { combustible: true, oxigeno: true, escudos: false }
};

console.log(iniciarDespegue(naveEjemplo));