let atomosHidrogeno = 2;
let atomosOxigeno = 1;

let totalAtomos = atomosHidrogeno + atomosOxigeno;

let formulaValida = false;

if (atomosHidrogeno > 0 && atomosOxigeno > 0) {
    formulaValida = true;
}

let mensaje = "";

if (formulaValida) {
    mensaje = "formula valida";
} else {
    mensaje = "formula invalida";
}

let explicacion = "se verifico que la cantidad de atomos de cada elemento fuera mayor que cero.";

console.log("total_atomos:", totalAtomos);
console.log("formula_valida:", formulaValida);
console.log("mensaje:", mensaje);
console.log("explicacion:", explicacion);