# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`peleadores`) donde cada registro contiene el nombre del atleta y su masa corporal expresada numéricamente en kilogramos (`pesoKg`).
- **Proceso:** Comprobar la existencia de registros. Posteriormente, recorrer la colección mediante un ciclo para evaluar el rango de peso de cada competidor, distribuyendo sus identidades en listas independientes especializadas.
- **Salida:** Un objeto estructurado con tres propiedades de tipo arreglo (`pesoLigero`, `pesoMedio`, `pesoPesado`), conteniendo los nombres de los atletas clasificados correspondientemente.

## Reglas identificadas

1. **Control de Inscripción:** Si el volumen de datos de entrada es igual a cero, se aborta la división de categorías emitiendo una alerta de control.
2. **Segmentación de Categorías:** - **Peso Ligero:** Masa estrictamente menor a 65 kg.
   - **Peso Medio:** Masa mayor o igual a 65 kg y menor o igual a 80 kg.
   - **Peso Pesado:** Masa estrictamente superior a 80 kg.
3. **Aislamiento de Atributos:** Para simplificar los emparejamientos en los listados del torneo, las salidas solo deben almacenar los nombres de los peleadores.

## Pruebas

### Caso normal

Entrada:
```javascript
const peleadores = [
  { nombre: "Carlos Mendoza", pesoKg: 62 },
  { nombre: "Daniela Ruiz", pesoKg: 74 },
  { nombre: "Andrés Silva", pesoKg: 85 },
  { nombre: "Sofía Gómez", pesoKg: 68 }
];
Resultado esperado:
JSON
{
  "pesoLigero": ["Carlos Mendoza"],
  "pesoMedio": ["Daniela Ruiz", "Sofía Gómez"],
  "pesoPesado": ["Andrés Silva"]
}
Caso borde
Entrada:

JavaScript
const peleadores = [];
Resultado esperado
JSON
{
  "accion": "cancelar emparejamientos",
  "motivo": "No hay peleadores registrados en la lista para organizar."
}
Explicacion final
La solución funciona muy bien porque revisa la lista de peleadores uno por uno de forma rápida y ordenada. Al usar condiciones claras para los rangos de peso (menor de 65, entre 65 y 80, o mayor de 80), el programa sabe exactamente en qué grupo meter a cada deportista sin equivocarse ni mezclar los datos. Además, al poner una revisión al principio, el código se asegura de avisar si la lista está vacía antes de hacer cualquier cálculo, evitando que el sistema falle por falta de información.