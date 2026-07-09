function calcularCombinacionesDeAtaque(tecnicas, longitud) {
    // Si queremos combinaciones (donde el orden importa, ej: jab-cross-hook)
    // calculamos las permutaciones: n! / (n - longitud)!
    
    function factorial(n) {
        return n <= 1 ? 1 : n * factorial(n - 1);
    }

    if (longitud > tecnicas.length) return 0;
    
    return factorial(tecnicas.length) / factorial(tecnicas.length - longitud);
}

const arsenal = ["jab", "cross", "hook", "low-kick"];
const longitudCombo = 3;

console.log(`Total de combinaciones posibles: ${calcularCombinacionesDeAtaque(arsenal, longitudCombo)}`);