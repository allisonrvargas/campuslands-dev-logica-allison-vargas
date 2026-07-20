function validarFormulaQuimica(elementos) {
    const keys = Object.keys(elementos);
    
    if (keys.length === 0) return { valido: false, razon: "La fórmula está vacía." };

    for (let elemento of keys) {
        const cantidad = elementos[elemento];
        if (!Number.isInteger(cantidad)) {
            return { valido: false, razon: `El elemento ${elemento} tiene una cantidad fraccionaria.` };
        }
        if (cantidad <= 0) {
            return { valido: false, razon: `El elemento ${elemento} debe tener al menos 1 átomo.` };
        }
    }

    return {
        valido: true,
        razon: "La fórmula química es estructuralmente válida."
    };
}
console.log("Caso Normal:", validarFormulaQuimica({ H: 2, O: 1 })); 
console.log("Caso Borde (Cantidad negativa):", validarFormulaQuimica({ C: 1, O: -2 }));