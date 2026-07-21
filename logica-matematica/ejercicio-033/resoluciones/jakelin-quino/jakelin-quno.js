let p1 = {x: 0, y: 0};
let p2 = {x: 3, y: 4};

let distancia = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

console.log("Distancia al objetivo:", distancia);