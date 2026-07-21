// Entradas: Presupuesto y tipo de dieta
let presupuesto = 15; // en USD
let dieta = "vegano"; 

function sugerirMenu(dinero, tipo) {
    if (dinero < 10) {
        return "Sugerencia: Combo básico de la casa.";
    }
    
    // Si tiene más dinero, filtramos por dieta
    if (tipo === "vegano") {
        return "Sugerencia: Bowl de quinua y vegetales frescos.";
    } else if (tipo === "carnívoro") {
        return "Sugerencia: Hamburguesa artesanal con extra de tocineta.";
    } else {
        return "Sugerencia: Plato equilibrado con proteína y ensalada.";
    }
}

console.log(sugerirMenu(presupuesto, dieta));