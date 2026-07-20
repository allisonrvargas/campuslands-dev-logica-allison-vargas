function resolverSaltosParacaidismo(saltos) {
  if (!Array.isArray(saltos) || saltos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un salto registrado."
    };
  }

  const resultados = [];
  let saltosSeguros = 0;

  for (const salto of saltos) {
    const {
      participante,
      altura,
      viento,
      paracaidas
    } = salto;

    if (
      !participante ||
      altura <= 0 ||
      viento < 0 ||
      typeof paracaidas !== "boolean"
    ) {
      resultados.push({
        participante,
        estado: "Datos inválidos"
      });
      continue;
    }

    let decision = "";
    let motivo = "";

    if (!paracaidas) {
      decision = "Cancelado";
      motivo = "No hay paracaídas disponible.";
    } else if (viento > 40) {
      decision = "Cancelado";
      motivo = "Velocidad del viento demasiado alta.";
    } else if (altura < 800) {
      decision = "Reprogramado";
      motivo = "La altura es insuficiente para un salto seguro.";
    } else {
      decision = "Aprobado";
      motivo = "El salto cumple todas las condiciones de seguridad.";
      saltosSeguros++;
    }

    resultados.push({
      participante,
      decision,
      motivo
    });
  }

  return {
    saltosAnalizados: saltos.length,
    saltosSeguros,
    resultados
  };
}

const saltos = [
  {
    participante: "María",
    altura: 3500,
    viento: 18,
    paracaidas: true
  },
  {
    participante: "Carlos",
    altura: 600,
    viento: 15,
    paracaidas: true
  },
  {
    participante: "Andrea",
    altura: 3200,
    viento: 45,
    paracaidas: true
  }
];

console.log(resolverSaltosParacaidismo(saltos));