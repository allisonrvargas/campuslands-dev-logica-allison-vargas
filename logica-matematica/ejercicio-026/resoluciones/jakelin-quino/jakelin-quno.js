let velocidadesKmH = [400, 350, 420, 380];
let factorConversion = 0.621371;

let velocidadesMph = [];

for (let i = 0; i < velocidadesKmH.length; i++) {
    let conversion = velocidadesKmH[i] * factorConversion;
    velocidadesMph.push(conversion.toFixed(2));
}

let maximaMph = Math.max(...velocidadesMph);
let categoria = (maximaMph > 250) ? "hiperdeportivo extremo" : "deportivo estándar";

console.log("velocidades_en_mph:", velocidadesMph);
console.log("maxima_velocidad_mph:", maximaMph);
console.log("clasificacion:", categoria);