const registrosPesaje = [
  { nombre: "Luis", pesoRegistrado: 68.5, maximoCategoria: 70 },
  { nombre: "Carlos", pesoRegistrado: 71.2, maximoCategoria: 70 },
  { nombre: "Mateo", pesoRegistrado: 76.0, maximoCategoria: 77 },
  { nombre: "Daniel", pesoRegistrado: 65.0, maximoCategoria: 70 },
  { nombre: "Andres", pesoRegistrado: 78.5, maximoCategoria: 77 }
];

let aprobados = [];
let descalificados = [];

for (let i = 0; i < registrosPesaje.length; i++) {
  let atleta = registrosPesaje[i];

  if (atleta.pesoRegistrado <= atleta.maximoCategoria) {
    aprobados.push(atleta);
  } else {
    descalificados.push(atleta);
  }
}

aprobados.sort((a, b) => b.pesoRegistrado - a.pesoRegistrado);

console.log("=== LISTA DE ATLETAS APROBADOS (Ordenados de mayor a menor peso) ===");
for (let i = 0; i < aprobados.length; i++) {
  console.log(`- ${aprobados[i].nombre}: ${aprobados[i].pesoRegistrado} kg`);
}

console.log(`\nAtletas descalificados por exceso de peso: ${descalificados.length}`);