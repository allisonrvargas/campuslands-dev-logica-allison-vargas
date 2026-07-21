const peleadores = [
  { nombre: "Luis", peso: "Welter", gimnasio: "Alpha" },
  { nombre: "Carlos", peso: "Welter", gimnasio: "Beta" },
  { nombre: "Mateo", peso: "Medio", gimnasio: "Alpha" },
  { nombre: "Daniel", peso: "Welter", gimnasio: "Alpha" },
  { nombre: "Andres", peso: "Medio", gimnasio: "Beta" }
];

let peleasValidas = 0;

for (let i = 0; i < peleadores.length; i++) {
  for (let j = i + 1; j < peleadores.length; j++) {
    let p1 = peleadores[i];
    let p2 = peleadores[j];

    if (p1.peso === p2.peso && p1.gimnasio !== p2.gimnasio) {
      console.log(`Pelea pactada: ${p1.nombre} vs ${p2.nombre} (${p1.peso})`);
      peleasValidas++;
    }
  }
}

console.log(`Total de combinaciones posibles de peleas: ${peleasValidas}`);