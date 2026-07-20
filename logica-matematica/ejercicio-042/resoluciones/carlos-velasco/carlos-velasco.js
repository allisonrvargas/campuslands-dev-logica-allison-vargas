const calcularEfectividad = (goles, tiros, bono) => {
    if (tiros === 0) return { efectividad_final: 0, clasificacion: "Competitivo", explicacion: "Sin tiros al arco." };
    
    let base = (goles / tiros) * 100;
    let final = base + (base * bono);
    
    return {
        efectividad_final: final.toFixed(2),
        clasificacion: final > 50 ? "Élite" : "Competitivo",
        explicacion: "Cálculo basado en porcentaje de conversión ajustado por bono."
    };
};

console.log(calcularEfectividad(5, 10, 0.1));
console.log(calcularEfectividad(0, 10, 0.1));