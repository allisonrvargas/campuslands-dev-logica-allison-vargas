const revisionEquipos = [
  { paracaidista: "Luis", principalOk: true, reservaOk: true, aadBateria: 85 },
  { paracaidista: "Carlos", principalOk: false, reservaOk: true, aadBateria: 90 },
  { paracaidista: "Mateo", principalOk: true, reservaOk: true, aadBateria: 15 },
  { paracaidista: "Daniel", principalOk: true, reservaOk: false, aadBateria: 50 }
];

for (let i = 0; i < revisionEquipos.length; i++) {
  let equipo = revisionEquipos[i];
  let estatus = "";

  if (equipo.principalOk && equipo.reservaOk && equipo.aadBateria >= 20) {
    estatus = "Autorizado para saltar";
  } else if (!equipo.principalOk || !equipo.reservaOk) {
    estatus = "Denegado: Falla crítica en velamen";
  } else {
    estatus = "En Mantenimiento: Batería AAD baja";
  }

  console.log(`Paracaidista: ${equipo.paracaidista} -> Estatus: ${estatus}`);
}