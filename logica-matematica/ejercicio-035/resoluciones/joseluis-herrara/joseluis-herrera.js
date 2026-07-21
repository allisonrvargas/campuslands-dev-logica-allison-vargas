const trazosPincel = [
  { ID: "Trazo_1", distanciaPixeles: 1200, tiempoMilisegundos: 300, presionLapis: 80 },
  { ID: "Trazo_2", distanciaPixeles: 150, tiempoMilisegundos: 500, presionLapis: 90 },
  { ID: "Trazo_3", distanciaPixeles: 800, tiempoMilisegundos: 200, presionLapis: 30 },
  { ID: "Trazo_4", distanciaPixeles: 0, tiempoMilisegundos: 1000, presionLapis: 100 }
];

for (let i = 0; i < trazosPincel.length; i++) {
  let t = trazosPincel[i];
  let velocidad = t.tiempoMilisegundos > 0 ? t.distanciaPixeles / t.tiempoMilisegundos : 0;
  let efectoGrosor = "";

  if (velocidad === 0) {
    efectoGrosor = "Punto / Mancha (Sin distancia)";
  } else if (velocidad > 3 && t.presionLapis < 50) {
    efectoGrosor = "Linea Delgada / Boceto rapido";
  } else if (velocidad <= 1) {
    efectoGrosor = "Linea Gruesa / Entintado detallado";
  } else {
    efectoGrosor = "Linea Estandar";
  }

  console.log(`Trazo: ${t.ID} -> Velocidad: ${velocidad.toFixed(2)} px/ms | Efecto: ${efectoGrosor}`);
}