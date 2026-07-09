let x1 = 0;
let y1 = 0;
let x2 = 3;
let y2 = 4;

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

let estado = "";
if (distancia <= 5) {
    estado = "aterrizaje preciso";
} else {
    estado = "fuera de rango";
}

console.log("distancia_al_centro:", distancia);
console.log("estado:", estado);