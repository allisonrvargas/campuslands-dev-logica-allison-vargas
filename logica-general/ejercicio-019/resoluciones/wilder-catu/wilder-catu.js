// Reto Campuslands - Organización de listas de Fórmulas Químicas

// Entradas
const formulas = [
    {
        nombre: "Agua",
        formula: "H2O",
        masaMolar: 18.02
    },
    {
        nombre: "Dióxido de Carbono",
        formula: "CO2",
        masaMolar: 44.01
    },
    {
        nombre: "Ácido Sulfúrico",
        formula: "H2SO4",
        masaMolar: 98.08
    },
    {
        nombre: "Amoníaco",
        formula: "NH3",
        masaMolar: 17.03
    },
    {
        nombre: "Glucosa",
        formula: "C6H12O6",
        masaMolar: 180.16
    }
];

// Organización de la lista
// Ordenar de mayor a menor según la masa molar
const ranking = formulas.sort((a, b) => b.masaMolar - a.masaMolar);

// Salida
console.log("=== Lista de Fórmulas Químicas por Masa Molar ===");

ranking.forEach((compuesto, posicion) => {
    console.log(
        `${posicion + 1}. ${compuesto.nombre} (${compuesto.formula}) | Masa molar: ${compuesto.masaMolar} g/mol`
    );
});