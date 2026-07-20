# Plantilla de solucion

# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con los resultados de varios jugadores de un torneo de esports.
  - Cada jugador contiene:
    - `nombre`: nombre del participante.
    - `puntaje`: puntuación obtenida durante el torneo.

- **Proceso:**
  - Validar que exista al menos un jugador registrado.
  - Verificar que los puntajes sean valores válidos.
  - Recorrer los jugadores utilizando un ciclo para acumular los puntajes.
  - Calcular el promedio:

    \[
    Promedio=\frac{\sum Puntajes}{Cantidad\ de\ jugadores}
    \]

  - Ordenar los puntajes para calcular la mediana:
    - Si la cantidad de datos es impar, la mediana corresponde al valor central.
    - Si la cantidad es par, la mediana corresponde al promedio de los dos valores centrales.
  - Evaluar el rendimiento considerando simultáneamente el promedio y la mediana.

- **Salida:**
  - Un objeto con:
    - Cantidad de jugadores evaluados.
    - Promedio de puntajes.
    - Mediana.
    - Nivel de rendimiento del torneo.

## Reglas identificadas

1. Todos los puntajes deben ser mayores o iguales a cero.
2. El promedio se obtiene sumando todos los puntajes y dividiendo entre la cantidad de jugadores.
3. La mediana requiere ordenar previamente los puntajes de menor a mayor.
4. Si la cantidad de puntajes es impar, la mediana corresponde al valor central.
5. Si la cantidad de puntajes es par, la mediana es el promedio de los dos valores centrales.
6. La clasificación depende de varias condiciones:
   - Promedio **≥ 90** y mediana **≥ 90** → **"Nivel Profesional"**.
   - Promedio **≥ 75** y mediana **≥ 75** → **"Nivel Competitivo"**.
   - Promedio **≥ 60** → **"Nivel Intermedio"**.
   - En cualquier otro caso → **"Nivel Inicial"**.

## Pruebas

### Caso normal

Entrada:

```javascript
const jugadores = [
  { nombre: "Nova", puntaje: 92 },
  { nombre: "Shadow", puntaje: 88 },
  { nombre: "Blaze", puntaje: 95 },
  { nombre: "Echo", puntaje: 85 }
];
```

Resultado esperado:

```javascript
{
  jugadoresEvaluados: 4,
  promedio: 90,
  mediana: 90,
  rendimiento: "Nivel Profesional"
}
```

### Caso borde

Entrada:

```javascript
const jugadores = [
  { nombre: "PlayerX", puntaje: -10 }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los puntajes no pueden ser negativos."
}
```

## Explicacion final

La solución analiza el rendimiento de un torneo de esports mediante dos medidas estadísticas: el promedio y la mediana. Primero valida que todos los puntajes sean correctos y posteriormente utiliza un ciclo acumulador para calcular el promedio general.

Después ordena los puntajes para obtener la mediana, una medida que representa el valor central del conjunto y que ayuda a reducir el impacto de resultados extremos. Finalmente, ambas métricas se combinan mediante estructuras condicionales para clasificar el nivel competitivo del torneo.

El algoritmo integra validaciones, ciclos, acumuladores, ordenamiento y cálculos estadísticos básicos para generar una evaluación objetiva y verificable del desempeño de los participantes.