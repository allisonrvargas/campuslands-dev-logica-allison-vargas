# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con películas de miedo.
  - Cada película contiene:
    - `titulo`: nombre de la película.
    - `terrorInicial`: nivel inicial de miedo entre 0 y 100.
    - `espectadores`: cantidad de espectadores.
    - `escenas`: arreglo de eventos que modifican el nivel de terror.
  - Cada escena contiene:
    - `tipo`: acción que ocurre en la película.
    - `intensidad`: valor de impacto de la escena.

- **Proceso:**
  - Validar que las películas tengan datos correctos.
  - Simular la evolución del nivel de terror escena por escena.
  - Aumentar o disminuir el nivel dependiendo del tipo de escena.
  - Mantener el nivel dentro del rango permitido.
  - Determinar el estado actual de la película.
  - Comparar niveles finales para encontrar la película más intensa.

- **Salida:**
  - Un objeto con:
    - Cantidad de películas simuladas.
    - Promedio de tensión final.
    - Película con mayor nivel de terror.
    - Estado final de cada película.

## Reglas identificadas

1. Debe existir al menos una película registrada.

2. Los datos iniciales deben cumplir:

\[
0 \le TerrorInicial \le 100
\]

\[
Espectadores \ge 0
\]

3. Las escenas modifican el estado de terror:

- Escena de tipo **Susto**:

\[
Terror = Terror + Intensidad
\]

- Escena de tipo **Suspenso**:

\[
Terror = Terror + \frac{Intensidad}{2}
\]

- Escena de tipo **Calma**:

\[
Terror = Terror - Intensidad
\]

4. El nivel de terror siempre debe mantenerse entre:

\[
0 \le Terror \le 100
\]

5. El estado de la película depende del nivel final:

- Si:

\[
Terror \ge 80
\]

→ "Terror extremo"

- Si:

\[
50 \le Terror < 80
\]

→ "Tensión alta"

- Si:

\[
Terror < 50
\]

→ "Suspenso controlado"

6. La película más tensa es aquella con mayor nivel de terror final.

7. Los datos inválidos son registrados sin detener la simulación completa.

## Pruebas

### Caso normal

Entrada:

```javascript
const peliculas = [
  {
    titulo: "La Casa Oscura",
    terrorInicial: 40,
    espectadores: 5000,
    escenas: [
      {
        tipo: "Suspenso",
        intensidad: 20
      },
      {
        tipo: "Susto",
        intensidad: 40
      }
    ]
  },
  {
    titulo: "El Bosque Perdido",
    terrorInicial: 30,
    espectadores: 3000,
    escenas: [
      {
        tipo: "Calma",
        intensidad: 10
      },
      {
        tipo: "Susto",
        intensidad: 50
      }
    ]
  }
];
```

Resultado esperado:

```javascript
{
  peliculasSimuladas: 2,
  promedioTension: 70,
  peliculaMasTensa: "La Casa Oscura",
  resultados: [
    {
      titulo: "La Casa Oscura",
      nivelTensionFinal: 90,
      estadoActual: "Terror extremo",
      espectadores: 5000
    },
    {
      titulo: "El Bosque Perdido",
      nivelTensionFinal: 70,
      estadoActual: "Tensión alta",
      espectadores: 3000
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const peliculas = [
  {
    titulo: "Película inválida",
    terrorInicial: 150,
    espectadores: -5,
    escenas: []
  }
];
```

Resultado esperado:

```javascript
{
  peliculasSimuladas: 1,
  promedioTension: 0,
  peliculaMasTensa: "Ninguna",
  resultados: [
    {
      titulo: "Película inválida",
      estado: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución simula la evolución del estado de una película de miedo mediante eventos que modifican progresivamente su nivel de terror.

Cada película inicia con un nivel determinado y atraviesa una secuencia de escenas donde el miedo puede aumentar o disminuir. Después de cada cambio se evalúa el estado actual para determinar la intensidad alcanzada.

El algoritmo utiliza funciones, arreglos, ciclos, acumuladores y condiciones lógicas para representar un sistema de simulación donde los estados cambian según reglas definidas, permitiendo analizar diferentes escenarios de una película de terror.