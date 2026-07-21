function evaluarCalidadSoldadura(pruebas, amperaje, temperatura) {
    let suma = pruebas.reduce((acc, val) => acc + val, 0);
    let puntajeBase = suma / pruebas.length;

    let puntajeFinal = puntajeBase;

    if (amperaje >= 80 && amperaje <= 120) {
        puntajeFinal += 10;
    } else {
        puntajeFinal -= 5; 
    }

    if (temperatura > 400) {
        puntajeFinal *= 0.85; 
    }

    let estado = "";
    if (puntajeFinal >= 80) estado = "Aprobado - Estructural";
    else if (puntajeFinal >= 50) estado = "Aprobado - Estético";
    else estado = "Reprobado - Requiere Re-soldadura";

    return {
        puntaje_final: parseFloat(puntajeFinal.toFixed(2)),
        estado: estado,
        explicacion: `Evaluación basada en ${pruebas.length} pruebas. Ajustes aplicados por amperaje (${amperaje}A) y temperatura (${temperatura}°C).`
    };
}

console.log("Caso normal:", evaluarCalidadSoldadura([70, 80, 85], 100, 300));
console.log("Caso borde (sobrecalentado):", evaluarCalidadSoldadura([70, 80, 85], 130, 450));