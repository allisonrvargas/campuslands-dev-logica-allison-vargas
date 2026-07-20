function calcularDisenoTatuajes(tatuajes) {
  if (!Array.isArray(tatuajes) || tatuajes.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un diseño de tatuaje."
    };
  }

  const resultados = [];
  let areaTotal = 0;
  let perimetroTotal = 0;

  for (const tatuaje of tatuajes) {
    const {
      cliente,
      forma,
      medida1,
      medida2
    } = tatuaje;

    if (
      !cliente ||
      medida1 <= 0 ||
      medida2 <= 0 ||
      !forma
    ) {
      resultados.push({
        cliente,
        estado: "Datos inválidos"
      });
      continue;
    }

    let area = 0;
    let perimetro = 0;

    if (forma.toLowerCase() === "rectangulo") {
      area = medida1 * medida2;
      perimetro = 2 * (medida1 + medida2);
    } else if (forma.toLowerCase() === "circulo") {
      area = Math.PI * Math.pow(medida1, 2);
      perimetro = 2 * Math.PI * medida1;
    } else {
      resultados.push({
        cliente,
        estado: "Forma no soportada"
      });
      continue;
    }

    areaTotal += area;
    perimetroTotal += perimetro;

    resultados.push({
      cliente,
      forma,
      area: Number(area.toFixed(2)),
      perimetro: Number(perimetro.toFixed(2))
    });
  }

  return {
    cantidadDiseños: tatuajes.length,
    areaTotal: Number(areaTotal.toFixed(2)),
    perimetroTotal: Number(perimetroTotal.toFixed(2)),
    resultados
  };
}

const tatuajes = [
  {
    cliente: "Laura",
    forma: "rectangulo",
    medida1: 10,
    medida2: 5
  },
  {
    cliente: "Carlos",
    forma: "circulo",
    medida1: 4,
    medida2: 0
  }
];

console.log(calcularDisenoTatuajes(tatuajes));