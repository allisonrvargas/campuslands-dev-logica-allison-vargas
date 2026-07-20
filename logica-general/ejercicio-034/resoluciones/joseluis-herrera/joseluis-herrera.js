const solicitudesCitas = [
  { cliente: "Luis", edad: 20, estilo: "Realismo", maquinaAsignada: "Bobinas", alergias: false },
  { cliente: "Carlos", edad: 16, estilo: "Tradicional", maquinaAsignada: "Rotativa", alergias: false },
  { cliente: "Mateo", edad: 25, estilo: "Acuarela", maquinaAsignada: "Bobinas", alergias: false },
  { cliente: "Daniel", edad: 30, estilo: "Puntillismo", maquinaAsignada: "Rotativa", alergias: true }
];

for (let i = 0; i < solicitudesCitas.length; i++) {
  let cita = solicitudesCitas[i];
  let diagnostico = "Cita Correcta";

  if (cita.edad < 18) {
    diagnostico = "Error: Cliente menor de edad";
  } else if (cita.alergias) {
    diagnostico = "Error: Requiere test médico por alergias";
  } else if (cita.estilo === "Acuarela" && cita.maquinaAsignada === "Bobinas") {
    diagnostico = "Error: Configuración de máquina incompatible para sombreado suave";
  }

  console.log(`Cliente: ${cita.cliente} -> Diagnóstico: ${diagnostico}`);
}