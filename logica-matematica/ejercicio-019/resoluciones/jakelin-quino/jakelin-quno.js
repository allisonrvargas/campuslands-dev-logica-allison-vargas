let valencias = [+1, -1]; 

let sumaValencias = 0;
for (let i = 0; i < valencias.length; i++) {
    sumaValencias += valencias[i];
}

if (sumaValencias === 0) {
    console.log("resultado: formula valida (neutra)");
} else {
    console.log("resultado: formula invalida (desbalanceada)");
}