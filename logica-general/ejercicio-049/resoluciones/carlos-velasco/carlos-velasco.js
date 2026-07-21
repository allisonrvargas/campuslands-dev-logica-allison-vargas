const simularSupervivencia = (personaje, evento) => {
    if (personaje.estado === "Eliminado") return personaje;

    let p = { ...personaje };

    if (evento === "ruido") {
        p.sustoAcumulado += p.escondido ? 1 : 3;
    } else if (evento === "encuentro") {
        if (p.tieneArma) p.sustoAcumulado += 2;
        else p.estado = "Eliminado";
    } else if (evento === "calma") {
        p.sustoAcumulado = Math.max(0, p.sustoAcumulado - 2);
    }

    if (p.estado !== "Eliminado") {
        p.estado = p.sustoAcumulado >= 10 ? "Pánico" : "A salvo";
    }

    return p;
};

const protagonista = { nombre: "Elena", escondido: false, tieneArma: false, sustoAcumulado: 8, estado: "A salvo" };

console.log(simularSupervivencia(protagonista, "ruido"));
console.log(simularSupervivencia(protagonista, "encuentro"));