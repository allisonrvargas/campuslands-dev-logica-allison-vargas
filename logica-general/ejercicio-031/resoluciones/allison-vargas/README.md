# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`listaPeleadores`) donde cada competidor cuenta con su nombre de combate (`nombre`), su masa corporal medida en kilogramos (`pesoKg`) y una bandera indicadora de urgencia en su agenda (`prioridadAlta`).
- **Proceso:** Validar que existan competidores en la lista. Recorrer el arreglo usando un ciclo para evaluar el peso de cada deportista en rangos numéricos bien delimitados, asignándolos a su categoría correspondiente y ordenándolos según su nivel de prioridad.
- **Salida:** Un objeto con el estado general del evento, el conteo total de los luchadores y una cartelera final dividida ordenadamente por categorías deportivas.

## Reglas identificadas

1. **Filtro de Inscripción:** Si no se ingresa ningún deportista en la lista, el sistema suspende la cartelera informando que no hay peleas programadas.
2. **División de Peso Estricta:** Las categorías se determinan de la siguiente manera: menos de 65 kg van a Pluma, de 65 a menos de 75 kg a Ligero, de 75 a menos de 85 kg a Wélter, y de 85 kg en adelante se asignan a Pesado.
3. **Preferencia en Agenda:** Si un peleador está configurado con prioridad alta por televisión o campeonato, su nombre se coloca en el primer lugar de la fila de su categoría, dejando a los demás en orden de llegada normal.

## Pruebas

### Caso normal

Entrada:
```javascript
const listaPeleadores = [
  { nombre: "Juan 'El Toro'", pesoKg: 82, prioridadAlta: false },
  { nombre: "Pedro 'Relámpago'", pesoKg: 60, prioridadAlta: true },
  { nombre: "Carlos 'La Roca'", pesoKg: 90, prioridadAlta: false },
  { nombre: "Luis 'Titán'", pesoKg: 80, prioridadAlta: true }
];
Resultado esperado:
JSON
{
  "estadoCartelera": "Organizada con éxito",
  "totalPeleadores": 4,
  "categorias": {
    "Pluma": [
      "Pedro 'Relámpago'"
    ],
    "Ligero": [],
    "Welter": [
      "Luis 'Titán'",
      "Juan 'El Toro'"
    ],
    "Pesado": [
      "Carlos 'La Roca'"
    ]
  }
}
Caso borde
Entrada:

JavaScript
const listaPeleadores = [];
Resultado esperado
JSON
{
  "estadoCartelera": "Cancelada",
  "motivo": "No hay peleadores registrados en la lista para organizar el evento."
}

Explicacion final
La solución funciona muy bien porque imita los emparejamientos y sorteos de un torneo de kickboxing de forma automatizada. Al usar condiciones claras basadas en los kilogramos de cada peleador, el programa los acomoda en su rincón correcto para que no haya ventajas injustas de tamaño. Además, gracias al filtro de prioridad, los combates más urgentes saltan al frente de la lista de manera automática, garantizando que el evento se planee de forma justa, limpia y con los peleadores estrella listos en primera fila.