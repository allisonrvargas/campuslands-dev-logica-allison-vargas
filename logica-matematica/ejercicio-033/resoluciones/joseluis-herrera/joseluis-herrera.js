const zonaAterrizaje = { x: 0, y: 0 };

const saltosParacaidistas = [
  { nombre: "Luis", x: 3, y: 4, alturaAltimetro: 4000 },
  { nombre: "Carlos", x: 12, y: 5, alturaAltimetro: 3500 },
  { nombre: "Mateo", x: 1, y: 1, alturaAltimetro: 4200 },
  { nombre: "Daniel", x: 8, y: 15, alturaAltimetro: 2900 }
];

for (let i = 0; i < saltosParacaidistas.length; i++) {
  let p = saltosParacaidistas[i];
  
  let distancia = Math.sqrt(Math.pow(p.x - zonaAterrizaje.x, 2) + Math.pow(p.y - zonaAterrizaje.y, 2));
  let estado = "";

  if (distancia <= 5 && p.alturaAltimetro >= 3000) {
    estado = "Aterrizaje Seguro";
  } else if (distancia <= 10) {
    estado = "Aterrizaje Lejano";
  } else {
    estado = "Fuera de Zona / Alerta";
  }

  console.log(`Paracaidista: ${p.nombre} -> Distancia: ${distancia.toFixed(1)}m | Estado: ${estado}`);
}