const reacciones = [
    { compuesto: "H2O", reactivos: 4, productos: 4, esGasDiatomico: false },
    { compuesto: "O2", reactivos: 2, productos: 2, esGasDiatomico: true },
    { compuesto: "CH4", reactivos: 5, productos: 3, esGasDiatomico: false },
    { compuesto: "N2", reactivos: 3, productos: 2, esGasDiatomico: true }
];

let validar_balance = (r) => {
    if (r.esGasDiatomico && r.reactivos % 2 !== 0) return "Inestable";
    return (r.reactivos === r.productos) ? "Balanceado" : "Desbalanceado";
};

if (reacciones.length === 0) {
    console.log("No hay reacciones para validar.");
} else {
    reacciones.forEach((reaccion) => {
        let estado = validar_balance(reaccion);
        console.log(`Compuesto ${reaccion.compuesto}: ${estado}`);
    });
}