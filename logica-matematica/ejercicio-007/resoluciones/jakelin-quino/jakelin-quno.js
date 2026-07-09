let duraciones = [180, 210, 240, 270];

let esSecuencia = true;
for (let i = 0; i < duraciones.length - 1; i++) {
    if (duraciones[i+1] <= duraciones[i]) {
        esSecuencia = false;
    }
}

if (esSecuencia) {
    console.log("resultado: secuencia correcta");
    console.log("mensaje: las canciones estan ordenadas de forma ascendente.");
} else {
    console.log("resultado: secuencia incorrecta");
    console.log("mensaje: las canciones no siguen un orden ascendente.");
}