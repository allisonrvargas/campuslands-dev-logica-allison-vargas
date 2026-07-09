let calif = [7.5, 8.0, 8.5, 9.0];

let sube = true;
let baja = true;

for (let i = 0; i < calif.length - 1; i++) {
    if (calif[i+1] < calif[i]) sube = false;    
    if (calif[i+1] > calif[i]) baja = false;
}

if (sube) {
    console.log("La saga está mejorando (creciente)");
} else if (baja) {
    console.log("La saga está empeorando (decreciente)");
} else {
    console.log("Es una mezcla de buenas y malas (errática)");
}