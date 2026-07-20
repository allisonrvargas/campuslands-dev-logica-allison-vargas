let clima = "humedo";      
let presupuesto = "alto";  

function elegirMaterial(clima, presupuesto) {
    if (clima === "humedo" && presupuesto === "alto") {
        return "Acero inoxidable (resistente y premium).";
    } else if (clima === "humedo" && presupuesto === "bajo") {
        return "Madera tratada (económica y resistente).";
    } else if (clima === "seco" && presupuesto === "alto") {
        return "Piedra natural (estética y duradera).";
    } else {
        return "Ladrillo estándar (económico y funcional).";
    }
}

console.log("Material recomendado:", elegirMaterial(clima, presupuesto));