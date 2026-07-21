function validarFormulasQuimicas(formulas) {
  if (!Array.isArray(formulas) || formulas.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen fórmulas registradas."
    };
  }

  let formulasValidas = 0;
  let formulasInvalidas = 0;


  const resultados = formulas.map((formula) => {

    const {
      nombre,
      elementos,
      masaMolecular,
      atomosTotales
    } = formula;


    if (
      !nombre ||
      !Array.isArray(elementos) ||
      elementos.length === 0 ||
      masaMolecular <= 0 ||
      atomosTotales <= 0
    ) {
      formulasInvalidas++;

      return {
        nombre,
        estado: "Fórmula inválida"
      };
    }


    let masaCalculada = 0;
    let cantidadElementos = 0;
    let elementosCorrectos = true;


    elementos.forEach((elemento) => {

      if (
        !elemento.simbolo ||
        elemento.cantidad <= 0 ||
        elemento.masaAtomica <= 0
      ) {
        elementosCorrectos = false;
      }


      cantidadElementos += elemento.cantidad;

      masaCalculada +=
        elemento.masaAtomica * elemento.cantidad;
    });


    const diferenciaMasa =
      Math.abs(masaCalculada - masaMolecular);


    if (
      !elementosCorrectos ||
      cantidadElementos !== atomosTotales ||
      diferenciaMasa > 0.01
    ) {
      formulasInvalidas++;

      return {
        nombre,
        estado: "Validación fallida",
        masaEsperada: masaMolecular,
        masaCalculada: masaCalculada.toFixed(2),
        atomosEsperados: atomosTotales,
        atomosCalculados: cantidadElementos
      };
    }


    formulasValidas++;

    return {
      nombre,
      estado: "Fórmula válida",
      masaMolecular: masaCalculada.toFixed(2),
      atomos: cantidadElementos
    };

  });


  return {
    totalFormulas: formulas.length,
    formulasValidas,
    formulasInvalidas,
    resultados
  };
}



const formulas = [
  {
    nombre: "Agua",
    elementos: [
      {
        simbolo: "H",
        cantidad: 2,
        masaAtomica: 1
      },
      {
        simbolo: "O",
        cantidad: 1,
        masaAtomica: 16
      }
    ],
    masaMolecular: 18,
    atomosTotales: 3
  },
  {
    nombre: "Dioxido de carbono",
    elementos: [
      {
        simbolo: "C",
        cantidad: 1,
        masaAtomica: 12
      },
      {
        simbolo: "O",
        cantidad: 2,
        masaAtomica: 16
      }
    ],
    masaMolecular: 44,
    atomosTotales: 3
  }
];


console.log(validarFormulasQuimicas(formulas));